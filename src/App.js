import { useContext, useEffect } from "react";
import { Context } from "./store/Conext";
import { Routes, Route } from "react-router-dom";
import { CountryNavbar } from "./components/CountryNavbar/CountryNavbar";
import { CountriesView } from "./views/CountriesView/CountriesView";
import { CountryDetail } from "./components/CountryDetail/CountryDetail";

function App() {
  const { setCountries } = useContext(Context);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setCountries(res);
      });
  }, [setCountries]);

  return (
    <>
      <CountryNavbar />
      <Routes>
        <Route path="/" element={<CountriesView></CountriesView>}></Route>
        <Route path="/:name" element={<CountryDetail></CountryDetail>}></Route>
      </Routes>
    </>
  );
}

export default App;
