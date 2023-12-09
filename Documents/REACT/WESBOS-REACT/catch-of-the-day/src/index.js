import React from "react";
import { render } from "react-dom";
import StorePicker from "./components/StorePicker";
import "./css/style.css";
import App from "./components/App";
import Header from "./components/Header";

//render determines what html is put on page

render(<App />, document.querySelector("#main"));
