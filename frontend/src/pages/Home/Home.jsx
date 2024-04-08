import React from 'react';
import { Container, Card, CardMedia, CardContent, CardActions, CardHeader, Typography, Button, Grid, Box, Stack } from "@mui/material"

import Header from '../components/Header.jsx';
import Surveycarousel from "../components/Surveycarousel.jsx"
import { bgcolor } from '@mui/system';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles"
import {data as languageInfo} from "./data.jsx"



const useStyle = makeStyles({
  slider_list: {
    padding: 10
  },
})
export default function Home(props) {
  //  App.jsx에서 Router에서 Home태그에 함께  language = {lang} 로 넘겨준 정보를 props.language로 받아서, ./data.jsx의 해당 언어 텍스트를 파싱하는 용도
  const languageText = languageInfo[props.language]

  const navigate = new useNavigate();
  const classes = useStyle()
  let content = null;
  let  slideOption = [0,0]
  if (window.innerWidth >= 1000) { 
    slideOption = [3,1]
  }else if (window.innerWidth >= 830)  { 
    slideOption = [2,1 ]
  }else {
    slideOption = [1,1 ]
  }
  return (<>
  <Header></Header>
  <Box margin='auto' marginTop='30px' marginBottom='30px' sx={{ borderRadius: '16px', width: "80%", bgcolor: 'rgba(255,255,255,.95)' }}>
      <Box sx={{ opacity: 1 }}>
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: 1 }}>
          <Typography sx={{ marginTop: 5, fontFamily: "'Source Serif 4'", fontWeight: 700, fontSize: 40 }}>   {languageText.newsurveys}  </Typography>
          <Surveycarousel btntxt = {languageText["gosurvey"]} surveys={languageText["surveys"]} slidesToShow={slideOption[0]} slidesToScroll={slideOption[1]} />
        </Container>
        <br />
        <br />
        <br />

        <Divider />

        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography sx={{ marginTop: 5, fontFamily: "'Source Serif 4'", fontWeight: 700, fontSize: 40 }}>{languageText.participated}</Typography>
          <Surveycarousel btntxt = {languageText["showresult"]} surveys={languageText["surveys"]}slidesToShow={slideOption[0]} slidesToScroll={slideOption[1]} />

          <br />
          <br />
          <br />
        </Container>
      </Box>
    </Box></>)
  
}
