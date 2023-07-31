// components/TestimonialsSection.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  testimonials: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px 0',
    backgroundColor: '#f9f9f9',
  },
  testimonial: {
    maxWidth: '600px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    '& blockquote': {
      fontStyle: 'italic',
      fontSize: '24px',
      lineHeight: '1.6',
      color: '#333',
    },
    '& p': {
      fontSize: '18px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#555',
    },
  },
}));

const TestimonialsSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.testimonials}>
      <div className={classes.testimonial}>
        <blockquote>
          "The LLM has been a game-changer for me. I now have a clear understanding of my healthcare expenses."
        </blockquote>
        <p>- John Doe, Happy Healthcare Consumer</p>
      </div>
      {/* Add more testimonials as needed */}
    </section>
  );
};

export default TestimonialsSection;
