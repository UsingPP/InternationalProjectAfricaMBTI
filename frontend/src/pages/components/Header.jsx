import React from 'react';
import {
  Stack,
  FormControl,
  InputLabel,
  MenuItem ,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
} from '@mui/material';
import {setCookit, getCookie, deleteCookie, setCookie} from "../../Functions/Cookie"
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff !important',
  },
  // '@media (min-width: 960px)': {
  //   root: {
  //     marginLeft: '65px',
  //   },
  // },
  // '@media (max-width: 600px)': {
  //   root: {
  //     marginLeft: '65px',
  //   },
  // },
  searchInput: {
    opacity: '0.6',
    padding: '0px 8px',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function Header() {
  const navigate = useNavigate();
  function logout(){
    localStorage.clear()
    window.location.href = "/signin"
  }
  const [lang, setLang] = React.useState(getCookie("setLanguage"));
  const handleChange = (event) => {
    setLang(event.target.value);
    setCookie("setLanguage", event.target.value, 10)
    window.location.reload()
  };
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container>
        <Grid item onClick={() => {navigate('/home')}}>
            <Typography align='left' sx={{fontFamily:"'Source Serif 4'", color:"#000000", fontSize:28, fontWeight : 900}}> Our'Survey </Typography>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
          <Stack direction="row">
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          defaultValue={lang}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="ko">Korean</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </FormControl>
          <IconButton>
              <PowerSettingsNewIcon onClick = {logout} />
            </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
