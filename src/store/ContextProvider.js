import { Context } from "./Conext";
import { useState, useReducer } from "react";
import { Reducer } from "./reducer";
import {
  SET_COUNTRIES,
  SET_COUNTRIES_FOUND,
  SET_CURRENT_COUNTRY,
} from "./types";

const initialState = {
  night: {
    name: "night",
    background: "#212e37",
    color: "#fff",
  },
  light: {
    name: "light",
    background: "#dedede",
    color: "212e37",
  },
};

export const ContextProvider = ({ children }) => {
  const [theme, setState] = useState(initialState.night);
  const [state, dispatch] = useReducer(Reducer, {});

  const switchTheme = () => {
    if (theme.name === "night") {
      setState({ ...initialState.light });
    } else if (theme.name === "light") {
      setState({ ...initialState.night });
    }
  };

  const setCountriesFound = (countries) => {
    dispatch({ type: SET_COUNTRIES_FOUND, payload: countries });
  };

  const setCountries = (countries) => {
    dispatch({ type: SET_COUNTRIES, payload: countries });
  };

  const setCurrentCountry = (country) => {
    dispatch({ type: SET_CURRENT_COUNTRY, payload: country });
  };

  return (
    <Context.Provider
      value={{
        theme,
        state,
        switchTheme,
        setCountriesFound,
        setCountries,
        setCurrentCountry,
      }}
    >
      {children}
    </Context.Provider>
  );
};
