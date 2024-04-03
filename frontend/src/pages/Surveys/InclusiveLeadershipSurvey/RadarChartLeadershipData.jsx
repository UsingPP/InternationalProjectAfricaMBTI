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
  layout: {
    padding: {
    }
},
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
  const textdata1 = data[lang].data1
  const textdata2 = data[lang].data2
  const classes = useStyles();
  const [IsLoading, setIsLoading] = useState(true);
  const [userDataForChart, setUserDataForChart] = useState({
    labels: [],
    datasets: []
  });

  const names = textdata1.slice(0, 3).map(d => ({ [d.code]: d.name }));

    console.log(textdata1,names)

  useEffect( async()  =>  {
    // const response = await fetch("http://leadershipsurvey.pythonanywhere.com/send_result/", {
      const response = await fetch("http://127.0.0.1:8000/send_result/", {

      method : "POST",
      headers :{
        "Content-Type" : "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
      body : JSON.stringify({survey_name : "InclusiveLeadershipSurvey"})
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
        //question code로 찾기
        scores: names.map((co)=>data["other"]["leadership_mean_by_sector"][Object.keys(co)[0]]),
        backgroundColor: "#36a2eb70",
        borderColor : "#36a2eb"
      },

    ];
    console.log(userData)
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
    console.log(datasets)
    setUserDataForChart({ labels, datasets });
    setIsLoading(false)
  }, []);

  return (
<>
        {IsLoading ?
         <CircularProgress/> : <Radar data={userDataForChart} options = {options} />}
  </>       

  );
}

export default RadarChartLeadershipData;
