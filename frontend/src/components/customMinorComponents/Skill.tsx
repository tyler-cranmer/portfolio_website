import React from 'react';
import { Box } from '@mui/system';
import { motion } from 'framer-motion';
import { Typography} from '@mui/material';
import theme from '../../theme';


type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
      }}>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='/index-token.png'
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
            background: theme.palette.grey[300],
          },
          height: '8rem',
          width: '8rem',
        }}>
        <Box
          id='2'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <Typography sx={{ color: 'black', fontWeight: 'bold', opacity: 1 }}>
            100%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Skill;
