import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SignIn from './sign/signin.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundImage: `url('your-image-url.jpg')`,
    backgroundColor: `gray`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    boxSizing: 'border-box',
    color: 'white',
    textAlign: 'center',
  },
  contentBox: {
    backgroundColor: 'rgba(250, 250, 250, 0.5)',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
  },
}));

function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm" className={classes.contentBox}>
        <Typography variant="h3" gutterBottom>
          Leadership Survey Platform
        </Typography>
        <Typography variant="body1" gutterBottom>
          We offer surveys designed to assess and enhance various aspects of
          leadership competencies. Each survey explores different facets of
          leadership, aiding participants in identifying their strengths and
          areas for improvement. Our surveys provide valuable insights for
          individuals and organizations to develop and refine successful
          leadership styles.
        </Typography>

        <Link to="/signin">
          <Button variant="contained" color="primary">
            Get Started!
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default Intro;
