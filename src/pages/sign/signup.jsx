import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import KeyIcon from '@mui/icons-material/Key';
import Avatar from '@mui/material/Avatar';

export default function SignUp() {
  const [signupData, signupDataChange] = useState({
    name: '',
    birthDate: '',
    id: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    nation: '',
    passwordMatchError: false,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(1);

    // 사용자의 IP 주소 가져오기
    // 가져오는 이유 -> 마지막 항목인 nation에 이용할것. 사용자의 국가로 추정되는 국가를 최상단에 올리기
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        const userIP = data.ip;

        // IP 주소를 기반으로 국가 가져오기
        fetch(`https://ipapi.co/${userIP}/json/`)
          .then((response) => response.json())
          .then((userData) => {
            const userCountry = userData.country_name;
            console.log('사용자의 국가:', userCountry);
          })
          .catch((error) => {
            console.error('오류 발생:', error);
          });
      })
      .catch((error) => {
        console.error('오류 발생:', error);
      });

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
        <TextField label="id" name="id" margin="dense" required fullWidth />
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
      </Box>
    </Container>
  );
}
