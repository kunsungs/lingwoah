import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Form from 'react-bootstrap/Form';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            opacity: [2.0, 2.8, 0.7],
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an account
          </Typography>
          <Form autoComplete="off" className="Form" onSubmit = {handleSubmit}>
         <Form.Group className="mb-3" controlId="formGroupEmail">
           <Form.Label>Email address</Form.Label>
                <Form.Control 
                    name="email" 
                    placeholder="Enter email"
                    type="text"

                    required
                    autoComplete="true" 
                     />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formGroupPassword">
           <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    name="password"

                    required
                    autoComplete="true" />
      </Form.Group>

          <Button title="Login" aria-label="Login" type="submit" variant="contained">
            Sign up
          </Button>
    </Form>
        
      <div className="option">
        <p>
          Already have an account? <space></space>
          <Link href="/signin">
            Sign in
          </Link>
        </p>
      </div>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignUp