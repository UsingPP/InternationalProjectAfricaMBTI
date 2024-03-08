import './App.css';
import React , {useState}from 'react';
import { makeStyles, ThemeProvider } from '@mui/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { createTheme } from '@mui/material/styles';
import LeadershipSurvey from './pages/LeadershipSurvey/LeadershipSurvey.jsx';
import Intro from './pages/Intro';
import Home from './pages/Home.jsx';
import SignIn from './pages/sign/signin.jsx';
import {Routes, Route, Link} from "react-router-dom";
import Result from './pages/Result';
import Footer from './pages/components/Footer.jsx';
// 테스트용
import About from "./pages/About.jsx";


const useStyles = makeStyles({
  appMain: {
    background : "rgb(136,176,75)",
    width: '100%',
  },
});


const mainTheme = createTheme(
   {
   typography: {
     fontFamily: [
      'Source Serif 4',
      '"Nanum Myeongjo"',
      , 'serif'
    ].join(','),
    },
  }
);


export default function App() {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') || false);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={mainTheme}>
      {isLoggedIn ? 
        <Routes>
            <Route path ="/home" exact element = {<Home/>}></Route>
          <Route
            path="/home/survey_LeaderShip"
            exact
            element={<LeadershipSurvey />}
          ></Route>
          <Route path="/about" exact element={<About />}></Route>
            <Route path = "/Result" element = {<Result/>}/>
        </Routes> 
        :
        <Routes>
          <Route path="/" exact element={<Intro />}></Route>
          <Route path="/signin" exact element={<SignIn />}></Route>
          <Route path = "/Result" element = {<Result/>}/>
        </Routes> 
        }
      </ThemeProvider>
      <Footer/>
    </>
  );
}
