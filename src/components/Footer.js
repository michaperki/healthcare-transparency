// components/Footer.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
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

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      <nav className={classes.nav}>
        <a href="/privacy-policy" className={classes.link}>Privacy Policy</a>
        <a href="/terms-of-service" className={classes.link}>Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
