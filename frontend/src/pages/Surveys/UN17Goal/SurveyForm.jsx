import React, { useState, useEffect } from 'react';
import {
  Grid,
  Divider,
  Button,
  Box,
  Paper,
  Typography,
} from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import { FormData as FD, initialData } from './form_Data.jsx';
import { useForm, Form } from '../../components/useForm.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import { PrettoSlider } from '../../components/Slider.jsx';
const useStyle = makeStyles((theme) => ({
  nextBtn: {
    width: '150px',
  },
  Images : {
    marginLeft : "10px",
    padding : "3px",
    width : "150px",
    border : "1px solid black",
    borderRadius : "50px"
  },
  BigImage :{
    width : "80%",
    alignSelf :"center"
  }
}));


export default function SurveyForm(props) {
  const FormData = FD.en
  const classes = useStyle();
  const { values, setValues, valueChange } = useForm(initialData);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  // 사용자가 선택한 값을 표시할 때 허용 범위를 벗어나지 않도록 조정
  const questionSection = FormData.questions[0];
  const marks = [
    {
      value: 1,
      label: 'Strongly Dislike',
    },
    {
      value: 2,
      label: 'Dislike',
    },
    {
      value: 3,
      label: 'Neutral',
    },
    {
      value: 4,
      label: 'Like',
    },
    {
      value: 5,
      label: `Strongly\nLike`,
    },
  ];
  const marks2 = [
    {
      value: 1,
      label: 'Poor',
    },
    {
      value: 2,
      label: 'Needs Improvement',
    },
    {
      value: 3,
      label: 'Average',
    },
    {
      value: 4,
      label: 'Good',
    },
    {
      value: 5,
      label: `Excellent`,
    },
  ];
  // 다음 페이지로 이동하는 함수
  const submit = async() => {
    console.log(values)
      const token = localStorage.getItem('token');
      try{
        const response = await fetch("http://127.0.0.1:8000/recievedata/",
        // const response = await fetch("https://leadershipsurvey.pythonanywhere.com/recievedata/",
        {
          method : "POST",
          headers :{
            'Authorization': `Bearer ${token}`,
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({ survey_name : "UN17Goal",data:values})
        })
      if (response.ok){
        const data = await response.json();
        console.log("전송성공");
        window.location.href = "/UN17GoalResult"
      }else{
        console.log("서버오류 : ", response.status)
      }} catch (error) {
        console.error('오류:', error);
      }
  };

  return (
    <Form>
      {/* H Question */}
      <Box sx = {{backgroundColor : "primary.main" ,paddingTop : 2, paddingBottom : 1, paddingLeft : 3, fontFamily:"'Nanum Myeongjo'"}}>
      <Typography variant="h4" component="subtitle1" color = "#fff" fontWeight={"medium"} >
        {FormData.title}
      </Typography>
      <Box marginTop = "10px">
      <Divider orientation="horizontal" flexItem />
      </Box>
      </Box>
      {/*2페이지*/}
        <Grid container style={{ display: currentPage === 1 ? 'flex' : 'none' }}>
        <Grid item xs={12} paddingTop = '50px'>
          {/* 이게 소질문 집단 */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Typography sx={{ mb: 1 }} variant="h3" gutterBottom>
                  {questionSection.title}
                </Typography>
                <img src={questionSection.image}/>
                <Typography sx={{ ml: 2 }} variant="h6">
                 {questionSection.desc}
                </Typography>
              </Box>
            </Grid>
              <Grid item xs={12}>
                <Box align="center">
                  {/* 소질문 페이퍼 섹션 */}
                  <br></br>
                </Box>
                <Paper elevation={10} sx={{ p: 5 }}>
                  {/* 이게 소질문 집단 */}
                  {questionSection.rows.map((subquestion, index)=>(
                    <Grid
                    container
                    spacing={2}
                    sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
                  >
                  <Grid item xs={12} md={7}>
                    <Box>
                      <Typography sx={{ mb: 1, mt : 0.5 }} variant="h6" gutterBottom>
                        {questionSection.name} - {subquestion.text}
                      </Typography>
                      <Typography sx={{ ml: 2 }} variant="subtitle1">
                        {subquestion.desc}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <PrettoSlider
                      defaultValue={3}
                      min={1}
                      max={5}
                      step={1}
                      marks={marks}
                      name={subquestion.value}
                      valueLabelDisplay="auto"
                      onChange={valueChange}
                    // 값 표시 포맷 지정
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider orientation="horizontal" flexItem />
                  </Grid>
                </Grid>
                ))}
                </Paper>
          <br></br>
          <br></br>
          </Grid>
        
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              sx={{ marginTop: '45px' }}
              className={classes.nextBtn}
              variant="contained"
              onClick={submit}
            >
              {FormData.next}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
     </Grid>

      <Grid
        container
        name="resultWait"
        display="none"
        style={{ display: currentPage === 2 ? 'flex' : 'none' }}
      >
        {FormData.loadingtext}
        <CircularProgress />
      </Grid>
    </Form>
  );
}
