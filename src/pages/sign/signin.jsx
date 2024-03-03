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
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import SignUp from './signup.jsx';

export default function SignIn() {
  const [open, openChange] = useState(false);
  const openSignUpDialog = () => {
    openChange(true);
  };
  const closeSignUpDialog = () => {
    openChange(false);
  };
  return (
    <Container maxWidth="xs">
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
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <TextField
          margin="normal"
          label="ID"
          name="userId"
          required
          fullWidth
          autoFocus
        />
        <TextField
          label="PassWord"
          type="password"
          name="password"
          required
          fullWidth
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" />}
          label="Remember ID"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          fullWidth
        >
          Sign In{' '}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot Password / ID ?</Link>
          </Grid>
          <Grid item>
            <Link onClick={openSignUpDialog}>Sign Up!</Link>
          </Grid>
        </Grid>
      </Box>
      <Dialog open={open} onClose={closeSignUpDialog} fullWidth maxWidth="xs">
        <DialogContent>
          <SignUp />
        </DialogContent>
        <DialogActions>
          <Button
            href="/signin"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            fullWidth
          >
            Sign UP{' '}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
