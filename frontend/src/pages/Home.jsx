import React from 'react';
import { Container, Card, CardMedia, CardContent, CardActions, CardHeader, Typography, Button, Grid, Box, Stack } from "@mui/material"

import Header from './components/Header.jsx';
import Surveycarousel from "./components/Surveycarousel.jsx"
import { bgcolor } from '@mui/system';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles"
const survey =
  [
    {
      title: "LeadershipSurvey",
      image: "data:image/png;base64,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",
      describe: "LeadershipSurvey descibe Here",
      link: "/home/LeadershipSurvey"
    },
    {
      title: "InclusiveLeadershipSurvey",
      image: "https://www.thebalancemoney.com/thmb/1UmFPhRa1-r2sJ66xktyX4MnQ_E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/leadership-definition-2948275-Final-edit-cc7103c8ac254917a692c1d5c378a169.jpg",
      describe: "InclusiveLeadershipSurvey descibe Here",
      link: "/home/InclusiveLeadershipSurvey"
    }
  ]
const useStyle = makeStyles({
  slider_list: {
    padding: 10
  },
})
export default function Home() {
  const navigate = new useNavigate();
  const classes = useStyle()
  let content = null;
  if (window.innerWidth >= 1000) {
    // 너비가 1000px 이상인 경우
    content = (<Box margin='auto' marginTop='30px' marginBottom='30px' sx={{ borderRadius: '16px', width: "80%", bgcolor: 'rgba(255,255,255,.95)' }}>
      <Box sx={{ opacity: 1 }}>
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: 1 }}>
          <Typography sx={{ marginTop: 5, fontFamily: "'Source Serif 4'", fontWeight: 700, fontSize: 40 }}>   NEW Surveys   </Typography>
          <Surveycarousel surveys={survey} slidesToShow={3} slidesToScroll={1} />
        </Container>
        <br />
        <br />
        <br />

        <Divider />

        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography sx={{ marginTop: 5, fontFamily: "'Source Serif 4'", fontWeight: 700, fontSize: 40 }}>Participated Surveys</Typography>
          <Surveycarousel surveys={survey} slidesToShow={3} slidesToScroll={1} />

          <br />
          <br />
          <br />
        </Container>
      </Box>
    </Box>)
  } else if (window.innerWidth >= 830) {
    content = (
      <Box margin='auto' marginTop='30px' marginBottom='30px' sx={{ borderRadius: '16px', width: "90%", bgcolor: 'rgba(255,255,255,.95)' }}>
        <Box sx={{ opacity: 1 }}>
          <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: 1 }}>
            <Typography sx={{ marginTop: 5, fontFamily: "'Source Serif 4'", fontWeight: 700, fontSize: 40 }}>   NEW Surveys   </Typography>
            <Surveycarousel surveys={survey} slidesToShow={2} slidesToScroll={1} />

          </Container>
          <br />
          <br />
          <br />

          <Divider />

          <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography sx={{ marginTop: 5, fontFamily: "'Source Serif 4'", fontWeight: 700, fontSize: 40 }}>Participated Surveys</Typography>
            <Surveycarousel surveys={survey} slidesToShow={2} slidesToScroll={1} />

            <br />
            <br />
            <br />
          </Container>
        </Box>
      </Box>



    )
  } else {
    content = (<Box margin='auto' marginTop='30px' marginBottom='30px' sx={{ borderRadius: '16px', width: "98%", bgcolor: 'rgba(255,255,255,.95)' }}>
      <Box sx={{ opacity: 1 }}>
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: 1 }}>
          <Typography sx={{ marginTop: 5, fontFamily: "'Source Serif 4'", fontWeight: 700, fontSize: 40 }}>   NEW Surveys   </Typography>
          <Surveycarousel surveys={survey} slidesToShow={1} slidesToScroll={1} />

        </Container>
        <br />
        <br />
        <br />

        <Divider />

        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography sx={{ marginTop: 5, fontFamily: "'Source Serif 4'", fontWeight: 700, fontSize: 40 }}>Participated Surveys</Typography>
          <Surveycarousel surveys={survey} slidesToShow={1} slidesToScroll={1} />

          <br />
          <br />
          <br />
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
