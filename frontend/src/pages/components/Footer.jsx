
import React from 'react'
import { Grid, Container , Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles({
    container: {
      background: '#000000',
      color: 'white',
      }
    },
  );

export default function Footer () {
    const style = useStyles();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.pathname)

    if (location.pathname === '/' || location.pathname === '/signin') {
        return (
            <footer>
        <Grid container className={style.container} sx = {{p:3}}>
            <Grid item xs={3} >
            </Grid>
            <Grid item xs={2} >
                <Box align='center'>

                </Box>
            </Grid>
            <Grid item xs={2} >
                    <Box  align='center'>
                    <InfoSharpIcon sx = {{fontSize: 48}}/>
                    <Typography sx = {{mt : 0.3, fontSize : 12}}>INFO</Typography>
                    </Box>
            </Grid>
            <Grid item xs={2} >
                <Box  align='center'>
                </Box>
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
        </footer>
        )
    }
    return (
        <footer>
        <Grid container className={style.container} sx = {{p:3}}>
            <Grid item xs={3} >
            </Grid>
            <Grid item xs={2} >
            <Box align='center' onClick = {() => {navigate('/home')}}>
                    <HomeSharpIcon sx = {{fontSize: 48}}/>
                    <Typography sx = {{mt : 0.3, fontSize : 12}}>HOME</Typography>
                </Box>
            </Grid>
            <Grid item xs={2} >
            <Box  align='center'>
                    <PermIdentitySharpIcon sx = {{fontSize: 48}} onClick = {() => {navigate('/about')}}/>
                    <Typography sx = {{mt : 0.3, fontSize : 12}}>Developers</Typography>
                </Box>
            </Grid>
            <Grid item xs={2} >
            <Box  align='center'>
                    <InfoSharpIcon sx = {{fontSize: 48}} onClick = {() => {navigate('/')}}/>
                    <Typography sx = {{mt : 0.3, fontSize : 12}}>INFO</Typography>
                </Box>
            </Grid>
            <Grid item xs={3} >
            </Grid>
        </Grid>
        </footer>
    );
};