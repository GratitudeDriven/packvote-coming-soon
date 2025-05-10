import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import '../styles/LandingPage.css';

const PrivacyPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 8 }}>
      <Paper elevation={3} sx={{ 
        p: 4, 
        borderRadius: 'var(--radius-lg)', 
        bgcolor: 'var(--color-white)',
        boxShadow: 'var(--shadow-md)'
      }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'var(--color-text)', fontWeight: 600 }}>
          Privacy Policy
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'var(--color-text)', fontWeight: 600 }}>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'var(--color-text-secondary)' }}>
            We collect your name and phone number when you opt in to receive SMS messages from PackVote.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ color: 'var(--color-text)', fontWeight: 600 }}>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'var(--color-text-secondary)' }}>
            We use your phone number to send you trip planning messages and surveys. We will not share your 
            information with third parties except as required to provide our service.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ color: 'var(--color-text)', fontWeight: 600 }}>
            3. Opting Out
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'var(--color-text-secondary)' }}>
            You can opt out of receiving messages at any time by replying STOP to any message we send.
          </Typography>
          
          <Typography variant="body2" sx={{ mt: 4, color: 'var(--color-text-secondary)' }}>
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPage; 