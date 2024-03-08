import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import './index.css';
import { ThemeProvider } from "@mui/styles";
import {createTheme, CssBaseline} from "@mui/material"
import {Routes, Route, Link,BrowserRouter } from "react-router-dom"
const theme = createTheme();
ReactDOM.render(
  <BrowserRouter>
  <ThemeProvider theme = {theme}>
    <CssBaseline/>
    <App/> 
  </ThemeProvider>
  </BrowserRouter>, document.getElementById("root"));