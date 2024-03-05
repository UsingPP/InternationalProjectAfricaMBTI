import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import KeyIcon from '@mui/icons-material/Key';
import Avatar from '@mui/material/Avatar';
import {DialogActions, Button} from "@mui/material"
export default function FindID() {
  const [infoToFindId, infoToFindIdChange] = useState({
    name: '',
    birthDate: '',
    nickname: '',
    nation: '',
  });
  const onsubmit= async(e)=>{
    console.log(infoToFindId)
    e.preventDefault();
    try{
      const response = await fetch("http://127.0.0.1:8000/userCheckToFindId/",
      {
        method : "POST",
        headers :{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(infoToFindId)
      })
    
    if (response.ok){
      const data = await response.json();
      console.log(`your ID is ${data.userid}`);
    }else{
      console.log("서버오류 : ", response.status)
    }} catch (error) {
      console.error('오류:', error);
    }
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(1);

     // 새로운 상태를 생성하고 이전 상태를 복사
    const updatedinfoToFindId = { ...infoToFindId, [name]: value };

    // 비밀번호 확인과 관련된 로직
    if (name === 'passwordConfirm') {
      if (value !== infoToFindId.password && value !== '') {
        updatedinfoToFindId.passwordMatchError = true;
      } else {
        updatedinfoToFindId.passwordMatchError = false;
      }
    }
    // 상태 업데이트
    infoToFindIdChange(updatedinfoToFindId);
  };
  return (
    <Container>
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 55, height: 55 }}>
          <KeyIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          FindID
        </Typography>
        <form onSubmit={onsubmit}>
        <TextField
          label="name"
          name="name"
          margin="dense"
          required
          fullWidth
          autoFocus
          onChange={onChange}
        />
        <TextField
          label="birthDate"
          name="birthDate"
          margin="dense"
          required
          fullWidth
          onChange={onChange}
        />
        <TextField
          label="nickname"
          margin="dense"
          name="nickname"
          required
          fullWidth
          onChange={onChange}
        />
        <TextField
          label="nation"
          name="nation"
          margin="dense"
          onChange={onChange}
          required
          fullWidth
        />
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            fullWidth
          >
            send Find ID call{' '}
          </Button>
        </DialogActions>
        </form>
      </Box>
    </Container>
  );
}
