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
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') || false);
  console.log("로그인?" , isLoggedIn)
  // 로그인 상태를 확인하고 isLoggedIn이 true이면 홈으로 자동으로 리디렉션
  const allowpath  = ['/','/signin']
  if (isLoggedIn && allowpath.includes(window.location.pathname) ) {
    console.log(1)
    window.location.href = '/home';
  }
  const disallowedPaths = ['/home', '/about', '/Result', '/home/survey_LeaderShip'];
  if (!isLoggedIn && disallowedPaths.includes(window.location.pathname)) {
    window.location.href= '/signin';
  }

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={mainTheme}>
      {isLoggedIn ? 
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/home/survey_LeaderShip" exact element={<LeadershipSurvey />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/Result" element={<Result />} />
        </Routes> 
        :
        <Routes>
          <Route path="/" exact element={<Intro />} />
          <Route path="/signin" exact element={<SignIn />} />
        </Routes> 
      }
      </ThemeProvider>
      <Footer />
    </>
  )}