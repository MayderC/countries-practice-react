import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./store/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
