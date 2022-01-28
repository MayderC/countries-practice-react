import { useState, useEffect } from "react";

export const UseContriesView = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  //todo: data en el stado global para, realizar una solo consulta de todos los items
  //todo : solo buscar cuando ingresa un nombre.
  const [data, setData] = useState([]);

  // todo: itemFinded en el stado global, para mentener el resultado de la busqueda despues de ver una bandera
  const [itemFinded, setItemFinded] = useState([]);
  const [notFound, setNotFount] = useState(false);

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
            setItemFinded(res);
          }
        });
    }
  }, [search]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  const handleInputValue = ({ target }) => {
    setInput(target.value);
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
    itemFinded,
  };

  return { propsSearchBar, data, itemFinded, notFound };
};
