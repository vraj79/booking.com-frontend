import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "react-date-range/dist/styles.css"; //react-date-range main css file
import "react-date-range/dist/theme/default.css"; //react-date-range theme css file

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
