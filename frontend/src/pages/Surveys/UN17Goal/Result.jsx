import React, { useState, useEffect } from 'react'
// import RadarChartLeadershipData from "./RadarChartLeadershipData"
import { Divider, Rating, Paper, Container, Grid, Typography, Box, Stack } from '@mui/material'
import useStyles from "../../../styles"
import { data as dt } from "./result_data"
import 'bootstrap/dist/css/bootstrap.css';


function UN17GoalResult(props) {
  const lang = props.language
  const classes = useStyles();
  const datas = dt[lang].data
  const title = dt[lang].title
  const [resultdata, setresultdata] = useState(1);
  const [isLoading, setIsLoading] = useState(true)
  const [currentGoal, setCurrentGoal] = useState(-1)
  const fetchData = async () => {
    try {
      // const response = await fetch("https://leadershipsurvey.pythonanywhere.com/send_result/", {
      const response = await fetch("http://127.0.0.1:8000/send_result/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ survey_name: "UN17Goal" })
      });
      const resultdata = await response.json();
      setresultdata(resultdata);
      setIsLoading(false)
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    // fetchData();
  }, []);


  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = (index) => {
    setIsHovering(true);
    setCurrentGoal(index)
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setCurrentGoal(-1)
  };
  return (
    <Container className={classes.background_box} maxWidth="lg" sx={{ borderRadius: '16px' }}>
      <div>

      </div>
      <br></br>
      <Grid container  >

        {/* Title */}
        <Grid item xs={12} sx={{ position: 'relative' }} >
          <Box sx={{ marginX: "20%", marginTop: "20px", marginBottom: "12px" }}>
            <Typography variant='h2' align='center' sx={{ borderBottom: "1px solid black", fontFamily: "'Source Serif 4'", fontSize: 72, fontWeight: 700 }}>
              {title}
            </Typography>
            <Typography variant='body1' align='center' sx={{ fontFamily: "'Source Serif 4'", marginBottom: "21px" }}>
              UN 17 Goals
            </Typography>
          </Box>
        </Grid>

        {/* Body */}
        <Grid item xs={12}>
          <Paper>
            <Grid container >
              {datas.map((data, index) => {
                return (
                  // 마우스 올리면 나오는 거
                  <Grid item xs={12} align="center" key={index} onMouseOver={() => handleMouseOver(index)} onMouseOut={handleMouseOut}>

                    {isHovering && index == currentGoal ?
                      <Grid container sx={{ height: 200 }}>
                        <Grid item xs={12}>{data.after_hover.title}</Grid>
                        <Grid item xs={12}>
                          <Grid container>
                            <Grid item xs = {9}>{data.after_hover.explain}</Grid>
                            <Grid item xs = {3}>describes</Grid>
                          </Grid>
                        </Grid>
                      </Grid> 
                        :
                        // 마우스 떼면 나오는 거
                        <Grid container sx={{ height: 200 }}>
                          <Grid item xs={3} >
                            <Box sx={{height : "100%", backgroundImage : `url(${data.before_hover.imageurl})` }}></Box>
                          </Grid>
                          <Grid item xs={9}>{data.before_hover.title}</Grid>
                        </Grid>
                    }
                        <Divider orientation="horizontal" sx={{ borderBottomWidth: 5, borderColor: "#00003360" }} flexItem />
                      </Grid>
              );
})}


                  </Grid>
          </Paper>
        </Grid>
      </Grid>

    </Container>
  )
}

export default UN17GoalResult
