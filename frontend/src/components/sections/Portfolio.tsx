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
import { StyledTabs, StyledTab } from '../customMinorComponents/StyledTabs';


function Portfolio() {
  const [tabValue, setTabValue] = useState('All');

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[900],
        minHeight: '50vh',
      }}>
      <Box pt={20}>
        <Container maxWidth='lg'>
          <Box>
            <Typography
              sx={{ fontWeight: 'Bold', fontSize: '76px' }}
              gutterBottom>
              My Work
            </Typography>
          </Box>
          <Grid container>
            {/* Tabs */}
            <Grid item xs={12}>
              <StyledTabs
                value={tabValue}
                onChange={(event: React.SyntheticEvent, newValue) =>
                  setTabValue(newValue)
                }>
                <Typography mr={1} sx={{ alignSelf: 'center' }}>
                  Filter by:
                </Typography>
                <StyledTab label='Aggregate' value='Aggregate' />
                {[
                  ...new Set(portfolioData.projects2.map((item) => item.tag)),
                ].map((tag, index) => (
                  <StyledTab key={index} label={tag} value={tag} />
                ))}
              </StyledTabs>
            </Grid>
            {/* projects */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {portfolioData.projects2.map((project, index) => (
                  <>
                    {tabValue == project.tag || tabValue == 'Aggregate' ? (
                      <Grid item xs={2} sm={4} md={4}>
                        <Grow in timeout={1000}>
                          <Card
                            key={index}
                            sx={{ backgroundColor: theme.palette.grey[800] }}>
                            <CardActionArea>
                              <CardMedia
                                component='img'
                                height='260'
                                image={project.image}
                                alt={project.title}
                              />
                              <CardContent>
                                <Typography
                                  sx={{ fontWeight: 'bold' }}
                                  variant='h6'
                                  gutterBottom>
                                  {project.title}
                                </Typography>
                                <Typography variant='body1' gutterBottom>
                                  {project.description}
                                </Typography>
                                {project.tech.map((item, index) => (
                                  <Typography
                                    key={index}
                                    variant='caption'
                                    pr={1.5}
                                    pt={2}>
                                    {item}
                                  </Typography>
                                ))}
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
    </Box>
  );
}

export default Portfolio;