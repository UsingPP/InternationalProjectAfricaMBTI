import { useState } from 'react'; // useRef는 사용하지 않으므로 삭제
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, DialogActions, Button} from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import Avatar from '@mui/material/Avatar';
import { data as languageInfo } from "./data.jsx"

let pwReg = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/);
let yyReg = new RegExp(/^(19[0-9][0-9]|20\d{2})$/);
let dReg = new RegExp(/^([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])$/);
let mReg = new RegExp(/^(1[0-2]|[1-9]|0[1-9])$/); // 월 검사용 정규식
export default function SignUp(props) {
  const languageText = languageInfo[props.language];
  const [signupData, setSignupData] = useState({
    name: '',
    birthdate_YY: '',
    birthdate_MM: '',
    birthdate_DD: '',
    userid: '',
    password: '',
    passwordConfirm: '',
    ispasswordMatch: true,
    isyearOk : true,
    ismonthOk : true,
    isdayOk : true,
    submitokay : false,
    passwordMatchError : "",
    birYearError: '',
    birMonthError: '',
    birDayError: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    let updatedSignupData = { ...signupData, [name]: value };

    if (name === 'passwordConfirm') {
      updatedSignupData.submitokay = true
      updatedSignupData.ispasswordMatch = value == signupData.password;
      
    }

    if (name.slice(0, -3) === "birthdate") {
      if (name === 'birthdate_YY' && !yyReg.test(value)) {
        updatedSignupData.isyearOk = false;
        updatedSignupData.birYearError = "태어난 년도 4자리를 정확하게 입력하세요."
        
      } else {
        updatedSignupData.isyearOk = true;
        updatedSignupData.birYearError = ""
      updatedSignupData.submitokay = true
      }

      if (name === 'birthdate_MM' && !mReg.test(value)) {
        updatedSignupData.ismonthOk =false;
        updatedSignupData.birMonthError = "태어난 월을 정확하게 입력해주세요"
      } else {
        updatedSignupData.ismonthOk = true;
        updatedSignupData.birMonthError = ""

        updatedSignupData.submitokay = true
      }

      if (name === 'birthdate_DD' && !dReg.test(value)) {
        updatedSignupData.isdayOk =false;
        updatedSignupData.birDayError = "태어난 일을 정확하게 입력해주세요"
      } else {
        updatedSignupData.birDayError = ""
        updatedSignupData.isdayOk =true;
        updatedSignupData.submitokay = true
      }

    }
    setSignupData(updatedSignupData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { birthdate_YY, birthdate_MM, birthdate_DD, ...rest } = signupData;
    const birthdate = `${birthdate_YY}/${birthdate_MM}/${birthdate_DD}`;
    const updatedUserData = { ...rest, birthdate };
    try {
      const response = await fetch("http://127.0.0.1:8000/signup/", {
      // const response = await fetch("https://leadershipsurvey.pythonanywhere.com/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUserData)
      });

      const data = await response.json();
      if (data.message === "EXISTS_ID") {
        window.alert("The same ID exists");
      } else if (data.message === "success") {
        window.alert("success");
        window.location.reload();
      } else {
        console.log("서버오류 : ", response.status);
      }
    } catch (error) {
      console.error('오류:', error);
    }
  }

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
        <form onSubmit={onSubmit}>
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
            <Grid item xs={4} paddingRight="4px">
              <TextField
                label="birthyear"
                name="birthdate_YY"
                margin="dense"
                required
                fullWidth
                value={signupData.birthdate_YY}
                onChange={onChange}
                error={signupData.isyearOk ==false}
                helperText={signupData.birYearError}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="birthmonth"
                name="birthdate_MM"
                margin="dense"
                required
                fullWidth
                value={signupData.birthdate_MM}
                onChange={onChange}
                error={signupData.ismonthOk ==false}
                helperText={signupData.birMonthError}
              />
            </Grid>
            <Grid item xs={4} paddingLeft="4px">
              <TextField
                label="birthdate"
                name="birthdate_DD"
                margin="dense"
                required
                fullWidth
                value={signupData.birthdate_DD}
                onChange={onChange}
                error={signupData.isdayOk ==false}
                helperText={signupData.birDayError}
              />
            </Grid>
          </Grid>
          <TextField label={languageText.id} name="userid" margin="dense" required fullWidth onChange={onChange} />
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
            error={signupData.ispasswordMatch==false}
            helperText={
              signupData.errormessage
            }
          />
          <DialogActions>

            {signupData.submitokay ?
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              fullWidth
            >
              {languageText.title}
            </Button> : <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              fullWidth
            >
              {languageText.title}
            </Button>}
          </DialogActions>
        </form>
      </Box>
    </Container>
  );
}
