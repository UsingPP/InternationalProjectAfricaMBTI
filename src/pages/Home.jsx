import { Box, Container } from '@mui/material';
import React from 'react';
import Header from './components/Header.jsx';
import SideMenu from './components/SideMenu.jsx';
export default function Home() {
  return (
    <>
      <Header ml={{ xs: '500px' }} />
      <SideMenu />
      <Container sx={{ marginLeft: '55px' }}>
        <Box>서베이 참여한거</Box>
        <Box>서베이 리스트</Box>
      </Container>
    </>
  );
}
