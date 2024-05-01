import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import bgImg from '../Assets/Images/LoginBkgImg.png'
import '../Styles/login.css'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios'

function Copyright(props) {
  // const [userId, setUserId] = useState('');
  // const [password, setPassword] = useState('');
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Laundry Hub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({});
  const [jwtToken, setJwtTOken] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userName = data.get('userName');
    const password = data.get('password');

    setUserName(userName);
    setPassword(password);

    const errors = {};

    if (!userName) {
      errors.userName = 'User name is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    } 

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      NotificationManager.success('Success', 'Login Success', 5000);
      login();
      console.log({
        userName: userName,
        password: password,
      });
    }
  };

  const login = async (userName, password) => {
    try {
      const response = await axios.post(`https://localhost:44394/api/Authentication/api/Authentication/Login`, {
        username: "abdul",
        password: "Password@1"
      });
      console.log("response", response);
      setJwtTOken(response.data.token)
    } catch (error) {
      console.log("login Error", error);
    }
  }

  return (
    <div className='main-container'>
      <NotificationContainer />
      {/* <div  style={{ backgroundImage:`url(${bgImg})`}}> */}
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  error={Boolean(formErrors.email)}
                  helperText={formErrors.email}
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  label="User name"
                  name="userName"
                  autoComplete="userName"
                  autoFocus
                />
                <TextField
                  error={Boolean(formErrors.password)}
                  helperText={formErrors.password}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showPassword ? (
                          <VisibilityOffIcon onClick={() => setShowPassword(false)} style={{ cursor: 'pointer' }} />
                          ) : (
                          <VisibilityIcon onClick={() => setShowPassword(true)} style={{ cursor: 'pointer' }} />
                          )}
                      </InputAdornment>
                    ),
                  }}
                  />
                {/* <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      {/* </div> */}
    </div>
  );
}
