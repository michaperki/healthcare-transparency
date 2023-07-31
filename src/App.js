// App.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  app: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    width: '100%', // Make sure content spans the full width of the page
    maxWidth: '1200px', // Optional: Limit the maximum width of the content
    padding: '0 20px',
  },
  footer: {
    width: '100%',
    marginTop: 'auto', // Push the footer to the bottom of the page
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    '&:hover': {
      color: '#007bff',
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.content}>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
      <footer className={classes.footer}>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav className={classes.nav}>
          <a href="/privacy-policy" className={classes.link}>Privacy Policy</a>
          <a href="/terms-of-service" className={classes.link}>Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
};

export default App;
