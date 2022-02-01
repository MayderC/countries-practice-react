import { Context } from "../../store/Conext";
import { useContext } from "react";
import "./index.css";

import night from "../../assets/img/night.svg";
import ligth from "../../assets/img/light.png";

export const CountryNavbar = () => {
  const { switchTheme, theme } = useContext(Context);

  return (
    <>
      <nav className={theme.name}>
        <div className="name">
          <h1>Country</h1>
        </div>
        <div onClick={switchTheme} className="theme_selector">
          {theme.name === "night" ? (
            <img src={ligth} alt="" srcset="" />
          ) : (
            <img src={night} alt="" srcset="" />
          )}
        </div>
      </nav>
    </>
  );
};
