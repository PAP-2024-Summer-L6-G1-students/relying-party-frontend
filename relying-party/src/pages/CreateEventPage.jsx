import React, { useState } from 'react';
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
  // State to manage form data
  const [formData, setFormData] = useState({
    organizerName: '',
    organizerEmail: '',
    organizerPhone: '',
    eventDescription: '',
    location: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    virtual: false,
    eventType: '',
    maxParticipants: '',
    specialRequirements: ''
  });

  // State to manage submission messages
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine date and time fields into startDateTime and endDateTime
    const startDateTime = `${formData.startDate}T${formData.startTime}:00.000Z`;
    const endDateTime = `${formData.endDate}T${formData.endTime}:00.000Z`;

    const eventData = {
      organizerName: formData.organizerName,
      organizerEmail: formData.organizerEmail,
      organizerPhone: formData.organizerPhone,
      eventDescription: formData.eventDescription,
      location: formData.location,
      virtual: formData.virtual,
      eventType: formData.eventType,
      maxParticipants: parseInt(formData.maxParticipants, 10),
      specialRequirements: formData.specialRequirements,
      startDateTime,
      endDateTime,
    };

    try {
      const response = await fetch('https://localhost:3003/events', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        const newEvent = await response.json();
        setMessage('Event created successfully!');
        console.log('Event created successfully:', newEvent);
        // Optionally reset the form or navigate to another page
        setFormData({
          organizerName: '',
          organizerEmail: '',
          organizerPhone: '',
          eventDescription: '',
          location: '',
          startDate: '',
          startTime: '',
          endDate: '',
          endTime: '',
          virtual: false,
          eventType: '',
          maxParticipants: '',
          specialRequirements: ''
        });
      } else {
        setMessage('Failed to create event.');
        console.error('Failed to create event.');
      }
    } catch (error) {
      setMessage('Error creating event.');
      console.error('Error creating event:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#d0c3f1', padding: 2, borderRadius: 2, boxShadow: 3, mt: 2 }}>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        {/* Personal Information */}
        <Typography variant="h6" color="#8c52ff" gutterBottom>Personal Information</Typography>
        <CustomTextField name="organizerName" label="Organizer Name:" fullWidth required margin="normal" onChange={handleInputChange} value={formData.organizerName} />
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <CustomTextField name="organizerEmail" label="Email:" fullWidth required onChange={handleInputChange} value={formData.organizerEmail} />
          <CustomTextField name="organizerPhone" label="Phone:" fullWidth required onChange={handleInputChange} value={formData.organizerPhone} />
        </Box>

        <Box className="dashed-line" />

        {/* Event Overview */}
        <Typography variant="h6" color="#8c52ff" gutterBottom>Event Overview</Typography>
        <CustomTextField name="eventDescription" label="Description:" fullWidth required margin="normal" multiline rows={5} onChange={handleInputChange} value={formData.eventDescription} />
        <CustomTextField name="location" label="Location:" fullWidth required margin="normal" onChange={handleInputChange} value={formData.location} />

        <Box className="dashed-line" />

        {/* Event Details */}
        <Typography variant="h6" color="#8c52ff" gutterBottom>Event Details</Typography>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <CustomTextField name="startDate" label="Start Date:" type="date" fullWidth required margin="normal" InputLabelProps={{ shrink: true }} onChange={handleInputChange} value={formData.startDate} />
          <CustomTextField name="startTime" label="Start Time:" type="time" fullWidth required margin="normal" InputLabelProps={{ shrink: true }} onChange={handleInputChange} value={formData.startTime} />
        </Box>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <CustomTextField name="endDate" label="End Date:" type="date" fullWidth required margin="normal" InputLabelProps={{ shrink: true }} onChange={handleInputChange} value={formData.endDate} />
          <CustomTextField name="endTime" label="End Time:" type="time" fullWidth required margin="normal" InputLabelProps={{ shrink: true }} onChange={handleInputChange} value={formData.endTime} />
        </Box>
        <FormControlLabel
          control={<CustomCheckbox name="virtual" checked={formData.virtual} onChange={handleInputChange} />}
          label={<Typography sx={{ fontWeight: 'bold', color: '#8c52ff' }}>Virtual Event</Typography>}
        />

        <Box className="dashed-line" />

        {/* Additional Information */}
        <Typography variant="h6" color="#8c52ff" gutterBottom>Additional Information</Typography>
        <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
          <CustomFormControl fullWidth required margin="normal">
            <InputLabel>Event Category:</InputLabel>
            <Select name="eventType" value={formData.eventType} onChange={handleInputChange}>
              <MenuItem value="Animals">Animals</MenuItem>
              <MenuItem value="Community">Community</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Environmental">Environmental</MenuItem>
              <MenuItem value="Health">Health</MenuItem>
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </CustomFormControl>
          <CustomTextField name="maxParticipants" label="Maximum Participants:" type="number" fullWidth required margin="normal" onChange={handleInputChange} value={formData.maxParticipants} />
        </Box>
        <CustomTextField name="specialRequirements" label="Special Requirements:" fullWidth margin="normal" multiline rows={4} onChange={handleInputChange} value={formData.specialRequirements} />

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
          <Button type="submit" variant="contained" color="primary" size="large" sx={{ bgcolor: '#8c52ff', borderRadius: '25px' }}>
            Submit
          </Button>
          {message && (
            <Typography variant="h6" color={message.includes('successfully') ? 'green' : 'red'} sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default CreateEventPage;