// components/HowItWorksSection.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  howItWorks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 0',
    backgroundColor: '#f9f9f9',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '300px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    '& h3': {
      margin: '20px 0',
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#333',
    },
    '& p': {
      fontSize: '16px',
      color: '#555',
    },
  },
}));

const HowItWorksSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.howItWorks}>
      <div className={classes.step}>
        <h3>Step 1</h3>
        <p>Upload your healthcare plan PDF to our secure platform.</p>
      </div>
      <div className={classes.step}>
        <h3>Step 2</h3>
        <p>Our advanced LLM technology instantly analyzes your plan.</p>
      </div>
      <div className={classes.step}>
        <h3>Step 3</h3>
        <p>Receive a comprehensive breakdown of your healthcare coverage and costs.</p>
      </div>
      {/* Add more steps as needed */}
    </section>
  );
};

export default HowItWorksSection;
