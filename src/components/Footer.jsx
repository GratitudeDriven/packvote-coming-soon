import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/LandingPage.css';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        mt: 'auto',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e0e0e0'
      }}
      className="footer"
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)', textAlign: 'center' }}>
          © {new Date().getFullYear()} PackVote
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <Link component={RouterLink} to="/terms" sx={{ color: 'var(--color-text-secondary)' }}>
            Terms of Service
          </Link>
          <Typography sx={{ mx: 1, color: 'var(--color-text-secondary)' }}>|</Typography>
          <Link component={RouterLink} to="/privacy" sx={{ color: 'var(--color-text-secondary)' }}>
            Privacy Policy
          </Link>
          <Typography sx={{ mx: 1, color: 'var(--color-text-secondary)' }}>|</Typography>
          <Link component={RouterLink} to="/opt-in" sx={{ color: 'var(--color-text-secondary)' }}>
            SMS Opt-In
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 