import React from 'react';
import { TextField, Button, Paper, Box, Typography, Container } from '@mui/material';

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log('Form submitted');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={6}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          borderRadius: 2, // Adjust this value for more or less rounded corners
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            variant="outlined"
            sx={{ borderRadius: 1 }} // Rounded corners for inputs
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            variant="outlined"
            sx={{ borderRadius: 1 }} // Rounded corners for inputs
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 1 }} // Rounded corners for button
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
