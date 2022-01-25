import React from "react";
import {Link} from 'react-router-dom'
import {SearchBar} from '../../components/SearchBar/SearchBar'
import {SearchResult} from '../../components/SearchResult/SearchResult'
import {Country} from '../../components/Country/Country'
import {CountriesList} from '../../components/CountriesList/CountriesList'
import {Context} from '../../store/Conext'
import {useContext} from 'react'
import {UseContriesView} from './index' 
import "./index.css";
import { NameItemSearchResult } from "../../components/NameItemSeacrhResult/NameItemSearchResult";

export const CountriesView = () => {

  const { propsSearchBar, data, itemFinded, notFound,loading } = UseContriesView();

  const {theme} = useContext(Context)
  console.log(theme.background)
  return (
    <>
      <main style={{backgroundColor: theme.background}} className={`container__main`}>
        <SearchBar  props={propsSearchBar} />
        <SearchResult>
          {
            notFound
            ? <NameItemSearchResult name={'Not found'}>error</NameItemSearchResult>
            : itemFinded.map((item) => (
              <Link key={item.name.common} to={`/${item.name.common}`} >
                 <NameItemSearchResult name={item.name.common}></NameItemSearchResult>
              </Link>
            ))
          }
        </SearchResult>
        <CountriesList>
          {loading && data.length < 1  && <NameItemSearchResult name={'Loading'}>error</NameItemSearchResult>}
          {
            data[0]?.status === 404 
            ? <span>error</span>
            : data.map((item) => <Country key={item.name.official} country={item}/>)
          }
        </CountriesList>
      </main>
    </>
  );
};
