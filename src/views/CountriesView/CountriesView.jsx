import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchResult } from "../../components/SearchResult/SearchResult";
import { Country } from "../../components/Country/Country";
import { CountriesList } from "../../components/CountriesList/CountriesList";
import { Context } from "../../store/Conext";
import { useContext } from "react";
import { UseContriesView } from "./index";
import "./index.css";
import { NameItemSearchResult } from "../../components/NameItemSeacrhResult/NameItemSearchResult";

export const CountriesView = () => {
  const { propsSearchBar, data, itemFinded, notFound } = UseContriesView();

  const { theme, addFlagFinded } = useContext(Context);

  const clickOnResult = () => {
    addFlagFinded(itemFinded);
  };

  const clickOnAll = (item) => {
    addFlagFinded([item]);
  };

  return (
    <>
      <main
        style={{ backgroundColor: theme.background }}
        className={`container__main`}
      >
        <SearchBar props={propsSearchBar} />
        <SearchResult>
          {notFound ? (
            <NameItemSearchResult name={"Not found"}>
              error
            </NameItemSearchResult>
          ) : (
            itemFinded.map((item) => (
              <Link
                className="card_link"
                key={item.name.common}
                to={`/${item.name.common}`}
                onClick={clickOnResult}
              >
                <NameItemSearchResult
                  name={item.name.common}
                ></NameItemSearchResult>
              </Link>
            ))
          )}
        </SearchResult>
        <CountriesList>
          {data[0]?.status === 404 ? (
            <span>error</span>
          ) : (
            data.map((item) => (
              <Link
                key={item.name.official}
                onClick={() => clickOnAll(item)}
                to={`/${item.name.official}`}
              >
                <Country country={item} />
              </Link>
            ))
          )}
        </CountriesList>
      </main>
    </>
  );
};
