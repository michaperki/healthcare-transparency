import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    minHeight: '100px',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    width: '150px',
    height: 'auto',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold',
    '&:hover': {
      color: '#007bff',
    },
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.up('md')]: {
      display: 'none', // Hide the mobile navigation on larger screens
    },
  },
  mobileNavLink: {
    padding: '15px 0',
    width: '100%',
    textAlign: 'center',
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderBottom: '1px solid #ddd',
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      color: '#007bff',
    },
  },
  mobileNavButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      background: 'none',
      border: 'none',
      color: '#007bff',
      fontSize: '18px',
      cursor: 'pointer',
      padding: '10px',
      '&:focus': {
        outline: 'none',
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <header className={classes.header}>
      <img src="/images/your-logo.png" alt="Company Logo" className={classes.logo} />
      <nav className={classes.nav}>
        <a href="#home" className={classes.navLink}>Home</a>
        <a href="#about" className={classes.navLink}>About</a>
        <a href="#services" className={classes.navLink}>Services</a>
        <a href="#contact" className={classes.navLink}>Contact</a>
      </nav>
      <div className={classes.mobileNav}>
        {showMobileNav && (
          <nav>
            <a href="#home" className={classes.mobileNavLink}>Home</a>
            <a href="#about" className={classes.mobileNavLink}>About</a>
            <a href="#services" className={classes.mobileNavLink}>Services</a>
            <a href="#contact" className={classes.mobileNavLink}>Contact</a>
          </nav>
        )}
        <button className={classes.mobileNavButton} onClick={toggleMobileNav}>
          {showMobileNav ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  );
};

export default Header;
