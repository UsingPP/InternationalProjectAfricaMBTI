import React from 'react'
import { Grid, Container , Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
      background: '#000000',
      color: 'white',
      }
    },
  );

export default function Footer () {
    const style = useStyles();
    return (
        <footer>
        <Grid container className={style.container} sx = {{p:3}}>
            <Grid item xs={3} >
            </Grid>
            <Grid item xs={2} >
                <Box align='center'>
                    <Box>image Grid</Box>
                    short-desc</Box>
            </Grid>
            <Grid item xs={2} >
                <Box  align='center'>item</Box>
            </Grid>
            <Grid item xs={2} >
                <Box  align='center'>item</Box>
            </Grid>
            <Grid item xs={3} >
            </Grid>
        </Grid>
        </footer>
    );
};