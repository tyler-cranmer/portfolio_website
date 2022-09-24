import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import theme from '../../theme';
import Image from 'next/image';
import { Stack } from '@mui/system';

function About() {
  return (
    <Box
      id='about'
      sx={{ backgroundColor: theme.palette.grey[900], minHeight: '90vh' }}>
      <Box pt={{ md: 12 }} pb={{ md: 15 }}>
        <Container maxWidth='lg'>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ maxWidth: '50%' }}>
              <Stack spacing={3} pr={4}>
                <Typography
                  variant='h2'
                  sx={{ fontWeight: 'Bold' }}
                  gutterBottom>
                  About Me
                </Typography>
                <Typography gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat alias quisquam unde sed vitae, error cumque eveniet
                  qui, atque deleniti repellendus voluptates maiores, delectus
                  soluta! Quis dolor inventore quibusdam alias?
                </Typography>
                <Typography gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat alias quisquam unde sed vitae, error cumque eveniet
                  qui, atque deleniti repellendus voluptates maiores, delectus
                  soluta! Quis dolor inventore quibusdam alias?
                </Typography>
                <Typography gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  magnam sint similique?
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ marginLeft: '1em' }}>
              <Image
                alt='index logo'
                src='/face-kid.png'
                width={500}
                height={500}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
