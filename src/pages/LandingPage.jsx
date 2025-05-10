import React, { useState } from 'react';
import axios from 'axios';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  AppBar,
  Toolbar,
  TextField,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkIcon from '@mui/icons-material/Link';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ExploreIcon from '@mui/icons-material/Explore';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Submit email to our API endpoint
      await axios.post('/api/subscribe', { email });
      setShowSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setErrorMessage(error.response?.data?.message || 'Failed to subscribe. Please try again.');
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'background.paper' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ color: 'primary.main', fontWeight: 600 }}>
            PackVote
          </Typography>
          {/* Navigation links removed as requested */}
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg">
        <div className="hero-section">
          <div className="hero-text">
            <Typography variant="h1" component="h1" gutterBottom>
              Where should we go?
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              AI-powered planning that picks the perfect date, destination, and activities for your crew in minutes.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Coming soon! Join our waitlist to be the first to know when we launch.
            </Typography>
            <form onSubmit={handleSubmit} id="signup">
              <Box sx={{ display: 'flex', gap: 2, maxWidth: 500 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  disabled={loading}
                />
                <Button
                  variant="contained"
                  size="large"
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <ArrowForwardIcon />}
                  type="submit"
                  className="primary-button"
                  disabled={loading}
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </Box>
            </form>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Scenic mountain road trip view"
            />
          </div>
        </div>
      </Container>

      {/* How It Works */}
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom className="section-title">
          How It Works
        </Typography>
        <div className="features-section">
          <div className="feature">
            <div className="feature-icon">
              <LinkIcon />
            </div>
            <h3>1. Create a trip link</h3>
            <p>Start your adventure with one click</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <QuestionAnswerIcon />
            </div>
            <h3>2. Friends fill one quick questionnaire</h3>
            <p>Quick preferences from everyone</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <ExploreIcon />
            </div>
            <h3>3. AI suggests 3 perfect destinations</h3>
            <p>Matched to your group's needs</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <HowToVoteIcon />
            </div>
            <h3>4. Vote and book</h3>
            <p>Democracy wins!</p>
          </div>
        </div>
      </Container>

      {/* Benefits */}
      <Container maxWidth="lg">
        <div className="benefits-section">
          <div className="benefit">
            <AccessTimeIcon />
            <p>Skips annoying back-and-forth</p>
          </div>
          <div className="benefit">
            <AccountBalanceWalletIcon />
            <p>Aligns budgets & vibes</p>
          </div>
          <div className="benefit">
            <PhoneIphoneIcon />
            <p>No app download required</p>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="footer">
        <Container maxWidth="lg">
          <div className="footer-content">
            <Typography variant="body1" align="center" className="footer-tagline">
              ✈️ Made for group travel lovers
            </Typography>
          </div>
        </Container>
      </footer>

      <Snackbar 
        open={showSuccess} 
        autoHideDuration={6000} 
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Thanks for joining our waitlist! We'll keep you updated.
        </Alert>
      </Snackbar>

      <Snackbar 
        open={showError} 
        autoHideDuration={6000} 
        onClose={() => setShowError(false)}
      >
        <Alert severity="error" onClose={() => setShowError(false)}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LandingPage; 