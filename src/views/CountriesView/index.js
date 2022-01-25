import { useState, useEffect } from "react";
import { useFetchApi } from "../../hooks/useFetchApi";

export const UseContriesView = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [itemFinded, setItemFinded] = useState([])
  const { loading, getData } = useFetchApi();
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (search) {
      getData(`https://restcountries.com/v3.1/name/${search}`).then(res =>{
        if(res[0]?.status === 404){
          setNotFound(true)

          setTimeout(() => {
            setNotFound(false)
          }, 2000 );

        }else{
          setItemFinded(res)
        }
      });
    }

  }, [search]);

  useEffect(() => {
    getData("https://restcountries.com/v3.1/all").then(setData);
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
    itemFinded
  };

  return { propsSearchBar, loading, data, itemFinded, notFound };
};
