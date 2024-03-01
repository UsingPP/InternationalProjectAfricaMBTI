// Filename - pages/signup.js
 
import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
 
const Home = () => {
    return (
        <>
            <Navbar/>
            <Box sx={{ display: 'flex' }}>
                <Sidenav/>

                <h1> Home </h1>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Typography paragraph>
                    !!!Home!!!
                    </Typography>
                    <Typography paragraph>
                    !!!Home!!!
                    </Typography>
                </Box>
            </Box>
        </>
    );
};
 
export default Home;