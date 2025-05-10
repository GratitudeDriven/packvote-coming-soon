import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import '../styles/LandingPage.css';

const TermsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 8 }}>
      <Paper elevation={3} sx={{ 
        p: 4, 
        borderRadius: 'var(--radius-lg)', 
        bgcolor: 'var(--color-white)',
        boxShadow: 'var(--shadow-md)'
      }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'var(--color-text)', fontWeight: 600 }}>
          Terms of Service
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'var(--color-text)', fontWeight: 600 }}>
            1. Introduction
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'var(--color-text-secondary)' }}>
            Welcome to PackVote. By using our service, you agree to these Terms of Service.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ color: 'var(--color-text)', fontWeight: 600 }}>
            2. SMS Service
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'var(--color-text-secondary)' }}>
            Our service sends SMS messages for trip planning purposes. Message and data rates may apply. 
            You can opt out at any time by replying STOP to any message we send.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ color: 'var(--color-text)', fontWeight: 600 }}>
            3. User Consent
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'var(--color-text-secondary)' }}>
            By providing your phone number and opting in, you consent to receive text messages from PackVote.
          </Typography>
          
          <Typography variant="body2" sx={{ mt: 4, color: 'var(--color-text-secondary)' }}>
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsPage; 