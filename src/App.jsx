import { useState } from 'react';
import './App.css';
import React from 'react';
import SideMenu from './pages/components/SideMenu.jsx';
import Header from './pages/components/Header.jsx';
import { makeStyles, ThemeProvider } from '@mui/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { createTheme } from '@mui/material/styles';
import LeadershipSurvey from './pages/LeadershipSurvey/LeadershipSurvey.jsx';
import Intro from './pages/Intro';
import Home from './pages/Home.jsx';
import SignIn from './pages/sign/signin.jsx';
import { Route, Routes } from 'react-router-dom';
const useStyles = makeStyles({
  appMain: {
    '@media (min-width:600px)': {
      paddingLeft: '120px',
    },
    width: '100%',
  },
});
const theme = createTheme();

export default function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" exact element={<Intro />}></Route>
          <Route path="/signin" exact element={<SignIn />}></Route>
          <Route path="/home" exact element={<Home />}></Route>
          <Route
            path="/home/survey_LeaderShip"
            exact
            element={<LeadershipSurvey />}
          ></Route>
          {/* <Route path="/home" exact element={< />}></Route> */}
          {/* <Route path="/about" exact element={<About />}></Route> */}
          {/* <Route path="/blogs" exact element={<Blogs />}></Route> */}
        </Routes>
        {/* <SideMenu />
        <div className={classes.appMain}>
          <Header />
          <LeadershipSurvey />
        </div> */}
      </ThemeProvider>
    </>
  );
}
