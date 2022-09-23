import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import theme from '../../theme';

function About() {
  return (
    <Box sx={{ backgroundColor: theme.palette.grey[900], minHeight: '50vh' }}>
      <Container maxWidth='md'>
        <Typography variant='h4' sx={{ fontWeight: 'Bold'}} gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
            <Typography>picture?</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
