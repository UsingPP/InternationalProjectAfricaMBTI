import React, { useState, useEffect } from 'react'
// import RadarChartLeadershipData from "./RadarChartLeadershipData"
import { Button, Divider , Rating, Paper, CircularProgress, Container, Grid, Typography, Box, Stack } from '@mui/material'
import useStyles from "../../../styles"
import { data as dt } from "./result_data"
import 'bootstrap/dist/css/bootstrap.css';
import BarChartUN17Goal from "./BarChartUN17Goal"
// import gotoSurvey from "../../components/utils"
// API 결과 형태
// {
//   'survey_name': 'UN17Goal', 'username': '123', 
// 'userdata': {'SDT1': '3', 'SDT2': '3', 'SDT3': '3', 'SDT4': '3', 'SDT5': '3', 'SDT6': '3', 'SDT7': '3', 'SDT8': '3',
//     'SDT9': '3', 'SDT10': '3', 'SDT11': '3', 'SDT12': '3', 'SDT13': '3', 'SDT14': '3', 'SDT15': '3', 'SDT16': '3', 'SDT17': '3'}, 
//  'otherdata': {'SDT1': 3.0, 'SDT2': 3.0, 'SDT3': 3.0, 'SDT4': 3.0, 'SDT5': 3.0, 'SDT6': 3.0, 'SDT7': 3.0, 'SDT8': 3.0, '
//      SDT9': 3.0, 'SDT10': 3.0, 'SDT11': 3.0, 'SDT12': 3.0, 'SDT13': 3.0, 'SDT14': 3.0, 'SDT15': 3.0, 'SDT16': 3.0, 'SDT17': 3.0}
//   }


// props.surveyname 은 범용적으로 사용할 이 설문조사의 명칭 (백엔드, 프론트엔드 통일이름 (구글 스프레트 시트 참조))
function UN17GoalResult(props) {
  const lang = props.language
  const [hoveropacity, setHoveropacity] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  const classes = useStyles();
  const datas = dt[lang].data
  const title = dt[lang].title
  const [resultdata, setresultdata] = useState(1);
  const [isLoading, setIsLoading] = useState(true)
  const [currentGoal, setCurrentGoal] = useState(-1)
  const [isValidData, setIsValidData ] = useState(0)
  const fetchData = async () => {

    try {
      // const response = await fetch("https://leadershipsurvey.pythonanywhere.com/send_result/", {
      const response = await fetch("http://127.0.0.1:8000/send_result/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ survey_name: props.surveyname })
      });

      const resultdata = await response.json();
      setresultdata(resultdata);
      setIsLoading(false)
      if (resultdata["error"] == undefined){
        console.log("됐다 ㅎㅎ")
        setIsValidData(1)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const gotoSurvey = (event) => {
      window.location.href = "/home/" + props.surveyname
    return "zz"
  }

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = (index) => {
    setIsHovering(true);

    let list = [...hoveropacity]
    list[index] = 0
    setHoveropacity(list)
    setCurrentGoal(index)
  };

  const handleMouseOut = (index) => {
    let list = [...hoveropacity]
    list[index] = 1
    setHoveropacity(list)
    setIsHovering(false);
    setCurrentGoal(-1)
  };
  
  if (isValidData == 1){
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
          <Paper sx={{ paddingTop: "40px", paddingBottom: "60px" }}>
            {isLoading ? <CircularProgress /> : <BarChartUN17Goal />}
            <Grid container sx = {{position : "relative"}} >
              {isLoading ? <CircularProgress /> :
                datas.map((data, index) => {
                  return (
                    <Grid container sx={{ marginX: "50px", position: "relative" }} item xs={12} align="center" key={index} onMouseOver={() => handleMouseOver(index)} onMouseOut={() => handleMouseOut(index)}>
                      {/* // 마우스 떼면 나오는 거 */}
                      <Grid container sx={{ zIndex: 2, height: 220, opacity: hoveropacity[index] }} backgroundColor={data.TopicColor} className={classes.smoothTransition}>
                        <Grid item xs={3} >
                          <Box sx={{
                            height: "100%",
                            backgroundImage: `url(${data.before_hover.imageurl})`,
                            backgroundSize: "cover", // 배경 이미지를 커버하도록 설정
                            backgroundPosition: "center", // 배경 이미지를 가운데에 정렬
                          }}></Box>
                        </Grid>
                        <Grid item xs={9}>
                          <Grid container
                            direction="row"
                            justifyContent="center"
                          >

                            <Grid item xs={12} marginTop={3}>
                              <Rating precision={1} name="read-only" value={resultdata["userdata"][`SDT${index + 1}`]} readOnly />
                              <Typography variant='h4' fontWeight={800}>{data.before_hover.title}</Typography>

                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="subtitle1">
                                {data.before_hover.text1}

                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                      </Grid>
                      {/* // 마우스 올리면 나오는 거 */}
                      <Grid container backgroundColor={data.TopicColor} sx={{ zIndex: 1, height: 220, position: "absolute", paddingLeft: "30px", paddingTop: 2}} className={classes.smoothTransition}>
                        <Grid item xs={12}>
                          <Grid container>
                            <Grid item xs={8}>
                              <Typography fontSize={30} fontWeight={700} align="left">
                                <Grid item xs={12}>{data.after_hover.title}</Grid>
                              </Typography>
                              <Typography fontSize={13} textAlign="left" fontWeight={700}>
                                {data.after_hover.text1}
                              </Typography></Grid>
                            <Grid item xs={4}>

                              <Grid container direction="column" sx={{ position: "relative", width: "80%" }} >
                                <Grid item xs={12}>
                                  <Grid container>
                                    <Grid item xs={6}>
                                      <Stack direction="column">
                                        <Typography align="left" color="white" fontSize="25px" fontWeight={800}>8</Typography>
                                        <Typography align="left" color="white" fontSize="14px">Targets</Typography>
                                      </Stack>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Stack direction="column">
                                        <Typography align="left" color="white" fontSize="25px" fontWeight={800}>90</Typography>
                                        <Typography align="left" color="white" fontSize="14px">Events</Typography>
                                      </Stack>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                  <Grid container>
                                    <Grid item xs={6}>
                                      <Stack direction="column">
                                        <Typography align="left" color="white" fontSize="25px" fontWeight={800}>17</Typography>
                                        <Typography align="left" color="white" fontSize="14px">Publications</Typography>
                                      </Stack>
                                    </Grid>
                                    <Grid item xs={6}>
                                      <Stack direction="column">
                                        <Typography align="left" color="white" fontSize="25px" fontWeight={800}>1371</Typography>
                                        <Typography align="left" color="white" fontSize="14px">Actions</Typography>
                                      </Stack>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <br></br>
                                <Grid item xs={12}>
                                  <Button variant="outlined" sx={{ borderColor: "white", color: "white", width: "100%" }}>More Info</Button>
                                </Grid>
                              </Grid>


                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    // <Divider orientation="horizontal" sx={{ borderBottomWidth: 5, borderColor: "#00003360" }} flexItem />
                  );
                })}
   


            </Grid>
          </Paper>
        </Grid>
      </Grid>

    </Container>
  )}
  else if (isValidData == 0){
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
          <Paper sx={{ paddingTop: "40px", paddingBottom: "60px" }}>
            <Box display = "flex" justifyContent="center" flexDirection="column" alignItems="center">
              <Typography variant = "h4">Sorry, There's a problem with your data</Typography>
              <br>
              </br>
              <Button variant = "outlined" sx = {{width : "200px"}} onClick={gotoSurvey}>
                Go to survey again
              </Button>
            </Box>



          </Paper>
        </Grid>
      </Grid>

    </Container>

    )
  }
}

export default UN17GoalResult
