
// Filename - pages/about.js
 
import React from "react";
import Sidenav from "../components/Sidenav"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
 
const About = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidenav/>
                <h1> Home </h1>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Typography paragraph>
                    <h1>!!!ABOUT!!!</h1>
                    </Typography>
                    <Typography paragraph>
                    <h1>!!!ABOUT!!!</h1>
                    </Typography>
                </Box>
            </Box>
        </>
    )
};
 
export default About;