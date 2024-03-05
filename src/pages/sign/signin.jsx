import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {makeStyles} from '@mui/styles';
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  collapseClasses,
} from '@mui/material';
import { useState } from 'react';
import SignUp from './signup.jsx';
import FindID from './FindID.jsx';
import FindPW from './FindPW.jsx';

const imageList = ["data:image/jpeg;base64,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","https://www.techexplorist.com/wp-content/uploads/2020/07/earth-continents-1.jpg","https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://mir-s3-cdn-cf.behance.net/project_modules/1400/4b8001191956669.65d464c2e1061.jpg"]

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${imageList[2]})`,
    // `url(${imageList[1]})` 
    backgroundColor: `gray`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3),
    boxSizing: 'border-box',
    color: 'white',
    textAlign: 'center',
  },
  contentBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(17),
    borderRadius: theme.spacing(1),
    color : "black"
  },
  textField : {
    [theme.breakpoints.up('sm')]: {
      width : "80%"
    },[theme.breakpoints.down("sm")]: {
      width : "100%"
    },
  }
}));


export default function SignIn() {
  const [signInData, setSignInData] = useState({
    userId: "",
    password:""
  })
  function changeValue(e){
    let copy = {...signInData }
    copy[e.target.name]  = e.target.value
    setSignInData(copy)
  }

  const onsubmit= async(e)=>{
    e.preventDefault();
    console.log(signInData)
    try{
      const response = await fetch("http://127.0.0.1:8000/userCheckToSignIn/",
      {
        method : "POST",
        headers :{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(signInData)
      })
    
    if (response.ok){
      const data = await response.json();
      const token = data.token;
      localStorage.setItem('token', token);
      console.log("로그인성공");
    }else{
      console.log("서버오류 : ", response.status)
    }} catch (error) {
      console.error('오류:', error);
    }
  }
  const classes = useStyles()
  const [open, openChange] = useState(false);
  const [findIdOpen, findIdOpenChange] = useState(false);
  const [findPwOpen, findPwOpenChange] = useState(false);
  const openSignUpDialog = () => {
    openChange(true);
  };
  const closeSignUpDialog = () => {
    openChange(false);
  };
  const openFindID = () => {
    findIdOpenChange(true);
  };
  const closeFindID = () => {
    findIdOpenChange(false);
  };
  const openFindPW = () => {
    findPwOpenChange(true);
  };
  const closeFindPW = () => {
    findPwOpenChange(false);
  };
  return (
    <div className={classes.root}>
    
    <Container maxWidth="sm" className = {classes.contentBox}>
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" >
          Sign In
        </Typography>
        <form action = "/userCheckToSignIn" onSubmit={onsubmit}>
        <TextField
          value = {signInData.userId}
          margin="normal"
          label="ID"
          name="userId"
          required
          autoFocus
          className = {classes.textField}
          onChange = {changeValue}
          sx = {{mt : 6}}
        />
        <TextField
          value = {signInData.password}
          label="PassWord"
          type="password"
          name="password"
          required
          className = {classes.textField}
          onChange = {changeValue}

          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" />}
          label="Remember ID"
        />
        <Button
          type="submit"
          variant="contained"
          className = {classes.textField}
          sx = {{mt : 1}}
        >
          Sign In{' '}
        </Button>
        </form>
        <Grid container width = {{sm : "80%", xs : "100%"}}>
          <Grid item xs ={7} align = "left">
            <Link  fontSize ={{xs : 13, sm : 16}} onClick = {openFindID}>Forgot ID?</Link> 
            <Link sx = {{ml : 3}} fontSize ={{xs : 13, sm : 16}} onClick = {openFindPW}>Forgot PW?</Link>
          </Grid>
          <Grid item xs ={5} align = "right">
            <Link   fontSize ={{xs : 13, sm : 16}}onClick={openSignUpDialog}>Sign Up!</Link>
          </Grid>
        </Grid>
      </Box>
      
      <Dialog open={open} onClose={closeSignUpDialog} fullWidth maxWidth="xs">
        <DialogContent>
          <SignUp />
        </DialogContent>
       
      </Dialog>
      <Dialog open={findIdOpen} onClose={closeFindID} fullWidth maxWidth="xs">
        <DialogContent>
          <FindID />
          
        </DialogContent>
        
      </Dialog>
      <Dialog open={findPwOpen} onClose={closeFindPW} fullWidth maxWidth="xs">
        <DialogContent>
          <FindPW />
        </DialogContent>
        
      </Dialog>
    </Container>
    </div>

  );
}
