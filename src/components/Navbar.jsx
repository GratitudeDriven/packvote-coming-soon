import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/LandingPage.css';

const Navbar = () => {
  return (
    <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ color: 'var(--color-primary)', fontWeight: 600 }}>
            <RouterLink to="/" style={{ textDecoration: 'none', color: 'var(--color-primary)' }}>
              PackVote
            </RouterLink>
          </Typography>
          <Box>
            <Button 
              component={RouterLink} 
              to="/opt-in" 
              variant="outlined"
              className="primary-button"
            >
              SMS Opt-In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 