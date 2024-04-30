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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const useStyle = makeStyles((theme) => ({
  nextBtn: {
    width: '150px',
  },
  Images: {
    marginLeft: "10px",
    padding: "3px",
    width: "500px",
    borderRadius: "50px"
  },
  BigImage: {
    width: "80%",
    alignSelf: "center"
  }
}));
// props.surveyname 은 범용적으로 사용할 이 설문조사의 명칭 (백엔드, 프론트엔드 통일이름 (구글 스프레트 시트 참조))
export default function SurveyForm(props) {
  const FormData = FD[props.language]
  const section1 = FormData.sections[0];
  const classes = useStyle();
  const { values, setValues, valueChange } = useForm(initialData);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  // 사용자가 선택한 값을 표시할 때 허용 범위를 벗어나지 않도록 조정
  const valueLabelFormat = (value) => {
    if (value < 0) {
      return 0; // 최솟값으로 설정
    } else if (value > 10) {
      return 10; // 최댓값으로 설정
    } else {
      return value;
    }
  };
  // 다음 페이지로 이동하는 함수
  const handleNextPage = async () => {
    if (currentPage == 1) {
      const token = localStorage.getItem('token');
      try {
        console.log(values)
        const response = await fetch("https://leadershipsurvey.pythonanywhere.com/recievedata/",
        // const response = await fetch("http://127.0.0.1:8000/recievedata/",
          // ,
          {
            method: "POST",
            headers: {
              'Authorization': `Bearer ${token}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ survey_name: props.surveyname, data: values })
          })

        if (response.ok) {

          const data = await response.json();
          console.log("전송성공");
          window.location.href = "/" + props.surveyname + "Result"
        } else {
          console.log("서버오류 : ", response.status)
        }
      } catch (error) {
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
      <Box sx={{ backgroundColor: "primary.main", paddingTop: 2, paddingBottom: 1, paddingLeft: 3, fontFamily: "'Nanum Myeongjo'" }}>
        <Typography variant="h4" component="subtitle1" color="#fff" fontWeight={"medium"} >
          {FormData.title}
        </Typography>
        <Box marginTop="10px">
          <Divider orientation="horizontal" flexItem />
        </Box>
      </Box>
      <br></br>
 {/* -------------------------------2 페이지------------------------------- */}
 <Grid
        container
        style={{ display: currentPage === 1 ? 'flex' : 'none' }}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
        spacing={5}
      >
        <Grid item>
          <Paper elevation={10} sx={{ p: 5 }} variant="outlined">
            <Typography variant="h6" component="subtitle2">
             {section1.title}<br />
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ color: 'red', fontWeight: 'medium' }}
              >
                Please read the following description of each competency and
                rate your own competency in that competency on a scale of 100
                points.
              </Typography>
            </Typography>
          </Paper>
        </Grid>
        {section1.questions.map((question)=>(
        <Grid item xs={12}>
          <Box align="center">
            <img src={question.image} className={classes.Images} />
            {/* 소질문 페이퍼 섹션 */}
            <Typography variant="h4" gutterBottom fontWeight="medium">
              {question.name}
            </Typography>
            <br></br>
            <Typography variant="subtitle1" gutterBottom>
              <b>{question.name}</b>: {question.detail}
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
                    {question.name} - Q{index+1}
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
                  marks={section1.marks}
                  name={subquestion.name}
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
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        name="resultWait"
        display="none"
        style={{ display: currentPage === 3 ? 'flex' : 'none' }}
      >
        Your submitted data will soon be analyzed and the results will be
        available shortly. Please wait for the analysis to be completed.{' '}
        <CircularProgress />
      </Grid>
    </Form>
  );
}
