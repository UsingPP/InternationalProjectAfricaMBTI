import React, {useState,useEffect} from 'react'
import RadarChartLeadershipData from "../charts/RadarChartLeadershipData"
import {Divider, Rating , CircularProgress ,Container, Grid, Paper, Typography, Box } from '@mui/material'
import useStyles from "../styles"
import { PrettoSlider } from '../charts/Slider'
import {data} from "../Data/leadershipdata"
import SlotCounter from 'react-slot-counter';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { positions } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.css';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const init_data = {
  "leadership_score_self": "",
  "leadership_mean_by_sector": {
      "L_ST":"",
      "L_A":"",
      "L_N":"",
      "L_S":"",
      "L_C":"",
      "L_CT":"",
      "L_SA":"",
      "L_PS":"",
  }
}
function onClickpdf(){
}

function Result() {
  const classes = useStyles();
  const discretes = data;
  const progressColor = ["success","warning","danger","danger" ]
  const backColor1 = ["#7FFF00C2","#FFFF00C2",	"#FF4500C2"	 ]
  const backColor2 = ["#7FFF0030","#FFFF0030",	"#FF450030"	 ]
  const borderColor = ["#32CD32C2","#FFD700C2",	"	#DC143CC2"	 ]
  const [resultdata, setresultdata] = useState(1);
  const [isLoading, setIsLoading] = useState(true)
  function appraise_level(score){
    if (score<35){
      return 2;
    }else if (score < 70){
      return 1;
    }else{
      return 0;
    }
  }

  const fetchData = async () => {
    try {
      const response = await fetch("http://leadershipsurvey.pythonanywhere.com/send_result/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ survey_name: "leadership_survey01" })
      });
      const resultdata = await response.json();
      setresultdata(resultdata);
      setIsLoading(false)
    } catch (error) {
      console.error('Error:', error);
    }
  };
      useEffect(() => {
        fetchData();
              }, []);

  return (
    <Container className={classes.background_box} maxWidth="lg" sx={{ borderRadius: '16px' }}>
    <div>

    </div>
    <br></br>
      <Grid container  >
        <Grid item xs={12}sx={{ position: 'relative' }} >
          <Box sx={{ marginX: "20%", marginTop: "20px", marginBottom: "12px"}}>
            <Typography variant='h2' align='center' sx = {{ borderBottom: "1px solid black", fontFamily : "'Source Serif 4'", fontSize : 72, fontWeight : 700}}>
              Your Survey Result
            </Typography>
            <Typography variant='body1' align='center'  sx = {{fontFamily : "'Source Serif 4'", marginBottom: "21px"}}>
              ---Servey Name LongLongTEXT IS HERE---
              </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item md={6} xs = {12}>
              <RadarChartLeadershipData></RadarChartLeadershipData>
            </Grid>
            <Grid item md={6} xs = {12} paddingX = "10px !important">
              <Box >
                <Typography variant="h5" sm = {{marginY:"1%"}}md = {{marginLeft: "5%" ,marginY:"2%"}}>
                  Total Point
                </Typography>
                <Typography variant="h1" sx = {{fontFamily : "'Source Serif 4'", fontWeight : "600"}} align="center" >
                {isLoading ? <CircularProgress/> : <SlotCounter value={() => {
                  // 배열의 평균 계산
                  const values = Object.values(resultdata["leadership_mean_by_sector"]);
                  const sum = values.reduce((acc, cur) => acc + cur, 0);
                  const average = sum / values.length;
                  return average.toFixed(1);
                }} />}

                </Typography>


              </Box>
              <br></br>
              <Box >
                <Typography variant="h5" marginLeft="5%" marginY="2%">
                  <Box >Category</Box>
                </Typography>
                {isLoading ?<CircularProgress/> : discretes.map((discrete) =>{
                  const int = resultdata["leadership_mean_by_sector"][discrete["code"]].toFixed(1)
                  console.log(int, progressColor[Math.floor(int/20)])
                  const index = appraise_level(int)
                  return (
                  <Paper sx = {{marginY : "12px" , paddingY : "5px"}}>
                  <Grid container>
                    <Grid item xs={12} sm = {4}>
                      <Typography fontWeight={600} variant="subtitle1" align='center'>{discrete.name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm = {8}>
                      <ProgressBar  animated label = {int} variant={progressColor[index]} now={int} />
                    </Grid>
                  </Grid>
                  </Paper>
                )}) }
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <br />
          <Paper sx = {{marginBottom : "120px"}}>
              <br />



              {isLoading ? <CircularProgress/> : discretes.map((discrete) => {
              console.log(discrete, resultdata["leadership_mean_by_sector"])
              const int = resultdata["leadership_mean_by_sector"][discrete["code"]].toFixed(1)
              const index = appraise_level(int)
              return(
              <Grid container className={classes.resultDetail}>
                {/* <Grid container borderRadius = "10px" marginBottom = "13px"className={classes.resultDetail}border ="3px solid" borderColor = {borderColor[index]} backgroundColor = {backColor2[index]}></Grid> */}
                <Grid item xs={12}>
                  <Typography align = "center" marginX = "10px" marginY = "12px"
                              gutterBottom marginLeft = "12px"
                              sx = {{fontFamily : "'Source Serif 4'", fontSize : 46, fontWeight : 700}}>
                                {/* <Typography variant='h4' marginY = "12px" gutterBottom marginLeft = "12px" backgroundColor ={backColor1[index]} ></Typography> */}
                    {discrete.name} <Rating  precision={0.5} name="read-only" value={Math.floor( int / 10)/2} readOnly />
                  </Typography>

                </Grid>
                <Grid item xs = {12} align = "center">
                  <Paper  align = "left" sx = {{width  : "90%" ,marginBottom : "20px", paddingY : "20px" ,paddingX : "18px"}}>
                    <Typography sx = {{ fontFamily : "'Source Serif 4'", fontSize : 32, fontWeight : 500}}>
                    {discrete.level[index].name}
                    </Typography>
                <Divider orientation="horizontal"sx = {{borderBottomWidth: 5, borderColor : "#00003360"}} flexItem />

                    {discrete.level[index].detail.split("\n").map((d)=>(
                      <Typography variant = "body1" marginY = "20px" sx = {{fontFamily : "'Nanum Myeongjo'", fontSize : 17}}>
                      {d}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
                </Grid>
              )})}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Result
