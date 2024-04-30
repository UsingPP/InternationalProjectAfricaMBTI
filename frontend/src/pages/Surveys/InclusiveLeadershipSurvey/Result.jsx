import React, {useState,useEffect} from 'react'
// import RadarChartLeadershipData from "../../../charts/RadarChartLeadershipData"
import {Divider, Rating , CircularProgress ,Container, Grid, Paper, Typography, Box } from '@mui/material'
import useStyles from "../../../styles"
import {data} from "./result_data"
import SlotCounter from 'react-slot-counter';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { positions } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.css';
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
// props.surveyname 은 범용적으로 사용할 이 설문조사의 명칭 (백엔드, 프론트엔드 통일이름 (구글 스프레트 시트 참조))
function InclusiveLeadershipSurveyResult(props) {
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
      const response = await fetch("https://leadershipsurvey.pythonanywhere.com/send_result/", {
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
    <></>
  )
}

export default InclusiveLeadershipSurveyResult
