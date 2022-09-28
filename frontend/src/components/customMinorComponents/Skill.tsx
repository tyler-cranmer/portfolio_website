import React, {useEffect} from 'react';
import { Box } from '@mui/system';
import { motion, Variants, useAnimation } from 'framer-motion';
import { Typography } from '@mui/material';
import theme from '../../theme';

type Props = {
  directionLeft?: boolean;
  name: string;
  url: string;
  skill: string;
  inView: boolean;
};

function Skill({ directionLeft, name, url, skill, inView }: Props) {
  const control = useAnimation();
  const skillVariant: Variants = {
    offscreen: { x: directionLeft ? -200 : 200, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  useEffect(() => {
    if (inView) {
      control.start('onscreen')
    }
  }, [control, inView]);

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
      }}>
      <motion.img
        variants={skillVariant}
        initial='offscreen'
        animate={control}
        src={url}
        alt={name}
        className='skillsIcon'
      />
      <Box
        id='1'
        sx={{
          position: 'absolute',
          opacity: 0,
          borderRadius: '9999px',
          '&:hover': {
            opacity: 0.8,
            transitionDuration: '400ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            background: theme.palette.grey[500],
          },
          height: {
            xs: '5rem',
            sm: '6rem',
            md: '8rem',
          },
          width: {
            xs: '5rem',
            sm: '6rem',
            md: '8rem',
          },
        }}>
        <Box
          id='2'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <Typography
            variant='h5'
            sx={{ color: 'black', fontWeight: 'bold', opacity: 1.5 }}>
            {skill}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Skill;
