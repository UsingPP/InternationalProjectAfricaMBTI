import { useState ,useRef} from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, DialogActions, Button} from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import Avatar from '@mui/material/Avatar';
import {data as languageInfo} from "./data.jsx"



export default function SignUp(props) {
  const languageText = languageInfo[props.language]
  const [signupData, signupDataChange] = useState({
    name: '',
    birthdate_YY: '',
    birthdate_MM: '',
    birthdate_DD: '',
    userid: '',
    password: '',
    passwordConfirm: '',
    passwordMatchError: false,
  });
  const onsubmit= async(e)=>{
    e.preventDefault();
    console.log(signupData )
    // YY, MM, DD 값을 추출합니다.
    const { birthdate_YY, birthdate_MM, birthdate_DD, ...rest } = signupData;

    // birthdate 키를 추가합니다.
    const birthdate = `${birthdate_YY}/${birthdate_MM}/${birthdate_DD}`;
    const updatedUserData = { ...rest, birthdate };
    try{
      const response = await fetch("https://leadershipsurvey.pythonanywhere.com/signup/",
      {
        method : "POST",
        headers :{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(updatedUserData)
      })
    const data = await response.json();
    if (data.message == "EXISTS_ID"){
      window.alert("The same ID exists");
    }else if (data.message == "success"){
      window.alert("success")
      window.location.reload();
    }
    else{
      console.log("서버오류 : ", response.status)
    }} catch (error) {
      console.error('오류:', error);
    }
  }
  function onChange(e ){
    const { name, value } = e.target;
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
    if (name.slice(0,-3) === "birthdate"){
     if(value.length >2){
      updatedSignupData[name] = value.slice(0,2)
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
          {languageText.title}
        </Typography>
        <form onSubmit={onsubmit}>
        <TextField
          label={languageText.name}
          name="name"
          margin="dense"
          required
          fullWidth
          autoFocus
          onChange={onChange}
        />
        <Grid container>
          <Grid item xs = {4} paddingRight = "4px">
   <TextField label="birthyear"
         name={languageText.birthyear}
         margin="dense"
         required
         fullWidth
         value = {signupData.birthdate_YY}
        onChange={onChange} /></Grid>
          <Grid item xs = {4}>

   <TextField label="birthmonth"
         name={languageText.birthmonth}
         margin="dense"
         required
         fullWidth
         value = {signupData.birthdate_MM}
        onChange={onChange}/></Grid>
          <Grid item xs = {4} paddingLeft = "4px">

   <TextField label="birthdate"
         name={languageText.birthdate}
         margin="dense"
         required
         fullWidth

         value = {signupData.birthdate_DD}
        onChange={onChange}/></Grid>
        </Grid>
        <TextField label={languageText.id} name="userid" margin="dense" required fullWidth onChange={onChange}/>
        <TextField
          label={languageText.password}
          type="password"
          name="password"
          required
          fullWidth
          onChange={onChange}
          margin="dense"
        />
        <TextField
          label={languageText.passwordConfirm}
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
            {languageText.title}
          </Button>
        </DialogActions>
        </form>
      </Box>
    </Container>
  );
}
