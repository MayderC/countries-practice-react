import { Context } from "./Conext";
import { useState, useReducer, useCallback } from "react";
import { Reducer } from "./reducer";
import {
  SET_COUNTRIES,
  SET_COUNTRIES_FOUND,
  SET_CURRENT_COUNTRY,
  SET_BORDER_BY,
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

const contextState = {
  COUNTRIES: [],
  CURRENT_COUNTRY: {},
  COUNTRIES_FOUND: [],
};

export const ContextProvider = ({ children }) => {
  const [theme, setState] = useState(initialState.night);
  const [state, dispatch] = useReducer(Reducer, contextState);

  const switchTheme = () => {
    if (theme.name === "night") {
      setState({ ...initialState.light });
    } else if (theme.name === "light") {
      setState({ ...initialState.night });
    }
  };

  const setCountriesFound = useCallback((countries) => {
    dispatch({ type: SET_COUNTRIES_FOUND, payload: countries });
  }, []);

  const setCountries = useCallback((countries) => {
    dispatch({ type: SET_COUNTRIES, payload: countries });
  }, []);

  const setCurrentCountry = useCallback((country) => {
    dispatch({ type: SET_CURRENT_COUNTRY, payload: country });
  }, []);

  const setNewOrder = useCallback((countries) => {
    dispatch({ type: SET_BORDER_BY, payload: countries });
  }, []);

  return (
    <Context.Provider
      value={{
        theme,
        state,
        switchTheme,
        setCountriesFound,
        setCountries,
        setCurrentCountry,
        setNewOrder,
      }}
    >
      {children}
    </Context.Provider>
  );
};
