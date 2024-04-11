import React, { useEffect, useState } from 'react';
import {CircularProgress, Paper, Container, Typography } from '@mui/material';
import { Radar } from 'react-chartjs-2';
import {data } from "./result_data"
import useStyles from "../../../styles"

import { RadialLinearScale,  Title,  LineElement, Filler,
  Tooltip,
  Legend,
  PointElement } from 'chart.js';
import {Chart as ChartJS} from "chart.js"
ChartJS.register( RadialLinearScale,PointElement,LineElement,Filler,Legend);
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
    r: {
        angleLines: {
            display: true
        },
        suggestedMin: 0,
        suggestedMax: 100,
    }
}
}
function RadarChartLeadershipData(props) {
  const lang = props.language
  const dd = data[lang].data
  console.log(dd)

  const classes = useStyles();
  const [IsLoading, setIsLoading] = useState(true);
  const [userDataForChart, setUserDataForChart] = useState({
    labels: [],
    datasets: []
  });

  const names = dd.map((d) => ({ [d.code]: d.name }));
  console.log(names)
  useEffect( async()  =>  {
    const response = await fetch("https://leadershipsurvey.pythonanywhere.com/send_result/", {
      method : "POST",
      headers :{
        "Content-Type" : "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
      body : JSON.stringify({survey_name : "LeadershipSurvey"})
    })
    const data = await response.json()
    console.log(data)
    const userData = [
      {
        name: `you : ${data.username}`,
        scores:  names.map((co)=>data["leadership_mean_by_sector"][Object.keys(co)[0]]),
        // Object.values(data["leadership_mean_by_sector"]),
        backgroundColor: "#ff638470",
        // backgroundColor: "rgb(155,164,179, 0.1)",
        borderColor : "#ff6384"
      },
      {
        name: "other",
        scores: names.map((co)=>data["other"]["leadership_mean_by_sector"][Object.keys(co)[0]]),
        backgroundColor: "#36a2eb70",
        borderColor : "#36a2eb"
      },

    ];
    console.log(data)
    const labels = names.map((co)=>{
      let a = Object.values(co)[0];
      if (a.includes(" ")){
        a = a.split(" ")
      }
      if (a.includes("-")){
        a = a.split("-")
      }
      return (a)
    });
    console.log("라벨" ,labels)
    const datasets = userData.map(user => ({
      label: user.name,
      data: Object.values(user.scores),
      backgroundColor: user.backgroundColor,
      borderColor : user.borderColor
    }));

    setUserDataForChart({ labels, datasets });
    setIsLoading(false)
  }, []);

  return (
    <Container className={classes.radarChartContainer}>
      <Paper sx= {{paddingY : "25px"}} >
        <Typography variant  = "h3"align = "center" sx = {{fontFamily : "'Source Serif 4'", fontWeight : "600" , marginX : "12px" , borderRadius : "20px",border : "0px solid black" , marginBottom : "50px"}}></Typography>
        {IsLoading ?
         <CircularProgress/> : <Radar data={userDataForChart} options = {options} />}
      </Paper>
    </Container>
  );
}

export default RadarChartLeadershipData;
