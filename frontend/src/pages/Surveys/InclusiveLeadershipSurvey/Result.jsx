import React, {useState,useEffect} from 'react'
import {Divider, Rating , CircularProgress ,Container, Grid, Paper, Typography, Box } from '@mui/material'
import useStyles from "../../../styles"
import {data as dt} from "./result_data"
import SlotCounter from 'react-slot-counter';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.css';
import RadarChartInclusiveLeadershipData from "./RadarChartInclusiveLeadershipData"
// props.surveyname 은 범용적으로 사용할 이 설문조사의 명칭 (백엔드, 프론트엔드 통일이름 (구글 스프레트 시트 참조))
function InclusiveLeadershipSurveyResult(props) {
  const lang = props.language
  const data = dt[lang].data
  const discretes = data;
  const classes = useStyles();
  const title = dt[lang].title
  // 프로그레스 바 설정
  const progressColor = ["success","warning","danger","danger" ]
  function appraise_level(score){
    if (score<35){
      return 2;
    }else if (score < 70){
      return 1;
    }else{
      return 0;
    }
  }

  //패치로 받은 결과 데이터가 담길 변수
  const [resultdata, setresultdata] = useState(1);

  // 로딩중이면 써큘러 로딩 이미지가 나오도록 하기 위해
  const [isLoading, setIsLoading] = useState(true)

  // 서버에서 설문조사 참여자의 response데이터를 응답받는 코드
  const fetchData = async () => {
    try {
      // const response = await fetch("https://leadershipsurvey.pythonanywhere.com/send_result/", {
      const response = await fetch("http://127.0.0.1:8000/send_result/", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ survey_name: props.surveyname})
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
              {title}
            </Typography>
            <Typography variant='body1' align='center'  sx = {{fontFamily : "'Source Serif 4'", marginBottom: "21px"}}>
              {props.surveyname}
              </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item md={6} xs = {12}>
              <RadarChartInclusiveLeadershipData language = {lang}  surveyname = {props.surveyname}></RadarChartInclusiveLeadershipData>
            </Grid>
            <Grid item md={6} xs = {12} paddingX = "10px !important">
              <Box >
                <Typography variant="h5" sm = {{marginY:"1%"}}md = {{marginLeft: "5%" ,marginY:"2%"}}>
                  Total Point
                </Typography>
                <Typography variant="h1" sx = {{fontFamily : "'Source Serif 4'", fontWeight : "600"}} align="center" >
                {isLoading ? <CircularProgress/> : <SlotCounter value={() => {
                  // 배열의 평균 계산
                  const values = Object.values(resultdata["mean_by_sector"]);
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
                  console.log("여기다 ㅇ기 ", discrete, resultdata)
                  const int = resultdata["mean_by_sector"][discrete["code"]].toFixed(1)
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
              console.log(discrete, resultdata["mean_by_sector"])
              const int = resultdata["mean_by_sector"][discrete["code"]].toFixed(1)
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

export default InclusiveLeadershipSurveyResult
