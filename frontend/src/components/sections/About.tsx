import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import theme from '../../theme';
import Image from 'next/image';
import { Stack } from '@mui/system';

function About() {
  return (
    <Box sx={{ backgroundColor: theme.palette.grey[900], minHeight: '50vh' }}>
      <Container maxWidth='lg'>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ maxWidth: '50%'}}>
            <Stack spacing={3} pr={4}>
              <Typography variant='h2' sx={{ fontWeight: 'Bold' }} gutterBottom>
                About Me
              </Typography>
              <Typography gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                alias quisquam unde sed vitae, error cumque eveniet qui, atque
                deleniti repellendus voluptates maiores, delectus soluta! Quis
                dolor inventore quibusdam alias?
              </Typography>
              <Typography gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                alias quisquam unde sed vitae, error cumque eveniet qui, atque
                deleniti repellendus voluptates maiores, delectus soluta! Quis
                dolor inventore quibusdam alias?
              </Typography>
              <Typography gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                magnam sint similique?
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ marginLeft: '1em'}}>
            <Image
              alt='index logo'
              src='/face-kid.png'
              width={500}
              height={500}
            />
          </Box>
        </Box>
        {/* <Grid container spacing={2} columns={16}>
          <Grid item xs={6}>
            <Typography variant='h2' sx={{ fontWeight: 'Bold' }} gutterBottom>
              About Me
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              alias quisquam unde sed vitae, error cumque eveniet qui, atque
              deleniti repellendus voluptates maiores, delectus soluta! Quis
              dolor inventore quibusdam alias?
            </Typography>
            <Typography gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              magnam sint similique? Aliquam incidunt, sit voluptatem quo nam
              atque, omnis ipsa cumque suscipit libero voluptate veniam, itaque
              ipsam in excepturi.
            </Typography>
            <Typography gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              magnam sint similique?
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Box>
              <Image
                alt='index logo'
                src='/face-kid.png'
                width={500}
                height={500}
              />
            </Box>
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
}

export default About;
