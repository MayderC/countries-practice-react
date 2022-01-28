import { Routes, Route} from 'react-router-dom'
import {CountryNavbar} from './components/CountryNavbar/CountryNavbar'
import { CountriesView } from "./views/CountriesView/CountriesView";
import {ContextProvider} from './store/ContextProvider'
import { CountryDetail } from './components/CountryDetail/CountryDetail';


function App() {


  return (
    <>
    <ContextProvider>
      <CountryNavbar />
        <Routes>
          <Route path="/" element={<CountriesView></CountriesView>}></Route>
          <Route path="/:name" element={<CountryDetail></CountryDetail>}></Route>
        </Routes>
    </ContextProvider>
    </>
  );
}

export default App;
