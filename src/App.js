import { Routes, Route} from 'react-router-dom'
import {CountryNavbar} from './components/CountryNavbar/CountryNavbar'
import { CountriesView } from "./views/CountriesView/CountriesView";
import {ContextProvider} from './store/ContextProvider'

function App() {


  return (
    <>
    <ContextProvider>
      <CountryNavbar />
        <Routes>
          <Route path="/" element={<CountriesView></CountriesView>}></Route>
          <Route path="/:name" element={<h1>Test</h1>}></Route>
        </Routes>
    </ContextProvider>
    </>
  );
}

export default App;
