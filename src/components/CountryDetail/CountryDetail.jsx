import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Country } from "../Country/Country";
import { Context } from "./../../store/Conext";
import "./index.css";

export const CountryDetail = () => {
  const context = useContext(Context);
  const country = context.state.CURRENT_COUNTRY;
  const navigate = useNavigate();

  useEffect(() => {
    if (!country.capital) {
      navigate("/");
    }
  });

  return (
    <main
      style={{ backgroundColor: context.theme.background }}
      className={`detail__main ${context.theme.name}`}
    >
      <div className="navegation__back">
        <Link className="link" to="/">
          Atras
        </Link>
      </div>

      <div className="detail__body">
        <section className="country__details">
          <div className={`detail__items`}>
            <div className="country_detail-item">
              {country.region && <Country country={country}></Country>}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
