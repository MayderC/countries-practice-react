import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { Country } from "../Country/Country";
import { Context } from "./../../store/Conext";
import "./index.css";

export const CountryDetail = () => {
  const context = useContext(Context);
  const navigate = useNavigate();
  const country = context.flagFinded[0];

  useEffect(() => {
    if (!country) {
      navigate("/");
    }
  }, [country, navigate]);

  return (
    <main
      style={{ backgroundColor: context.theme.background }}
      className={`detail__main ${context.theme.name}`}
    >
      <Link className="link" to="/">
        Atras
      </Link>

      <section className="country__details">
        <div className="detail__title">
          {country && <h1>Detalles generales de {country.name.common}</h1>}
        </div>
        <div className={`detail__items`}>
          <div className="country_detail-item">
            {country && <Country country={country}></Country>}
          </div>
          <div className="country_detail-item">
            {country && <h2>{country.name.common}</h2>}
          </div>
        </div>
      </section>
    </main>
  );
};
