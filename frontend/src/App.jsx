//기타 페이지 & 컴포넌트 임포트
import About from "./pages/About.jsx";
import Intro from './pages/Intro';
import Home from './pages/Home/Home.jsx';
import SignIn from './pages/sign/signin/signin.jsx';
import Footer from './pages/components/Footer.jsx';
// 설문 페이지 임포트
import LeadershipSurvey from './pages/Surveys/LeadershipSurvey/LeadershipSurvey.jsx';
import InclusiveLeadershipSurvey from './pages/Surveys/InclusiveLeadershipSurvey/InclusiveLeadershipSurvey.jsx';
import JMLeadershipEvaluationSurvey from './pages/Surveys/JMLeadershipEvaluationSurvey/JMLeadershipEvaluationSurvey.jsx';
import SelfCheck from './pages/Surveys/SelfCheck/SelfCheck.jsx';
import DifficultiesInEmotion from './pages/Surveys/DifficultiesInEmotion/DifficultiesInEmotion.jsx';
import SelfAwareness from './pages/Surveys/SelfAwareness/SelfAawreness.jsx';
import UN17Goal from './pages/Surveys/UN17Goal/UN17Goal.jsx';
import EntrepreneurshipmindsetSurvey from './pages/Surveys/EntrepreneurshipmindsetSurvey/EntrepreneurshipmindsetSurvey.jsx';
// 결과 페이지임포트
import LeadershipSurveyResult from './pages/Surveys/LeadershipSurvey/Result.jsx';
import InclusiveLeadershipSurveyResult from './pages/Surveys/InclusiveLeadershipSurvey/Result.jsx';
import JMLeadershipEvaluationSurveyResult from './pages/Surveys/JMLeadershipEvaluationSurvey/Result.jsx';
import SelfCheckResult from './pages/Surveys/SelfCheck/Result.jsx';
import SelfAwarenessResult from './pages/Surveys/SelfAwareness/Result.jsx';
import DifficultInEmotionResult from './pages/Surveys/DifficultiesInEmotion/Result.jsx';
import UN17GoalResult from './pages/Surveys/UN17Goal/Result.jsx';
import EntrepreneurshipmindsetSurveyResult from './pages/Surveys/EntrepreneurshipmindsetSurvey/Result.jsx';
// 스타일 임포트
import './App.css';
// MUI 임포트
import { makeStyles, ThemeProvider } from '@mui/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import { createTheme } from '@mui/material/styles';

//리액트 관련
import {Routes, Route, Link} from "react-router-dom";
import React , {useState}from 'react';
import { useNavigate } from 'react-router-dom';
// 쿠키 관련
import {setCookie, getCookie, deleteCookie} from "./Functions/Cookie"

let cookieLanguage = getCookie("setLanguage")
let languageList = ["en", "ko"]
if (cookieLanguage == null){
  let browserLocales = navigator.languages === undefined 
? [navigator.language] : navigator.languages[0];
  browserLocales = browserLocales.split("-")[0]
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
  const disallowgeneral = ['/home', '/about']
  const disallowresult  = ["/LeadershipSurveyResult"  ,
                          "/InclusiveLeadershipSurveyResult"  ,
                          "/JMLeadershipEvaluationSurveyResult"  ,
                          "/SelfCheckResult"  ,
                          "/SelfAwarenessResult"  ,
                          "/DifficultInEmotionResult"  ,
                          "/UN17GoalResult"  ,
                          "/EntrepreneurshipmindsetSurveyResult"]  
  const disallowsurvey = ["/home/LeadershipSurvey"
                          ,"/home/InclusiveLeadershipSurvey"
                          ,"/home/JMLeadershipEvaluationSurvey"
                          ,"/home/SelfCheck"
                          ,"/home/SelfAwareness"
                          ,"/home/DifficultiesInEmotion"
                          ,"/home/UN17Goal"
                          ,"/home/EntrepreneurshipmindsetSurvey"]
                          const disallowedPaths = disallowgeneral + disallowresult + disallowsurvey
  if (isLoggedIn && allowpath.includes(window.location.pathname) ) {
    console.log(1)
    window.location.href = '/home';
  }
  if (!isLoggedIn && disallowedPaths.includes(window.location.pathname)) {
    window.location.href= '/signin';
  }

  return (
    <>
    {/*  language = {lang} 는 사용자가 선택한 언어에 대한 정보를 컴포넌트에 transfer해주는 역할. */}
      <ThemeProvider theme={mainTheme}>
      {isLoggedIn ? 
        <Routes>
          <Route path="/home" exact element={<Home  language = {lang} />} />
          <Route path="/about" exact element={<About  language = {lang} />} />
{/* 설문조사들 */}
          {/* 홈의 서베이 캐러셀에 반영된 것 */}
          <Route path="/home/LeadershipSurvey" exact element={<LeadershipSurvey  language = {lang}  surveyname = "LeadershipSurvey"/>} />
          <Route path="/home/InclusiveLeadershipSurvey" exact element={<InclusiveLeadershipSurvey  language = {lang}  surveyname = "InclusiveLeadershipSurvey"/>} />
          <Route path="/home/JMLeadershipEvaluationSurvey" exact element= { <JMLeadershipEvaluationSurvey  language = {lang} surveyname = "JMLeadershipEvaluationSurvey" />} />
          <Route path="/home/SelfCheck" exact element= { <SelfCheck  language = {lang} surveyname = "SelfCheck" />} />
          <Route path="/home/SelfAwareness" exact element= { <SelfAwareness language = {lang} surveyname = "SelfAwareness" />} />
          <Route path="/home/DifficultiesInEmotion" exact element= { <DifficultiesInEmotion  language = {lang} surveyname = "DifficultiesInEmotion" />} />
          <Route path="/home/UN17Goal" exact element= { <UN17Goal  language = {lang} surveyname = "UN17Goal" />} />
          <Route path="/home/EntrepreneurshipmindsetSurvey" exact element= { <EntrepreneurshipmindsetSurvey  language = {lang} surveyname = "EntrepreneurshipmindsetSurvey" />} />
          {/* 반영 x */}
{/*  */}
{/* 결과들 */}
          <Route path="/LeadershipSurveyResult" element={<LeadershipSurveyResult language = {lang} surveyname = "LeadershipSurvey" />} />       
          <Route path="/InclusiveLeadershipSurveyResult" element={<InclusiveLeadershipSurveyResult language = {lang} surveyname = "InclusiveLeadershipSurvey" />} />
          <Route path="/JMLeadershipEvaluationSurveyResult" element={<JMLeadershipEvaluationSurveyResult language = {lang} surveyname = "JMLeadershipEvaluationSurvey" />} />
          <Route path="/SelfCheckResult" element={<SelfCheckResult language = {lang} surveyname = "SelfCheck" />} />
          <Route path="/SelfAwarenessResult" element={<SelfAwarenessResult language = {lang} surveyname = "SelfAwareness" />} />
          <Route path="/DifficultInEmotionResult" element={<DifficultInEmotionResult language = {lang} surveyname = "DifficultiesInEmotion" />} />
          <Route path="/UN17GoalResult" element={<UN17GoalResult language = {lang} surveyname = "UN17Goal" />} />
          <Route path="/EntrepreneurshipmindsetSurveyResult" element={<EntrepreneurshipmindsetSurveyResult language = {lang} surveyname = "EntrepreneurshipmindsetSurvey" />} />
{/*  */}
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