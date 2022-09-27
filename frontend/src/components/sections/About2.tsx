import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import theme from '../../theme';
import Skill from '../customMinorComponents/Skill';
type Props = {};

function About2({}: Props) {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[900],
        overFlow: 'hidden',
        position: 'relative',
      }}>
      <Box>
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Typography variant='h2' sx={{ fontWeight: 'Bold' }} gutterBottom>
              About
            </Typography>
            <Container maxWidth='md'>
              <Typography gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                minus cumque pariatur veritatis sit sequi ipsa ipsam, ratione
                itaque ad, sint velit praesentium voluptas, ex minima voluptate
                provident in animi?
              </Typography>
            </Container>
            <Container maxWidth='sm'>
              <Box mt={3} sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={2}
                  columns={{ xs: 4, sm: 8, md: 12 }}>
                  {Array.from(Array(4)).map((_, index) => (
                    <Grid
                      item
                      xs={1}
                      sm={2}
                      md={3}
                      key={index}
                      sx={{ alignItem: 'center' }}>
                      {/* <Skill /> */}
                    </Grid>
                  ))}
                  {Array.from(Array(4)).map((_, index) => (
                    <Grid
                      item
                      xs={1}
                      sm={2}
                      md={3}
                      key={index}
                      sx={{ alignItem: 'center' }}>
                      {/* <Skill directionLeft /> */}
                    </Grid>
                  ))}
                  {Array.from(Array(4)).map((_, index) => (
                    <Grid
                      item
                      xs={1}
                      sm={2}
                      md={3}
                      key={index}
                      sx={{ alignItem: 'center' }}>
                      {/* <Skill  /> */}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default About2;
