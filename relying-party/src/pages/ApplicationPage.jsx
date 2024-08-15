import React from 'react';
import { Container, Typography, TextField, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import './ApplicationPage.css';

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    borderRadius: 5, // or 25 for a more rounded look
    backgroundColor: '#ffffff', // White background
    color: '#000000', // Black text color
  },
  '& .MuiInputLabel-root': {
    color: '#000000', // Black color for the label text
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff', // White border color
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff',
  },
  '& .MuiInputBase-input': {
    color: '#000000', // Black color for the input text
  },
});

const ApplicationPage = () => {
  return (
    <Container maxWidth="sm" className="application-container">
      <Typography variant="h4" className="application-title" gutterBottom>
        Application Form
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CustomTextField
              label="First Name:"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Last Name:"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Date of Birth:"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Email:"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Phone number:"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="Address:"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ApplicationPage;