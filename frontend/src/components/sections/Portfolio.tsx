import { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grow,
} from '@mui/material';
import theme from '../../theme';
import { Container } from '@mui/system';
import portfolioData from '../../utils/tempData';

function Portfolio() {
  const [tabValue, setTabValue] = useState('All');

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[900], minHeight: '50vh' }}>
      <Container maxWidth='md'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography sx={{ fontWeight: 'Bold' }} variant='h4' gutterBottom>
            My Work
          </Typography>
        </Box>
        <Grid container>
          {/* {Title} */}
          <Grid item></Grid>
          {/* Tabs */}
          <Grid item xs={12}>
            <Tabs
              value={tabValue}
              indicatorColor='primary'
              onChange={(event, newValue) => setTabValue(newValue)}>
              <Tab label='All' value='All' />

              {[
                ...new Set(portfolioData.projects2.map((item) => item.tag)),
              ].map((tag) => (
                <Tab label={tag} value={tag} />
              ))}
            </Tabs>
          </Grid>
          {/* projects */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {portfolioData.projects2.map((project) => (
                <>
                  {tabValue == project.tag || tabValue == 'All' ? (
                    <Grid item xs={2} sm={4} md={4}>
                      <Grow in timeout={1000}>
                        <Card sx={{ backgroundColor: theme.palette.grey[800] }}>
                          <CardActionArea>
                            <CardMedia
                              component='img'
                              height='194'
                              image={project.image}
                              alt={project.title}
                            />
                            <CardContent>
                              <Typography gutterBottom>
                                {project.title}
                              </Typography>
                              <Typography variant='caption' >
                                {project.description}
                              </Typography>
                              {/* {project.tech.map((item) => (
                                <Typography variant='caption' pr={1.5}>
                                  {item}
                                </Typography>
                              ))} */}
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grow>
                    </Grid>
                  ) : null}
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Portfolio;
