import React from 'react';
import SurveyForm from './SurveyForm.jsx';
import { Paper, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from '../../components/Header.jsx';

const useStyles = makeStyles((theme) => ({
    pageContent: {
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        padding: theme.spacing(2),
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: theme.spacing(2),
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        padding: theme.spacing(3),
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10),
        padding: theme.spacing(3),
      },
      display: 'flex',
      marginBottom: theme.spacing(15),
      justifyContent: 'center',
    },
  }));
  
// props.surveyname 은 범용적으로 사용할 이 설문조사의 명칭 (백엔드, 프론트엔드 통일이름 (구글 스프레트 시트 참조))
export default function DifficultiesInEmotion(props) {
    const classes = useStyles();
    return (
      <>
        <Header ml={{ xs: '500px' }} />
        <Container
          sx={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Paper className={classes.pageContent}>
            <SurveyForm surveyname = {props.surveyname}  />
          </Paper>
        </Container>
      </>
    );
}