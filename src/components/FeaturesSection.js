// components/FeaturesSection.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faChartLine } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  features: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 0',
    backgroundColor: '#f9f9f9',
  },
  feature: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '300px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    '& svg': {
      width: '100px',
      height: 'auto',
      marginBottom: '10px',
      fill: '#007bff',
    },
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

const FeaturesSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.features}>
      <div className={classes.feature}>
        <FontAwesomeIcon icon={faPaperPlane} />
        <h3>Frictionless Access</h3>
        <p>Instantly access and analyze your healthcare plan PDFs without hassle.</p>
      </div>
      <div className={classes.feature}>
        <FontAwesomeIcon icon={faChartLine} />
        <h3>Understand Your Bills</h3>
        <p>See how your healthcare plan impacts your medical bills with detailed breakdowns.</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
