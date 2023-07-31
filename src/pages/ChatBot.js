import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    padding: '20px',
    textAlign: 'center',
  },
  message: {
    backgroundColor: '#f0f0f0',
    borderRadius: '20px',
    padding: '20px',
    maxWidth: '70%',
    marginTop: '20px',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '0',
      borderTop: '20px solid #f0f0f0',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      bottom: '-20px',
      left: '50%',
      transform: 'translateX(-50%)',
    }
  },
  typing: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    borderRight: '.15em solid black',
    animation: '$typing 3s steps(40, end), $blink-caret .75s step-end infinite',
  },
  '@keyframes typing': {
    'from': { width: '0' },
    '1%': { width: '0' },
    '100%': { width: '100%' }
  },
  '@keyframes blink-caret': {
    '50%': { borderColor: 'transparent' },
  },
}));

const ChatBot = () => {
  const classes = useStyles();

  return (
    <div className={classes.chatContainer}>
      <div className={classes.message}>
        <h2 className={classes.typing}>Hello, I'm your friendly ChatBot, currently waiting to be programmed...</h2>
      </div>
    </div>
  );
};

export default ChatBot;
