import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProfile } from './Context';

function Profileform() {
  const { profile , setProfile} = useProfile(); // Fetch the existing profile data from context
  const navigate = useNavigate();

  // Initialize the form state with profile data if it exists, else with default empty values
  const [formData, setFormData] = useState({
    name: profile?.name || '',
    email: profile?.email || '',
    phone: profile?.phone || '',
    easypaisa: profile?.easypaisa || '',
    jazzcash: profile?.jazzcash || '',
  });

  // Sync form data with profile updates if profile changes in the future
  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || '',
        email: profile.email || '',
        phone: profile.phone || '',
        easypaisa: profile.easypaisa || '',
        jazzcash: profile.jazzcash || '',
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
setProfile(formData)
    navigate('/profile'); // Redirect to profile page after submission
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 4,
        }}
      >
        <Typography variant="h5" component="h1" align="center">
          Profile Form
        </Typography>

        <TextField
          label="Business Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="JazzCash "
          name="jazzcash"
          type="number"
          value={formData.jazzcash}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="EasyPaisa "
          name="easypaisa"
          type="number"
          value={formData.easypaisa}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default Profileform;
