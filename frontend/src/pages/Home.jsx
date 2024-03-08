import { Container, Typography } from '@mui/material';
import React from 'react';
import Header from './components/Header.jsx';
import MultipleItems from "./components/carouselSlider.jsx"

export default function Home() {
  return (
    <>
      <Header ml={{ xs: '500px' }} />
      {/* <SideMenu /> */}


      <Container sx={{ display : "flex",flexDirection:"column",  alignItems:"center" }}>
      <Typography variant = "h5" sx = {{marginTop : 5}}>participated Surveys</Typography>
      <MultipleItems/>
      </Container>

      <Container sx={{ display : "flex",flexDirection:"column",  alignItems:"center" }}>
        <Typography  variant = "h5" sx = {{marginTop : 5}}>new Surveys</Typography>
        <MultipleItems/>
      </Container>
    </>
  );
}
