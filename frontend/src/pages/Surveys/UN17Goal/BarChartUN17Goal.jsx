import React, { useEffect, useState } from 'react';
import {CircularProgress, Paper, Container, Typography, Divider } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {data } from "./result_data"
import useStyles from "../../../styles"
import {
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
   } from 'chart.js';
import {Chart as ChartJS} from "chart.js"
const un_17_goals_colors = [
  "#E5243B",  // No Poverty
  "#DDA63A",  // Zero Hunger
  "#4C9F38",  // Good Health and Well-being
  "#C5192D",  // Quality Education
  "#FF3A21",  // Gender Equality
  "#26BDE2",  // Clean Water and Sanitation
  "#FCC30B",  // Affordable and Clean Energy
  "#A21942",  // Decent Work and Economic Growth
  "#FD6925",  // Industry, Innovation, and Infrastructure
  "#DD1367",  // Reduced Inequality
  "#FD9D24",  // Sustainable Cities and Communities
  "#BF8B2E",  // Responsible Consumption and Production
  "#3F7E44",  // Climate Action
  "#0A97D9",  // Life Below Water
  "#56C02B",  // Life on Land
  "#00689D",  // Peace, Justice, and Strong Institutions
  "#19486A"   // Partnerships for the Goals
]
ChartJS.register( BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend);
const options = {
  plugins: {
    legend: {
        display : false
    },labels: {
      render : "label",
      fontColor : "green"
    }
},
  scales: {
    y : {
      display : false,
      min : 0,
      max : 5
    }
}
}
function BarChartUN17Goal(props) {
  const lang = props.language
  const classes = useStyles();
  const [IsLoading, setIsLoading] = useState(true);
  const [userDataForChart, setUserDataForChart] = useState({
    labels: [],
    datasets: []
  });

  useEffect( async()  =>  {
    const response = await fetch("https://leadershipsurvey.pythonanywhere.com/send_result/", {
    // const response = await fetch("http://127.0.0.1:8000/send_result/", {
      method : "POST",
      headers :{
        "Content-Type" : "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      },
      body : JSON.stringify({survey_name : "UN17Goal"})
    })
    const data = await response.json()
    console.log(data)
    const userData = [
      {
        scores:  Object.values(data["userdata"]),
        // Object.values(data["leadership_mean_by_sector"]),
        backgroundColor: un_17_goals_colors .map(color => {
          // 색상 코드의 마지막에 80%의 투명도를 추가
          return color + "20";
      }),
        // backgroundColor: "rgb(155,164,179, 0.1)",
        borderColor : un_17_goals_colors .map(color => {
          // 색상 코드의 마지막에 80%의 투명도를 추가
          return color;
      }),
   

      },
      // {
      //   name: "other",
      //   scores: names.map((co)=>data["other"]["leadership_mean_by_sector"][Object.keys(co)[0]]),
      //   backgroundColor: "#36a2eb70",
      //   borderColor : "#36a2eb"
      // },

    ];
    console.log(data)
    const labels = Object.values(data["userdata"]).map((a, index)=>{
      return (`Goal ${Math.floor(index) + 1}`)
    });
    const datasets = userData.map(user => ({
      label: user.name,
      data: Object.values(user.scores),
      backgroundColor: user.backgroundColor,
      borderColor : user.borderColor,
      borderWidth : 1,
      barPercentage : 1.1
    }));
    setUserDataForChart({ labels, datasets });
    setIsLoading(false)
  }, []);

  return (
    <Container align = "center"  className = {classes.barChartContainer_UN17Goals}>
        <Typography variant  = "h3"align = "center" sx = {{fontFamily : "'Source Serif 4'", fontWeight : "600" , marginX : "12px" , borderRadius : "20px",border : "0px solid black" }}></Typography>
        {IsLoading ?
         <CircularProgress/> : <Bar data={userDataForChart} options = {options}
        style={{height :"50vh"}}
         />}
         <br></br>
    </Container>
  );
}

export default BarChartUN17Goal;
