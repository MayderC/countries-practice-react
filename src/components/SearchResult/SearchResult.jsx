import React from "react";
import './index.css'

export const SearchResult = ({ children }) => {
  return (
    <>
      <div className="search__result">
        <>
        {children}
        </>
      </div>
    </>
  );
};
