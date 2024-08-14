import React from 'react';
import { Container, Typography, TextField, Button, Box, Select, MenuItem, FormControl, InputLabel, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material';
import { styled } from '@mui/system';
import './CreateEventPage.css'; // "This is the CSS file"

// "This section contains the custom styled components"
const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    borderRadius: 25,
    backgroundColor: '#ffffff',
    color: '#d0c3f1',
  },
  '& .MuiInputLabel-root': {
    fontWeight: 'bold',
    color: '#d0c3f1',
    top: '10px',
  },
  '& .MuiFormLabel-root.Mui-focused': {
    top: '10px',
  },
  '& .MuiFormLabel-asterisk': {
    display: 'none',
  },
  '& .MuiSvgIcon-root': {
    color: '#d0c3f1',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#d0c3f1',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#d0c3f1',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#d0c3f1',
  },
});

const CustomRadio = styled(Radio)({
  color: '#ffffff',
  '&.Mui-checked': {
    color: '#ffffff',
  },
});

const CustomCheckbox = styled(Checkbox)({
  color: '#8c52ff', 
  '&.Mui-checked': {
    color: '#8c52ff',
    '& .MuiSvgIcon-root': {
      fill: '#8c52ff',
    },
  },
});

const CustomFormControl = styled(FormControl)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },
  '& .MuiInputLabel-root': {
    fontWeight: 'bold',
    color: '#d0c3f1',
  },
  '& .MuiSelect-icon': {
    color: '#d0c3f1',
  },
});

// "This is the main CreateEventPage component"
const CreateEventPage = () => {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#d0c3f1', padding: 2, borderRadius: 2, boxShadow: 3, mt: 2 }}>
      <Box component="form" noValidate autoComplete="off">
        
        {/* This right here is the Personal Information */}
        <Typography variant="h6" color="#8c52ff" gutterBottom>Personal Information</Typography>
        <CustomTextField label="Organizer Name:" fullWidth required margin="normal" />
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <CustomTextField label="Email:" fullWidth required />
          <CustomTextField label="Phone:" fullWidth required />
        </Box>

        <Box className="dashed-line" />

        {/* This is the Event Overview from line 84 through line 98 */}
        <Typography variant="h6" color="#8c52ff" gutterBottom>Event Overview</Typography>
        <CustomTextField label="Event Title:" fullWidth required margin="normal" multiline rows={5} />
        <CustomTextField label="Description:" fullWidth required margin="normal" multiline rows={5} />

        <Box className="dashed-line" />

        {/* this is the Event Details from 102 to line 117 */}
        <Typography variant="h6" color="#8c52ff" gutterBottom>Event Details</Typography>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <CustomTextField label="Start Date:" type="date" fullWidth required margin="normal" InputLabelProps={{ shrink: true }} />
          <CustomTextField label="Start Time:" type="time" fullWidth required margin="normal" InputLabelProps={{ shrink: true }} />
          <CustomTextField label="Location:" fullWidth required margin="normal" />
        </Box>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <CustomTextField label="End Date:" type="date" fullWidth required margin="normal" InputLabelProps={{ shrink: true }} />
          <CustomTextField label="End Time:" type="time" fullWidth required margin="normal" InputLabelProps={{ shrink: true }} />
          <CustomTextField label="URL:" fullWidth margin="normal" />
        </Box>
        <FormControlLabel
          control={<CustomCheckbox />} 
          label={<Typography sx={{ fontWeight: 'bold', color: '#8c52ff' }}>Virtual Event</Typography>} 
        />

        <Box className="dashed-line" />

        {/* this is the Additional Information from line 121 to line 143 */}
        <Typography variant="h6" color="#8c52ff" gutterBottom>Additional Information</Typography>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <CustomFormControl fullWidth required margin="normal" sx={{ bgcolor: '#ffffff', borderRadius: 25 }}>
            <InputLabel>Event Category:</InputLabel>
            <Select>
              <MenuItem value="Animals">Animals</MenuItem>
              <MenuItem value="Community">Community</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Environmental">Environmental</MenuItem>
              <MenuItem value="Health">Health</MenuItem>
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </CustomFormControl>
          <CustomTextField label="Maximum Participants:" type="number" fullWidth required margin="normal" />
        </Box>
        <CustomTextField label="Special Requirements:" fullWidth margin="normal" multiline rows={4} />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button variant="contained" color="primary" size="large" sx={{ bgcolor: '#8c52ff', borderRadius: '25px' }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateEventPage;