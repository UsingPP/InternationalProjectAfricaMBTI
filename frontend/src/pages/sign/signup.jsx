import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {DialogActions, Button} from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import Avatar from '@mui/material/Avatar';

export default function SignUp() {
  const [signupData, signupDataChange] = useState({
    name: '',
    birthdate: '',
    userid: '',
    password: '',
    passwordConfirm: '',
    passwordMatchError: false,
  });
  const onsubmit= async(e)=>{
    e.preventDefault();
    console.log(signupData )
    try{
      const response = await fetch("http://127.0.0.1:8000/signup/",
      {
        method : "POST",
        headers :{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(signupData)
      })
    
    if (response.ok){

      const data = await response.json();
      console.log("회원가입성공");
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
    const updatedSignupData = { ...signupData, [name]: value };

    // 비밀번호 확인과 관련된 로직
    if (name === 'passwordConfirm') {
      if (value !== signupData.password && value !== '') {
        updatedSignupData.passwordMatchError = true;
      } else {
        updatedSignupData.passwordMatchError = false;
      }
    }
    // 상태 업데이트
    signupDataChange(updatedSignupData);
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
          Sign UP
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
          label="birthdate"
          name="birthdate"
          margin="dense"
          required
          fullWidth
          onChange={onChange}
        />
        <TextField label="id" name="userid" margin="dense" required fullWidth onChange={onChange}/>
        <TextField
          label="PassWord"
          type="password"
          name="password"
          required
          fullWidth
          onChange={onChange}
          margin="dense"
        />
        <TextField
          label="passwordConfirm"
          type="password"
          name="passwordConfirm"
          required
          fullWidth
          margin="dense"
          onChange={onChange}
          error={signupData.passwordMatchError}
          helperText={
            signupData.passwordMatchError ? '비밀번호가 일치하지 않습니다' : ''
          }
        />
         <DialogActions>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            fullWidth
          >
            Sign UP{' '}
          </Button>
        </DialogActions>
        </form>
      </Box>
    </Container>
  );
}
