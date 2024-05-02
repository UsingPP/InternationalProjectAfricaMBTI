import React, {useState,useEffect} from 'react'
// import RadarChartLeadershipData from "../../../charts/RadarChartLeadershipData"
import { Divider, Rating , CircularProgress ,Container, Grid, Paper, Typography, Box } from '@mui/material'
import useStyles from "../../../styles"
import {data} from "./result_data"
import SlotCounter from 'react-slot-counter';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import LineChartJMLeadershipEvaluationSurvey from "./LineChartJMLeadershipEvaluationSurvey"
// props.surveyname 은 범용적으로 사용할 이 설문조사의 명칭 (백엔드, 프론트엔드 통일이름 (구글 스프레트 시트 참조))
function JMLeadershipEvaluationSurveyResult(props) {
  const classes = useStyles();
  const discretes = data;
  function appraise_level(score){
    if (score<35){
      return 2;
    }else if (score < 70){
      return 1;
    }else{
      return 0;
    }
  }
  
  const [resultdata, setresultdata] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/send_result/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ survey_name: props.surveyname })
      });
      const resultdata = await response.json();
      setresultdata(resultdata); // 결과 데이터를 설정합니다.
      console.log(1)
    } catch (error) {
      console.error('Error:', error);
    } finally {
      console.log(2)
      setIsLoading(false); // 데이터 로딩이 완료되었음을 알립니다.
    }
  };
  
  useEffect(() => {
    fetchData(); // 컴포넌트가 마운트될 때 데이터를 가져옵니다.
  }, []);
  

  return (
    <Container sx = {{backgroundColor : "white"}}>
      <Box sx={{ marginX: "20%", marginTop: "20px", marginBottom: "12px"}}>
            <Typography variant='h2' align='center' sx = {{ borderBottom: "1px solid black", fontFamily : "'Source Serif 4'", fontSize : 72, fontWeight : 700}}>
              Survey Result
            </Typography>
            <Typography variant='body1' align='center'  sx = {{fontFamily : "'Source Serif 4'", marginBottom: "21px"}}>
              JM Leadership Survey
              </Typography>
          </Box>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant = "h4">Personal attributes and growth mindset</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          {isLoading ? <CircularProgress></CircularProgress>: <LineChartJMLeadershipEvaluationSurvey data = {resultdata} index = {0}></LineChartJMLeadershipEvaluationSurvey>}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant = "h4">Ability of Communication</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          {isLoading ? <CircularProgress></CircularProgress>: <LineChartJMLeadershipEvaluationSurvey data = {resultdata} index = {1}></LineChartJMLeadershipEvaluationSurvey>}
        </AccordionDetails>
      </Accordion>
      <Accordion  defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant = "h4">Ability to grasp, judge, and solve problems</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          {isLoading ? <CircularProgress></CircularProgress>: <LineChartJMLeadershipEvaluationSurvey data = {resultdata} index = {2}></LineChartJMLeadershipEvaluationSurvey>}
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant = "h4">Leadership Abilities</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          {isLoading ? <CircularProgress></CircularProgress>: <LineChartJMLeadershipEvaluationSurvey data = {resultdata} index = {3}></LineChartJMLeadershipEvaluationSurvey>}
        </AccordionDetails>
      </Accordion>
    </Container>)
}

export default JMLeadershipEvaluationSurveyResult
