import React, { useEffect, useState } from 'react';
import {CircularProgress, Paper, Container, Typography } from '@mui/material';
import { Radar } from 'react-chartjs-2';
import {data as dd} from "../Data/leadershipdata"

import { RadialLinearScale,  Title,  LineElement, Filler,
  Tooltip,
  Legend,
  PointElement } from 'chart.js';
import {Chart as ChartJS} from "chart.js"
ChartJS.register(RadialLinearScale,PointElement,LineElement,Filler);

const options = {
  scales: {
    r: {
        angleLines: {
            display: false
        },
        suggestedMin: 0,
        suggestedMax: 10
    }
}
}
function RadarChartLeadershipData() {
  const [IsLoading, setIsLoading] = useState(true);
  const [userDataForChart, setUserDataForChart] = useState({
    labels: [],
    datasets: []
  });
  const names = dd.map((d) => ({ [d.code]: d.name }));
  console.log(names)
  useEffect( async()  =>  {
    const response = await fetch("http://127.0.0.1:8000/send_result/", {
      method : "POST",
      headers :{
        "Content-Type" : "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
      body : JSON.stringify({survey_name : "leadership_survey01"})
    })
    const data = await response.json()
    const userData = [
      {
        name: "user",
        scores:  names.map((co)=>data["leadership_mean_by_sector"][Object.keys(co)[0]]),
        // Object.values(data["leadership_mean_by_sector"]),
        backgroundColor: "#ff638470",
        // backgroundColor: "rgb(155,164,179, 0.1)",
        borderColor : "#ff6384"
      },
      {
        name: "by_world",
        scores:  [55,55,44,37,83,54,75,75],
        backgroundColor: "#36a2eb70",
        borderColor : "#36a2eb"
      },
       
    ];
    console.log(data)
    const labels = names.map((co)=>Object.values(co)[0]);
    console.log(labels)
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
    <Container>
      <Paper sx= {{paddingY : "25px"}}>
        <Typography></Typography>
        {IsLoading ?
         <CircularProgress/> : <Radar data={userDataForChart} options = {options} />}
      </Paper>
    </Container>
  );
}

export default RadarChartLeadershipData;
