import { useEffect } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import theme from '../../theme';
import Image from 'next/image';
import { Stack } from '@mui/system';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutVariant } from '../../utils/amimationVariants';

function About() {
  const control = useAnimation();
  const controlP1 = useAnimation();
  const controlP2 = useAnimation();
  const controlP3 = useAnimation();
  const controlP4 = useAnimation();
  const controlPic = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('onscreen');
      controlP1.start('onscreenP1');
      controlP2.start('onscreenP2');
      controlP3.start('onscreenP3');
      controlP4.start('onscreenP4');
      controlPic.start('onscreenPic');
    }
  }, [control, inView]);

  return (
    <Box
      id='about'
      sx={{
        backgroundColor: theme.palette.grey[900],
        position: 'relative',
        borderTop: '.5px solid #949494',
        // height: { md: '80vh' },
      }}>
      <Box pt={10} pb={{ xs: 8, sm: 10, md: 15 }}>
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                md: 'repeat(3, minmax(0, 1fr))',
              },
              gap: 1,
              gridTemplateRows: 'auto',
              gridTemplateAreas: {
                xs: `"stack" "pic"`,
                sm: `"stack stack" "pic pic" `,
                md: ` "stack stack pic "`,
              },
            }}>
            <Box
              sx={{
                gridArea: 'stack',
                paddingRight: { xs: 2 },
                marginBottom: { xs: 2, md: 'none' },
              }}>
              <Stack spacing={{ xs: 1 }}>
                <Box>
                  <motion.div
                    ref={ref}
                    variants={aboutVariant}
                    initial='offscreen'
                    animate={control}>
                    <Typography
                      color={theme.palette.text.secondary}
                      sx={{
                        letterSpacing: '.1em',
                        lineHeight: 2,
                        fontSize: {
                          xs: '1.55rem',
                        },
                      }}>
                      ABOUT
                    </Typography>
                  </motion.div>
                  <motion.div
                    ref={ref}
                    variants={aboutVariant}
                    initial='offscreen'
                    animate={controlP1}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: {
                          md: '2.5rem',
                          sm: '3.125rem',
                          xs: '3rem',
                        },
                      }}>
                      Who I am
                    </Typography>
                  </motion.div>
                </Box>
                <motion.div
                  variants={aboutVariant}
                  initial='offscreen'
                  animate={controlP2}>
                  <Typography
                    sx={{
                      fontSize: {
                        md: '1.125rem',
                        sm: '.9rem',
                      },
                    }}
                    gutterBottom>
                    Hi, my name is Tyler Cranmer and some of you might know me
                    as TeeWhy. I am a software engineer building applications
                    typically on MacBook Pro from Denver, Colorado. I’m not your
                    typically engineer and my journey to become one wasn’t a
                    straight linear line.
                  </Typography>
                </motion.div>
                <motion.div
                  variants={aboutVariant}
                  initial='offscreen'
                  animate={controlP3}>
                  <Typography
                    sx={{
                      fontSize: {
                        md: '1.125rem',
                        sm: '.9rem',
                      },
                    }}
                    gutterBottom>
                    My story starts after completing my first degree in exercise
                    science and deciding to abort my pursuit of a career in
                    physical therapy, knowing I wanted something different in
                    life. I had developed a yearning to learn more about
                    software development and not knowing what languages to start
                    with, I bought a book on C-programming to following along
                    with one of Harvard’s famous free CS50 online courses. I
                    remember painfully getting through that class and
                    questioning all my life choices and if programming was even
                    for me, as most people learning C can agree on.
                  </Typography>
                </motion.div>
                <motion.div
                  variants={aboutVariant}
                  initial='offscreen'
                  animate={controlP4}>
                  <Typography
                    sx={{
                      fontSize: {
                        md: '1.125rem',
                        sm: '.9rem',
                      },
                    }}
                    gutterBottom>
                    Right around that same time I started working as a technical
                    recruiter and my software development journey took a back
                    seat for the next 3 years. The life of a recruiter was fun,
                    and I really enjoyed placing engineers at different clients,
                    but something was still missing. It was at that point I
                    decided to take the leap of faith and enroll back in school
                    to start taking computer science courses once again. Fast
                    forward a few years and surviving a pandemic I was able to
                    finish my degree in Applied Computer Science at the
                    University of Colorado, Boulder. Now, I spend my time
                    building full stack web applications and creating different
                    machine learning models to solve data analytic problems.
                  </Typography>
                </motion.div>
              </Stack>
            </Box>
            <Box
              display='flex'
              justifyContent='center'
              alignItems={'center'}
              sx={{
                gridArea: 'pic',
                margin: { xs: '0 auto' },
              }}>
              <motion.div
                variants={aboutVariant}
                initial='offscreenPic'
                animate={controlPic}>
                <Paper
                  variant='elevation'
                  elevation={24}
                  sx={{
                    backgroundColor: theme.palette.grey[800],
                    padding: '1em',
                    borderRadius: '20px',
                    height: '100%',
                    width: {
                      md: '100%',
                      sm: '100%',
                    },
                  }}>
                  <Image
                    alt='index logo'
                    src='/paralta.jpeg'
                    layout='intrinsic'
                    width={475.8}
                    height={594.5}
                    priority
                    className='profilepic'
                  />
                </Paper>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
