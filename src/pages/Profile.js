import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Container, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useProfile } from './Context';

function Profile() {
  const { profile } = useProfile(); // Fetch the existing profile data from context

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant="h5" align="center">
          Profile
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h6"><b>Field</b></Typography></TableCell>
              <TableCell><Typography variant="h6"><b>Value</b></Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell>{profile?.name || 'N/A'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b>Email</b></TableCell>
              <TableCell>{profile?.email || 'N/A'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b>Phone</b></TableCell>
              <TableCell>{profile?.phone || 'N/A'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b>EasyPaisa</b></TableCell>
              <TableCell>{profile?.easypaisa || 'N/A'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b>JazzCash</b></TableCell>
              <TableCell>{profile?.jazzcash || 'N/A'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ textAlign: 'center', mt: 3 }}>
      <Button 
          variant="contained" 
          color="secondary" 
          component={NavLink} 
          to="/"
          sx={{
            px: 4,
            textTransform: 'none',
            borderRadius: 50,
          }}
        >
          Home
        </Button>
        <Button 
          variant="contained" 
          color="warning" 
          component={NavLink} 
          to="/profileform"
          sx={{
            mx:1,
            px: 4,
            textTransform: 'none',
            borderRadius: 50,
          }}
        >
          Edit Profile
        </Button>
    
      </Box>
    </Container>
  );
}

export default Profile;
