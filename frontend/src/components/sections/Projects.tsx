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
  Chip
} from '@mui/material';
import theme from '../../theme';
import { Container } from '@mui/system';
import { StyledTabs, StyledTab } from '../customMinorComponents/StyledTabs';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { workVariant } from '../../utils/amimationVariants';
import Data from '../../utils/data';

type Props = {};

function Projects({}: Props) {
  const [tabValue, setTabValue] = useState('Aggregate');
  const control = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      control.start('onscreen');
      control2.start('onscreen2');
      control3.start('onscreen3');
      control4.start('onscreenCards');
    }
  }, [control, control2, control3, inView]);

  const subtitle: string = "What I've Built";

  // let categories: string[][] = [];
  // Data.projects.map((item) => {
  //   let tagNames = item.tags.map((tag) => tag.name);
  //   categories.push(tagNames);
  // });

  return (
    <Box
      id='projects'
      sx={{
        backgroundColor: theme.palette.grey[900],
        overFlow: 'hidden',
        position: 'relative',
        borderTop: '.5px solid #949494',
      }}>
      <Box pt={{ xs: 6, sm: 6, md: 8 }} pb={{ xs: 8, sm: 10, md: 15 }}>
        <Container maxWidth='lg'>
          <Box>
            <motion.div
              ref={ref}
              variants={workVariant}
              initial='offscreen'
              animate={control}>
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
            </motion.div>
            <motion.div
              ref={ref}
              variants={workVariant}
              initial='offscreen'
              animate={control2}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    md: '2.5rem',
                    sm: '3.125rem',
                    xs: '3rem',
                  },
                }}
                gutterBottom>
                {subtitle}
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            variants={workVariant}
            initial='offscreen2'
            animate={control3}>
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
                  {[...new Set(Data.projects.tag)].map((name, index) => (
                    <StyledTab
                      key={index}
                      label={name}
                      value={name}
                      disabled={false}
                    />
                  ))}
                </StyledTabs>
              </Grid>

              {/* projects */}
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {data.map((project, index) => (
                    <React.Fragment key={index}>
                      {tabValue == project.tags[0].name ||
                      (project.tags[1] && tabValue == project.tags[1].name) ||
                      tabValue == 'Aggregate' ? (
                        <Grid item xs={12} sm={6} md={4}>
                          <Grow appear={true} in timeout={1000}>
                            <a href={project.link}>
                              <Card
                                sx={{
                                  backgroundColor: theme.palette.grey[800],
                                  borderRadius: { xs: '20px' },
                                }}>
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
                                      alt={project.name}
                                    />
                                  </motion.div>
                                </Box>
                                <CardContent
                                  sx={{
                                    backgroundColor: theme.palette.grey[800],
                                  }}>
                                  <Typography
                                    sx={{ fontWeight: 700 }}
                                    variant='subtitle1'>
                                    {project.name}
                                  </Typography>
                                  <Typography
                                    variant='body2'
                                    color={theme.palette.text.secondary}
                                    gutterBottom>
                                    {project.description}
                                  </Typography>
                                  {project.technologies.map((item, index) => (
                                    <Chip
                                      key={index}
                                      label={item.name}
                                      variant='outlined'
                                      color='primary'
                                      size='small'
                                      sx={{ m: 0.5 }}
                                    />
                                  ))}
                                </CardContent>
                              </Card>
                            </a>
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
