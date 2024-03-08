import { Container, Typography ,Box} from '@mui/material';
import React from 'react';
import Header from './components/Header.jsx';
import MultipleItems from "./components/carouselSlider.jsx"
import { bgcolor } from '@mui/system';
import Divider from '@mui/material/Divider';
export default function Home() {
  return (
    <>
      <Header ml={{ xs: '500px' }} />
      {/* <SideMenu /> */}
      <Box margin = 'auto' marginTop='30px' marginBottom='30px' sx={{borderRadius: '16px', width:"80%", bgcolor:'rgba(255,255,255,.95)'}}>
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
      </Box>
    </>
    );  
}
