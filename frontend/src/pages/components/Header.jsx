import React from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff !important',
  },
  // '@media (min-width: 960px)': {
  //   root: {
  //     marginLeft: '65px',
  //   },
  // },
  // '@media (max-width: 600px)': {
  //   root: {
  //     marginLeft: '65px',
  //   },
  // },
  searchInput: {
    opacity: '0.6',
    padding: '0px 8px',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function Header() {
  const navigate = useNavigate();
  function logout(){
    localStorage.clear()
    window.location.href = "/signin"
  }
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container>
        <Grid item onClick={() => {navigate('/home')}}>
            <Typography align='left' sx={{fontFamily:"'Source Serif 4'", color:"#000000", fontSize:28, fontWeight : 900}}> Our'Survey </Typography>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              
            </IconButton>
            <IconButton>
              
              
            </IconButton>

            <IconButton>
              <PowerSettingsNewIcon onClick = {logout} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
