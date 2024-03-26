import React, { useState, useEffect } from 'react';
import {
  Grid,
  Divider,
  TextField,
  Button,
  Box,
  Paper,
  Typography,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import { makeStyles, styled } from '@mui/styles';
import { FormData as FD, initialData } from './form_Data.jsx';
import { useForm, Form } from '../../components/useForm.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import { PrettoSlider } from '../../components/Slider.jsx';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
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

const Page = { 1: 'H', 2: 'L', 3: 'SDT', 4: 'resultWait' };

export default function SurveyForm(props) {
  const FormData = FD[props.language]
  const classes = useStyle();
  const { values, setValues, valueChange } = useForm(initialData);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  // 사용자가 선택한 값을 표시할 때 허용 범위를 벗어나지 않도록 조정
  const section = FormData.questions;
  const questionSection1 = FormData.questions[1];
  const questionSection2 = FormData.questions[2];
  const valueLabelFormat = (value) => {
    if (value < 0) {
      return 0; // 최솟값으로 설정
    } else if (value > 10) {
      return 10; // 최댓값으로 설정
    } else {
      return value;
    }
  };
  const marks = [
    {
      value: 0,
      label: 'Strongly Dislike',
    },
    {
      value: 25,
      label: 'Dislike',
    },
    {
      value: 50,
      label: 'Neutral',
    },
    {
      value: 75,
      label: 'Like',
    },
    {
      value: 100,
      label: `Strongly\nLike`,
    },
  ];
  const marks2 = [
    {
      value: 0,
      label: 'Poor',
    },
    {
      value: 25,
      label: 'Needs Improvement',
    },
    {
      value: 50,
      label: 'Average',
    },
    {
      value: 75,
      label: 'Good',
    },
    {
      value: 100,
      label: `Excellent`,
    },
  ];
  // 다음 페이지로 이동하는 함수
  const handleNextPage = async() => {
    if (currentPage == 3){
      console.log(values)
      const token = localStorage.getItem('token');
      try{

        const response = await fetch("http://127.0.0.1:8000/recievedata/",
        {
          method : "POST",
          headers :{
            'Authorization': `Bearer ${token}`,
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({ survey_name : "LeadershipSurvey",data:values})
        })
        console.log(response)
      if (response.ok){

        const data = await response.json();
        console.log("전송성공");
        window.location.href = "/result"
      }else{
        console.log("서버오류 : ", response.status)
      }} catch (error) {
        console.error('오류:', error);
      }

    }
    setCurrentPage((prevPage) => prevPage + 1); // 현재 페이지 상태를 업데이트하여 다음 페이지로 이동
    window.scrollTo({
      top: 0,
    });
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
      <br></br>
      <Grid
        container
        name="H"
        style={{ display: currentPage === 1 ? 'flex' : 'none' }}
      >
        <Grid item xs={12} sx={{ marginTop: '10px', marginBottom: '50px' }}>
          <Typography variant="h6" component="subtitle2">
            {FormData.description}
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: 'red', fontWeight: 'medium' }}
            >
              <br/>
              <br/>
            </Typography>
          </Typography>
        </Grid>
        <Grid item>
            <Button
              sx={{ marginTop: '15px' }}
              className={classes.nextBtn}
              variant="contained"
              onClick={handleNextPage}
            >
            {FormData.start}
            </Button>
        </Grid>
      </Grid>
      




        {/*2페이지*/}
      <Grid container style={{ display: currentPage === 2 ? 'flex' : 'none' }}>
        <Grid item xs={12} paddingTop = '50px'>
          {/* 이게 소질문 집단 */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                  {section[0].maintitle}
                </Typography>
                <Typography sx={{ ml: 2 }} variant="subtitle1">
                {section[0].subtitle}
                </Typography>
              </Box>
            </Grid>

            {questionSection1.questions.map((question, q_index)=>(
              <Grid item xs={12}>
                <Box align="center">
                  <img src={question.image} className={classes.Images} />
                  {/* 소질문 페이퍼 섹션 */}
                  <Typography variant="h4" gutterBottom fontWeight="medium">
                    0{q_index+1} : {question.chapterTitle}
                  </Typography>
                  <br></br>
                  <Typography variant="subtitle1" gutterBottom>
                    <b>{question.chapterSubtitle}</b>: {question.desc}
                  </Typography>
                </Box>
                <Paper elevation={10} sx={{ p: 5 }}>
                  {/* 이게 소질문 집단 */}
                  {question.rows.map((subquestion, index)=>(
                    <Grid
                    container
                    spacing={2}
                    sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
                  >
                  <Grid item xs={12} md={7}>
                    <Box>
                      <Typography sx={{ mb: 1 }} variant="h6" gutterBottom>
                        {question.chapterTitle} - Q{index+1}
                      </Typography>
                      <Typography sx={{ ml: 2 }} variant="subtitle1">
                        {subquestion.text}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <PrettoSlider
                      defaultValue={50}
                      min={0}
                      max={100}
                      step={10}
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
        ))}
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              sx={{ marginTop: '45px' }}
              className={classes.nextBtn}
              variant="contained"
              onClick={handleNextPage}
            >
              {FormData.next}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
     </Grid>







      {/*3페이지*/}
        <Grid container style={{ display: currentPage === 3 ? 'flex' : 'none' }}>
        <Grid item xs={12} paddingTop = '50px'>
          {/* 이게 소질문 집단 */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Typography sx={{ mb: 1 }} variant="h3" gutterBottom>
                  {questionSection2.title}
                </Typography>
                <img src={questionSection2.image}/>
                <Typography sx={{ ml: 2 }} variant="h6">
                 {questionSection2.desc}
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
                  {questionSection2.rows.map((subquestion, index)=>(
                    <Grid
                    container
                    spacing={2}
                    sx={{ alignItems: 'flex-end', justifyContent: 'center' }}
                  >
                  <Grid item xs={12} md={7}>
                    <Box>
                      <Typography sx={{ mb: 1, mt : 0.5 }} variant="h6" gutterBottom>
                        {questionSection2.name} - {subquestion.text}
                      </Typography>
                      <Typography sx={{ ml: 2 }} variant="subtitle1">
                        {subquestion.desc}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <PrettoSlider
                      defaultValue={50}
                      min={0}
                      max={100}
                      step={10}
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
              onClick={handleNextPage}
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
        style={{ display: currentPage === 4 ? 'flex' : 'none' }}
      >
        {FormData.loadingtext}
        <CircularProgress />
      </Grid>
    </Form>
  );
}
