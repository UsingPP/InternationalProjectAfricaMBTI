 
// Filename - pages/blogs.js
 
import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Sidenav from "../components/Sidenav.js"
 
const Blogs = () => {
    return (
    <>
    <Box sx={{ display: 'flex' }}>
        <Sidenav/>
        <h1> Home </h1>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Typography paragraph>
            !!!BLOGS!!!
            </Typography>
            <Typography paragraph>
            !!!BLOGS!!!
            </Typography>
        </Box>
    </Box>
    </>);
};
 
export default Blogs;