import {
  SET_COUNTRIES,
  SET_COUNTRIES_FOUND,
  SET_CURRENT_COUNTRY,
  SET_BORDER_BY,
} from "./types";

export const Reducer = (state, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return { ...state, COUNTRIES: action.payload };

    case SET_COUNTRIES_FOUND:
      return { ...state, COUNTRIES_FOUND: action.payload };

    case SET_CURRENT_COUNTRY:
      return { ...state, CURRENT_COUNTRY: action.payload };

    case SET_BORDER_BY:
      return { ...state, COUNTRIES: action.payload };

    default:
      return state;
  }
};
