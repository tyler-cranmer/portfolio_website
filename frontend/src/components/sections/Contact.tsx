import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CustomForm from '../customMinorComponents/CustomForm';
import theme from '../../theme';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type Props = {};

const contactVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    x: -80,
  },

  offscreen2: {
    scale: 1,
    opacity: 0,
    x: 80,
  },

  offscreenForm: {
    scale: 0,
    opacity:0
  },

  onscreen: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
    },
  },

  onscreen2: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },

  onscreen3: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
    },
  },

  onscreenForm: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.8
    }
  }
};

function Contact({ }: Props) {
  
  const control = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        control.start('onscreen');
        control2.start('onscreen2');
        control3.start('onscreen3');
        control4.start('onscreenForm')
      }
    }, [control, control2, control3, control4, inView]);
  return (
    <Box
      id='contact'
      sx={{
        backgroundColor: theme.palette.grey[800],
        overFlow: 'hidden',
        position: 'relative',
        paddingTop: '12em',
        paddingBottom: '10em',
      }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <motion.div
            ref={ref}
            variants={contactVariant}
            initial='offscreen'
            animate={control}>
            <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
              Contact
            </Typography>
          </motion.div>
          <motion.div
            variants={contactVariant}
            initial='offscreen2'
            animate={control2}>
            <Box
              sx={{ backgroundColor: 'white', width: '115px', height: '3.5px' }}
              mb={4}
            />
          </motion.div>
          <motion.div
            variants={contactVariant}
            initial='offscreen2'
            animate={control3}>
            <Typography >
              Have a question or want to work together?
            </Typography>
          </motion.div>
          <motion.div
            variants={contactVariant}
            initial='offscreenForm'
            animate={control4}>
            <CustomForm />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Contact;
