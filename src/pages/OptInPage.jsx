import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  Container,
  FormControlLabel,
  Link,
  Paper,
  Grid,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/LandingPage.css';

const OptInPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would save this data
    console.log({ name, phone, consent });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Container maxWidth="lg" sx={{ mt: 15, mb: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 'var(--radius-lg)', bgcolor: 'var(--color-white)' }}>
          <Typography variant="h5" component="h1" gutterBottom align="center" sx={{ color: 'var(--color-text)', fontWeight: 600 }}>
            Thank You!
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ color: 'var(--color-text-secondary)' }}>
            You've successfully opted in to receive trip planning messages from PackVote.
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 8 }}>
      <Paper elevation={3} sx={{ 
        p: 4, 
        borderRadius: 'var(--radius-lg)', 
        bgcolor: 'var(--color-white)',
        boxShadow: 'var(--shadow-md)'
      }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'var(--color-text)', fontWeight: 600 }}>
          PackVote SMS Opt-In
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ color: 'var(--color-text-secondary)', mb: 3 }}>
          PackVote helps friends collaboratively plan travel by sending trip surveys via SMS.
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    color="primary"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                }
                label="I agree to receive trip planning messages from PackVote. Msg & data rates may apply. Message frequency varies. Reply STOP to unsubscribe."
                sx={{ color: 'var(--color-text-secondary)' }}
              />
            </Grid>
          </Grid>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="primary-button"
            sx={{ mt: 3, mb: 2 }}
            disabled={!name || !phone || !consent}
          >
            Submit
          </Button>
          
          <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)', textAlign: 'center' }}>
            By submitting, you agree to our{" "}
            <Link component={RouterLink} to="/terms" sx={{ color: 'var(--color-primary)' }}>Terms of Service</Link> and{" "}
            <Link component={RouterLink} to="/privacy" sx={{ color: 'var(--color-primary)' }}>Privacy Policy</Link>.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default OptInPage; 