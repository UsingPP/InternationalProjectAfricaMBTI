import React, { useEffect, useState } from 'react';
import {CircularProgress, Paper, Container, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {data } from "./result_data"
import useStyles from "../../../styles"
// unshift 와 push 기억
import { CategoryScale, LineController, LineElement, Filler,
  Tooltip,
  Legend,
  PointElement, LinearScale } from 'chart.js';
import {Chart as ChartJS} from "chart.js"
ChartJS.register( CategoryScale,LinearScale,LineController,PointElement,LineElement,Filler,Legend,Tooltip);
const options = {
  plugins: {
    legend: {
        labels: {
            font: {
                style: 'italic',
                weight: '600',
            }
        }
    },labels: {
      render : "label",
      fontColor : "green"
    }
},
  scales: {
    x : {offset : false},
    y : {
      min : 0,
      max : 100
    }
}
}


// props.surveyname 은 범용적으로 사용할 이 설문조사의 명칭 (백엔드, 프론트엔드 통일이름 (구글 스프레트 시트 참조))
function LineChartJMLeadershipEvaluationSurvey(props) {
  const classes = useStyles();
  let data = props.data
  data = Object.values(data)[props.index]
  // {'user': {'experiences': 50.0, 'attribute_of_learning': 50.0, 
  //         'resiliency': 50.0, 'belief_in_telent': 50.0, 'appearance': 50.0,
  //         'resp_behaviors': 50.0, 'self_evaluation': 50.0, 'habit_of_writting': 50.0}, 
  //  'other': {'experiences': 50.0, 'attribute_of_learning': 50.0,
  //         'resiliency': 50.0, 'belief_in_telent': 50.0, 'appearance': 50.0, 
  //         'resp_behaviors': 50.0, 'self_evaluation': 50.0, 'habit_of_writting': 50.0}}
  console.log(data)
  const userdata = data["user"]
  const otherdata = data["other"]
  const [IsLoading, setIsLoading] = useState(true);
  const [userDataForChart, setUserDataForChart] = useState({
    labels: [],
    datasets: []
  });
  // 라벨 전처리
  const names = Object.keys(userdata)
  let labels = names.map((a)=>{
    
    if (a.includes(" ")){
      a = a.split(" ")
    }
    if (a.includes("-")){
      a = a.split("-")
    }
    if (a.includes("_")){
      a = a.split("_")
    }
    return (a)
  });
  labels.unshift("")
  labels.push("")
  console.log(labels)
  //

    let datasets = [
      {
        name: `you`,
        scores:  Object.values(userdata),
        // Object.values(data["leadership_mean_by_sector"]),
        backgroundColor: "#ff638470",
        // backgroundColor: "rgb(155,164,179, 0.1)",
        borderColor : "#ff6384"
      },
      {
        name: "other",
        scores: Object.values(otherdata),
        backgroundColor: "#36a2eb70",
        borderColor : "#36a2eb"
      },

    ];
    
    datasets = datasets.map(user => ({
      label: user.name,
      data: [null].concat(user.scores,).concat(null),
      backgroundColor: user.backgroundColor,
      borderColor : user.borderColor,
      tension : 0.01,
      pointRadius : 5
    }));
    useEffect(()=>{
      setUserDataForChart({ labels, datasets });
      setIsLoading(false)
    }, [])
    

  return (
    <Container className={classes.radarChartContainer}>
      <Paper sx= {{paddingY : "25px"}} >
        <Typography variant  = "h3"align = "center" sx = {{fontFamily : "'Source Serif 4'", fontWeight : "600" , marginX : "12px" , borderRadius : "20px",border : "0px solid black" , marginBottom : "50px"}}></Typography>
        {IsLoading ?
         <CircularProgress/> : <Line data={userDataForChart} options = {options} />}
      </Paper>
    </Container>
  );
}

export default LineChartJMLeadershipEvaluationSurvey;
