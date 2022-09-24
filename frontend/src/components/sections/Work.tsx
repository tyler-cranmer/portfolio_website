import React, { useEffect, useState } from 'react';
import {
  Box,
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
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const workVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: 80,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
    },
  },
};

type Props = {};

function Work({}: Props) {
  const [tabValue, setTabValue] = useState('Aggregate');
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('onscreen');
    }
  }, [control, inView]);

  return (
    <Box
      id='work'
      sx={{
        backgroundColor: theme.palette.grey[900],
      }}>
      <Box pt={{ md: 10 }} pb={{ md: 10 }}>
        <Container maxWidth='lg'>
          <motion.div
            ref={ref}
            variants={workVariant}
            initial='offscreen'
            animate={control}>
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
                  <StyledTab label='Filter by:' value='none' disabled={true} />
                  <StyledTab
                    label='Aggregate'
                    value='Aggregate'
                    disabled={false}
                  />
                  {[
                    ...new Set(portfolioData.projects2.map((item) => item.tag)),
                  ].map((tag, index) => (
                    <StyledTab
                      key={index}
                      label={tag}
                      value={tag}
                      disabled={false}
                    />
                  ))}
                </StyledTabs>
              </Grid>
              {/* projects */}
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {portfolioData.projects2.map((project, i) => (
                    <React.Fragment key={i}>
                      {tabValue == project.tag || tabValue == 'Aggregate' ? (
                        <Grid item xs={2} sm={4} md={4}>
                          <Grow in timeout={1000}>
                            <Card
                              key={i}
                              sx={{
                                backgroundColor: theme.palette.grey[800],
                                borderRadius: '20px',
                              }}>
                              <CardActionArea>
                                <Box sx={{ overflow: 'hidden' }}>
                                  <motion.div
                                    whileHover={{
                                      scale: 1.1,
                                      transition: {
                                        duration: 0.2,
                                      },
                                    }}>
                                    <CardMedia
                                      component='img'
                                      height='260'
                                      image={project.image}
                                      alt={project.title}
                                    />
                                  </motion.div>
                                </Box>
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
                    </React.Fragment>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}

export default Work;
