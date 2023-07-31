import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeroSection from '../components/Home/HeroSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import HowItWorksSection from '../components/Home/HowItWorksSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import ContactSection from '../components/Home/ContactSection';

const useStyles = makeStyles((theme) => ({
  content: {
    width: '100%', // Make sure content spans the full width of the page
    maxWidth: '1200px', // Optional: Limit the maximum width of the content
    padding: '0 20px',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
