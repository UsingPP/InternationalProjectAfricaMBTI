import React, {useState,useEffect} from 'react'
import RadarChartLeadershipData from "./RadarChartLeadershipData"
import {Divider, Rating , CircularProgress ,Container, Grid, Paper, Typography, Box } from '@mui/material'
import useStyles from "../../../styles"
import {data as dt} from "./result_data"
import SlotCounter from 'react-slot-counter';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { positions } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.css';
import { red } from '@mui/material/colors'
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

function Result(props) {
  const temp = [1,2,3,4,5]
  const lang = props.language
  const classes = useStyles();
  const data = dt[lang].data
  const title = dt[lang].title
  console.log(data)
  const discretes = data;
  const progressColor = ["success","warning","danger","danger" ]
  const [resultdata, setresultdata] = useState(1);
  const [isLoading, setIsLoading] = useState(true)

  const [isHovering, setisHorving] = useState(false);
  const [hoveingNum, setHoveingNum] = useState(1);

  function appraise_level(score){
    if (score<35){
      return 2;
    }else if (score < 70){
      return 1;
    }else{
      return 0;
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://leadershipsurvey.pythonanywhere.com/send_result/", {
      // const response = await fetch("http://127.0.0.1:8000/send_result/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ survey_name: "LeadershipSurvey" })
      });
      const resultdata = await response.json();
      //console.log(resultdata)
      setresultdata(resultdata);
      setIsLoading(false)
    } catch (error) {
      console.error('Error:', error);
    }
  };
      useEffect(() => {
        fetchData();
              }, []);
  function handleMouseOver(num)
  {
    setisHorving(true);
    setHoveingNum(num);
  };
  const handleMouseOut = () => { setisHorving(false); };
  return (
    <Container className={classes.background_box} maxWidth="lg" sx={{ borderRadius: '16px' }}>
    <div>

    </div>
    <br></br>
      <Grid container  >

        {/* Title */}
        <Grid item xs={12}sx={{ position: 'relative' }} >
          <Box sx={{ marginX: "20%", marginTop: "20px", marginBottom: "12px"}}>
            <Typography variant='h2' align='center' sx = {{ borderBottom: "1px solid black", fontFamily : "'Source Serif 4'", fontSize : 72, fontWeight : 700}}>
              {title}
            </Typography>
            <Typography variant='body1' align='center'  sx = {{fontFamily : "'Source Serif 4'", marginBottom: "21px"}}>
              LeadershipSurvey
              </Typography>
          </Box>
        </Grid>

        {/* Body */}
        <Box>
          {temp.map((none, index) => {
            return (
              <Grid container>
                <Grid item xs={4} back>
                  <Typography fontWeight={600} variant="subtitle1" align='center'> 이미지 </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography fontWeight={600} variant="subtitle1" align='center'> 내 용 이 다 ! ! ! </Typography>
                </Grid>
              </Grid>
            );
            })}

            <br/>
            <br/>
            <br/>
          {temp.map((none, index) => {
            return (
              <Grid container>
                <Grid item xs= {12} sm = {1}>
                  {index == 0 ? "진짜 타이틀" : ""}
                </Grid>
                <Grid container xs = {12} sm = {11}
                onMouseOver = {() => handleMouseOver(index)}
                onMouseOut = {handleMouseOut}>

                    <Grid item xs = {12} sm = {3} >
                      <img src="https://www.thebalancemoney.com/thmb/1UmFPhRa1-r2sJ66xktyX4MnQ_E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/leadership-definition-2948275-Final-edit-cc7103c8ac254917a692c1d5c378a169.jpg" width={"250px"} height={"200px"}/>
                    </Grid>

                    <Grid item xs={12} sm = {6} sx = {{height : '200px'}}>
                          <Box onMouseOver = {() => handleMouseOver(index)}>
                          { isHovering && index === hoveingNum  ? ( 
                            <Typography fontWeight={600} variant="subtitle1" align='center'>

                               "남을 비판하고 싶을 땐 언제나 이 점을 명심하거라" <br/>
                            아버지는 이렇게 말씀하셨다. <br/>
                            위대한 개츠비, F. 스콧 피츠제럴드 
                            </Typography>
                          ) : "123" }
                          </Box>

                    </Grid>
                </Grid>
              </Grid>
            );
            })}

            <br/>
            <br/>
            <br/>
          {temp.map((none, index) => {
            return (
              <Grid container xs = {12}>
                <Grid item xs={4} back>
                  <Typography fontWeight={600} variant="subtitle1" align='center'> 이미지 </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography variant="subtitle1" align='center'> 롤리타, 내 삶의 빛, 내 몸의 불이여. 나의 죄, 나의 영혼이여. 롤-리-타. 혀 끝이 입천장을 따라 세 걸음 걷다 세 걸음째에 앞니를 가볍게 건드린다. 롤. 리. 타. 아침에 양말 한 짝만 신고 서 있을 때 키가 4피트 10인치인 그녀는 로, 그냥 로였다. 슬랙스 차림일 때는 롤라였다. 학교에서는 돌리. 서류상의 이름은 돌로레스. 그러나 내 품에 안길 때는 언제나 롤리타였다  </Typography>
                </Grid>
                <br/>
              </Grid>
              
            );
            })}
          </Box>
          <br/><br/><br/>
        </Grid>
        
    </Container>
  )
}

export default Result
