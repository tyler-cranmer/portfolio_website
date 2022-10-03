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
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { workVariant } from '../../utils/amimationVariants';

type Props = {};

function Projects({}: Props) {
  const [tabValue, setTabValue] = useState('Aggregate');
  const control = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('onscreen');
      control2.start('onscreen2');
      control3.start('onscreenCards');
    }
  }, [control, control2, inView]);

  const subtitle: string = "What I've Built";
  return (
    <Box
      id='projects'
      sx={{
        backgroundColor: theme.palette.grey[900],
        overFlow: 'hidden',
        position: 'relative',
      }}>
      <Box pt={{ md: 8 }} pb={{ md: 10 }}>
        <Container maxWidth='lg'>
          <motion.div
            ref={ref}
            variants={workVariant}
            initial='offscreen'
            animate={control}>
            <Box>
              <Typography
                sx={{
                  letterSpacing: '.1em',
                  lineHeight: 2,
                  fontSize: {
                    xs: '1.55rem',
                  },
                }}
                color={theme.palette.text.secondary}
                gutterBottom>
                PROJECTS
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    md: '2.5rem',
                    xs: '3.125rem',
                  },
                }}
                gutterBottom>
                {subtitle}
              </Typography>
            </Box>
          </motion.div>
          <motion.div
            variants={workVariant}
            initial='offscreen2'
            animate={control2}>
            <Grid container>
              {/* Tabs */}

              <Grid
                item
                xs={12}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <Typography sx={{ paddingBottom: '1em', minWidth: '70px' }}>
                  Filter by:
                </Typography>
                <StyledTabs
                  value={tabValue}
                  onChange={(event: React.SyntheticEvent, newValue) =>
                    setTabValue(newValue)
                  }>
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
                  {portfolioData.projects2.map((project, index) => (
                    <React.Fragment key={index}>
                      {tabValue == project.tag || tabValue == 'Aggregate' ? (
                        <Grid item xs={12} sm={6} md={4}>
                          <Grow appear={true} in timeout={1000}>
                            <Card
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
                                <CardContent
                                  sx={{
                                    backgroundColor: theme.palette.grey[800],
                                  }}>
                                  <Typography
                                    sx={{ fontWeight: 600 }}
                                    variant='h6'
                                    >
                                    {project.title}
                                  </Typography>
                                  <Typography variant='body1' gutterBottom>
                                    {project.description}
                                  </Typography>
                                  {project.tech.map((item, index) => (
                                    <Typography
                                      color={theme.palette.primary.main}
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

export default Projects;
