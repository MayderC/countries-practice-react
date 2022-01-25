import React from "react";
import "./index.css";

export const CountriesList = ({ children }) => {
  return (
    <>
      <div className="countries__container">{children}</div>
    </>
  );
};
