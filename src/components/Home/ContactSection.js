// components/ContactSection.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contactSection: {
    backgroundColor: '#f9f9f9',
    padding: '50px 0',
    textAlign: 'center',
  },
  contactInfo: {
    fontSize: '18px',
    color: '#555',
    margin: '20px 0',
  },
  contactLink: {
    color: '#007bff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const ContactSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.contactSection}>
      <p>Have questions or need support?</p>
      <p className={classes.contactInfo}>
        Contact us at <a href="mailto:support@example.com" className={classes.contactLink}>support@example.com</a> or call <a href="tel:123-456-7890" className={classes.contactLink}>123-456-7890</a>.
      </p>
    </section>
  );
};

export default ContactSection;
