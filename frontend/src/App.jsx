import './App.css';
import React , {useState}from 'react';
import { makeStyles, ThemeProvider } from '@mui/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { createTheme } from '@mui/material/styles';
import LeadershipSurvey from './pages/Surveys/LeadershipSurvey/LeadershipSurvey.jsx';
import InclusiveLeadershipSurvey from './pages/Surveys/InclusiveLeadershipSurvey/InclusiveLeadershipSurvey.jsx';
import Intro from './pages/Intro';
import Home from './pages/Home/Home.jsx';
import SignIn from './pages/sign/signin/signin.jsx';
import {Routes, Route, Link} from "react-router-dom";
import Result from './pages/Surveys/LeadershipSurvey/Result';
import Footer from './pages/components/Footer.jsx';
// 테스트용
import About from "./pages/About.jsx";
import { useNavigate } from 'react-router-dom';
import {setCookie, getCookie, deleteCookie} from "./Functions/Cookie"
let cookieLanguage = getCookie("setLanguage")
let languageList = ["en", "ko"]
if (cookieLanguage == null){
  let browserLocales = navigator.languages === undefined 
? [navigator.language] : navigator.languages[0];
  browserLocales = browserLocales.split("-")[0]
  console.log(browserLocalse)
  if (!languageList.includes(browserLocales)){
    browserLocales = "en"
  }
  setCookie("setLanguage", browserLocales, 10)
}

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

const lang = getCookie("setLanguage")
export default function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') || false);
  console.log("로그인?" , isLoggedIn)
  // 로그인 상태를 확인하고 isLoggedIn이 true이면 홈으로 자동으로 리디렉션
  const allowpath  = ['/','/signin']
  if (isLoggedIn && allowpath.includes(window.location.pathname) ) {
    console.log(1)
    window.location.href = '/home';
  }
  const disallowedPaths = ['/home', '/about', '/Result', '/home/LeadershipSurvey',"/home/InclusiveLeadershipSurvey"];
  if (!isLoggedIn && disallowedPaths.includes(window.location.pathname)) {
    window.location.href= '/signin';
  }

  return (
    <>
      <ThemeProvider theme={mainTheme}>
      {isLoggedIn ? 
        <Routes>
          <Route path="/home" exact element={<Home language = {lang}/>} />
          <Route path="/home/LeadershipSurvey" exact element={<LeadershipSurvey language = {lang}/>} />
          <Route path="/home/InclusiveLeadershipSurvey" exact element={<InclusiveLeadershipSurvey language = {lang}/>} />
          <Route path="/about" exact element={<About language = {lang}/>} />
          <Route path="/Result" element={<Result language = {lang}/>} />
        </Routes> 
        :
        <Routes>
          <Route path="/" exact element={<Intro language = {lang} />} />
          <Route path="/signin" exact element={<SignIn language = {lang} />} />
        </Routes> 
      }
      </ThemeProvider>
      <Footer />
    </>
  )}