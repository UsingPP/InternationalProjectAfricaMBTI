import React from 'react';
import {Container, Card, CardMedia, CardContent, CardActions, CardHeader, Typography,Button,Grid,Box ,Stack} from "@mui/material"

import Header from './components/Header.jsx';
import MultipleItems from "./components/carouselSlider.jsx"
import SingleItems from "./components/SingleItems.jsx"
import DoubleItems from "./components/DoubleItems.jsx"
import { bgcolor } from '@mui/system';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import {makeStyles} from "@mui/styles"

const useStyle = makeStyles({
  slider_list : {
    padding : 10
  },
})
export default function Home() {
  const navigate = new useNavigate();
  const classes = useStyle()
  let content = null;
  if (window.innerWidth >= 1000) {
    // 너비가 1000px 이상인 경우
    content = ( <Box margin = 'auto' marginTop='30px' marginBottom='30px' sx={{borderRadius: '16px', width:"80%", bgcolor:'rgba(255,255,255,.95)'}}>
    <Box sx={{opacity : 1}}>
      <Container sx={{ display : "flex",flexDirection:"column",  alignItems:"center", opacity : 1 }}>
      <Typography sx = {{marginTop : 5, fontFamily : "'Source Serif 4'", fontWeight: 700, fontSize : 40 }}>   NEW Surveys   </Typography>
      <MultipleItems/>
      </Container>
      <br/>
      <br/>
      <br/>

      <Divider />

      <Container sx={{ display : "flex",flexDirection:"column",  alignItems:"center" }}>
            <Typography sx = {{marginTop : 5, fontFamily : "'Source Serif 4'", fontWeight: 700, fontSize : 40}}>Participated Surveys</Typography>
            <MultipleItems/>
          <br/>
          <br/>
          <br/>
          </Container>
    </Box>
  </Box> )
  }else if (window.innerWidth >= 830){
    content = (
      <Box margin = 'auto' marginTop='30px' marginBottom='30px' sx={{borderRadius: '16px', width:"90%", bgcolor:'rgba(255,255,255,.95)'}}>
      <Box sx={{opacity : 1}}>
        <Container sx={{ display : "flex",flexDirection:"column",  alignItems:"center", opacity : 1 }}>
        <Typography sx = {{marginTop : 5, fontFamily : "'Source Serif 4'", fontWeight: 700, fontSize : 40 }}>   NEW Surveys   </Typography>
        <DoubleItems/>
        </Container>
        <br/>
        <br/>
        <br/>
  
        <Divider />
  
        <Container sx={{ display : "flex",flexDirection:"column",  alignItems:"center" }}>
              <Typography sx = {{marginTop : 5, fontFamily : "'Source Serif 4'", fontWeight: 700, fontSize : 40}}>Participated Surveys</Typography>
              <DoubleItems/>
            <br/>
            <br/>
            <br/>
            </Container>
      </Box>
    </Box> 
    
    
    
     )
  }else{
    content = (<Box margin = 'auto' marginTop='30px' marginBottom='30px' sx={{borderRadius: '16px', width:"98%", bgcolor:'rgba(255,255,255,.95)'}}>
    <Box sx={{opacity : 1}}>
      <Container sx={{ display : "flex",flexDirection:"column",  alignItems:"center", opacity : 1 }}>
      <Typography sx = {{marginTop : 5, fontFamily : "'Source Serif 4'", fontWeight: 700, fontSize : 40 }}>   NEW Surveys   </Typography>
      <SingleItems/>
      </Container>
      <br/>
      <br/>
      <br/>

      <Divider />

      <Container sx={{ display : "flex",flexDirection:"column",  alignItems:"center" }}>
            <Typography sx = {{marginTop : 5, fontFamily : "'Source Serif 4'", fontWeight: 700, fontSize : 40}}>Participated Surveys</Typography>
            <SingleItems/>
          <br/>
          <br/>
          <br/>
          </Container>
    </Box>
  </Box>)
  }
  return (
    <>
      <Header ml={{ xs: '500px' }} />
      {content}
      
    </>
    );  
}
