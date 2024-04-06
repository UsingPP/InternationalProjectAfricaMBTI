import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import './index.css';
import { ThemeProvider } from "@mui/styles";
import {createTheme, CssBaseline} from "@mui/material"
import {Routes, Route, Link,BrowserRouter } from "react-router-dom"


ReactDOM.render(
  <BrowserRouter>
    <CssBaseline/>
    <App /> 
  </BrowserRouter>, document.getElementById("root"));