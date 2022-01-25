import React from "react";
import './index.css'


export const Country = ({ country }) => {

  const flag = country.flags.svg

  return (
    <>
      <div className="card">
        <div className="card__flag">
          <img src={flag} alt="" />
        </div>
        <p>{country.name.common}</p>
      </div>
    </>
  );
};
