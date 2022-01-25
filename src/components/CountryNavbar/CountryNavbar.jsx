import {Context} from '../../store/Conext'
import {useContext} from 'react'
import "./index.css";

export const CountryNavbar = () => {

  const {switchTheme, theme} = useContext(Context)

  return (
    <>
      <nav className={theme.name}>
        <div className="name">
          <h1>Country</h1>
        </div>
        <div className="theme_selector">
          <span onClick={switchTheme}>theme selector</span>
        </div>
      </nav>
    </>
  );
};
