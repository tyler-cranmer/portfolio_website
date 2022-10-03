import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { motion, Variants, useAnimation } from 'framer-motion';
import { Typography } from '@mui/material';
import theme from '../../theme';
import Image from 'next/image';

type Props = {
  directionLeft?: boolean;
  name: string;
  url: string;
  inView: boolean;
};

function Skill2({ directionLeft, name, url, inView }: Props) {
  const control = useAnimation();
  const skillVariant: Variants = {
    offscreen: { x: directionLeft ? -200 : 200, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };
  useEffect(() => {
    if (inView) {
      control.start('onscreen');
    }
  }, [control, inView]);

  return (
    <motion.div variants={skillVariant} initial='offscreen' animate={control}>
      <Box
        width={1}
        height={1}
        component={Card}
        display='flex'
        flexDirection='column'
        alignItems='center'
        boxShadow={0}
        variant='outlined'
        borderRadius='20px'
        sx={{
          backgroundColor: 'transparent',
          border: '#454f5b solid 1px',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            transform: `translateY(-${theme.spacing(1)})`,
          },
        }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box marginBottom={1}>
            <Box
              component={Avatar}
              width={60}
              height={60}
              marginBottom={2}
              variant='rounded'
              borderRadius={2}
              position='relative'
              sx={{ backgroundColor: 'transparent' }}>
              <Image src={url} layout='fill' objectFit='contain' />
            </Box>
          </Box>
          <Typography
            align='center'
            color={theme.palette.text.primary}
            fontWeight='bold'>
            {name}
          </Typography>
        </CardContent>
      </Box>
    </motion.div>
  );
}

export default Skill2;
