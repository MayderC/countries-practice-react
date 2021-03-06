import { useState, useEffect, useContext } from "react";
import { Context } from "../../store/Conext";

export const UseContriesView = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  // todo: itemFound en el stado global, para mentener el resultado de la busqueda despues de ver una bandera
  const [notFound, setNotFount] = useState(false);

  // obtieniendo estado global useContext
  const { theme, setCountriesFound, setCurrentCountry, state } =
    useContext(Context);

  useEffect(() => {
    if (search) {
      fetch(`https://restcountries.com/v3.1/name/${search}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 404) {
            setNotFount(true);
            setTimeout(() => {
              setNotFount(false);
            }, 2000);
          } else {
            setCountriesFound(res);
          }
        });
    }
  }, [search, setCountriesFound]);

  const handleInputValue = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSetSearch = (event) => {
    event.preventDefault();
    setSearch(input);
    setInput("");
  };

  const propsSearchBar = {
    input,
    handleSetSearch,
    handleInputValue,
  };

  return {
    theme,
    propsSearchBar,
    itemFound: state.COUNTRIES_FOUND,
    notFound,
    setCurrentCountry,
    items: state.COUNTRIES,
  };
};
