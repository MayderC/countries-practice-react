import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchResult } from "../../components/SearchResult/SearchResult";
import { Country } from "../../components/Country/Country";
import { CountriesList } from "../../components/CountriesList/CountriesList";
import { UseContriesView } from "./index";
import { NameItemSearchResult } from "../../components/NameItemSeacrhResult/NameItemSearchResult";
import "./index.css";

export const CountriesView = () => {
  const {
    propsSearchBar,
    itemFound,
    notFound,
    items,
    theme,
    setCurrentCountry,
  } = UseContriesView();

  const clickOnResult = (item) => {
    setCurrentCountry(item);
  };
  const clickOnAll = (item) => {
    setCurrentCountry(item);
  };

  return (
    <>
      <main
        style={{ backgroundColor: theme.background }}
        className={`container__main`}
      >
        <SearchBar props={propsSearchBar} />
        <SearchResult>
          {notFound && (
            <NameItemSearchResult name={"Not found"}></NameItemSearchResult>
          )}
          {itemFound &&
            itemFound.map((item) => (
              <Link
                className="card_link"
                key={item.name.common}
                to={`/${item.name.common}`}
                onClick={() => clickOnResult(item)}
              >
                <NameItemSearchResult
                  name={item.name.common}
                ></NameItemSearchResult>
              </Link>
            ))}
        </SearchResult>
        <CountriesList>
          {items
            ? items.map((item) => (
                <Link
                  key={item.name.official}
                  onClick={() => clickOnAll(item)}
                  to={`/${item.name.official}`}
                >
                  <Country country={item} />
                </Link>
              ))
            : null}
        </CountriesList>
      </main>
    </>
  );
};
