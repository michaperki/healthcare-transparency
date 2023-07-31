// components/HeroSection.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    position: 'relative',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundImage: 'url("/images/hero-image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      minHeight: '300px', // Adjust the height for smaller screens
    },
  },
  heroContent: {
    zIndex: 1,
    position: 'relative',
  },
  h1: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px', // Adjust the font size for smaller screens
    },
  },
  h2: {
    fontSize: '24px',
    marginBottom: '30px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px', // Adjust the font size for smaller screens
    },
  },
  ctaButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '12px 30px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px', // Adjust the font size for smaller screens
      padding: '10px 25px', // Adjust the padding for smaller screens
    },
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      <div className={classes.heroContent}>
        <h1 className={classes.h1}>Frictionless Access to Your Healthcare Plan</h1>
        <h2 className={classes.h2}>Get a Clear View of Your Healthcare Plan and Bills</h2>
        <button className={classes.ctaButton}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
