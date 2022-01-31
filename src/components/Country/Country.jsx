import React from "react";
import "./index.css";

export const Country = ({ country }) => {
  const flag = country.flags.svg || "";
  const captial = country.capital || "";

  return (
    <>
      <div className="card">
        <div className="card__flag">
          <img src={flag} alt="" />
        </div>
        <div className="card__body">
          <h2 style={{ color: "black" }}> {country.name.common}</h2>
          <p className="card__info">
            <span>Poulation: </span>
            {country.population}
          </p>
          <p className="card__info">
            <span>Region: </span>
            {country.region}
          </p>
          <p className="card__info">
            <span>Capital: </span>
            {captial[0]}
          </p>
        </div>
      </div>
    </>
  );
};
