import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import theme from '../../theme';
import Image from 'next/image';
import { Stack } from '@mui/system';
import {
  motion,
  MotionConfigContext,
  useAnimation,
  Variants,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const aboutVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: 80,
  },
  offscreenPic: {
    scale: 0,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
    },
  },
  onscreenP1: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
  onscreenP2: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.1,
    },
  },
  onscreenP3: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
    },
  },
  onscreenPic: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.9,
    },
  },
};

function About() {
  const control = useAnimation();
  const controlP1 = useAnimation();
  const controlP2 = useAnimation();
  const controlP3 = useAnimation();
  const controlPic = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('onscreen');
      controlP1.start('onscreenP1');
      controlP2.start('onscreenP2');
      controlP3.start('onscreenP3');
      controlPic.start('onscreenPic');
    }
  }, [control, inView]);

  return (
    <Box
      id='about'
      sx={{
        backgroundColor: theme.palette.grey[900],
        overFlow: 'hidden',
        position: 'relative',
      }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: ` "header pic" "stack pic" `,
          }}>
          <Box
            sx={{ gridArea: 'header', display: 'flex', flexDirection: 'flex' }}>
            <motion.div
              ref={ref}
              variants={aboutVariant}
              initial='offscreen'
              animate={control}>
              <Typography
                sx={{
                  fontWeight: 'Bold',
                  fontSize: {
                    md: '4.68rem',
                    sm: '3rem',
                    xs: '2.5rem',
                  },
                }}>
                About Me
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ gridArea: 'stack' }}>
            <Stack spacing={3} pr={4}>
              <motion.div
                variants={aboutVariant}
                initial='offscreen'
                animate={controlP1}>
                <Typography
                  sx={{
                    fontSize: {
                      md: '1rem',
                      sm: '.75rem',
                      xs: '.75rem',
                    },
                  }}
                  gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat alias quisquam unde sed vitae, error cumque eveniet
                  qui, atque deleniti repellendus voluptates maiores, delectus
                  soluta! Quis dolor inventore quibusdam alias?
                </Typography>
              </motion.div>
              <motion.div
                variants={aboutVariant}
                initial='offscreen'
                animate={controlP2}>
                <Typography
                  sx={{
                    fontSize: {
                      md: '1rem',
                      sm: '.75rem',
                      xs: '.75rem',
                    },
                  }}
                  gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat alias quisquam unde sed vitae, error cumque eveniet
                  qui, atque deleniti repellendus voluptates maiores, delectus
                  soluta! Quis dolor inventore quibusdam alias?
                </Typography>
              </motion.div>
              <motion.div
                variants={aboutVariant}
                initial='offscreen'
                animate={controlP3}>
                <Typography
                  sx={{
                    fontSize: {
                      md: '1rem',
                      sm: '.75rem',
                      xs: '.75rem',
                    },
                  }}
                  gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  magnam sint similique?
                </Typography>
              </motion.div>
            </Stack>
          </Box>
          <Box sx={{ gridArea: 'pic' }}>
            <motion.div
              variants={aboutVariant}
              initial='offscreenPic'
              animate={controlPic}>
              <Box
                sx={{
                  marginRight: '1em',
                  position: 'relative',
                  height: {
                    xs: '15rem',
                    sm: '20rem',
                    md: '25rem',
                  },
                  width: {
                    xs: '15rem',
                    sm: '20rem',
                    md: '25rem',
                  },
                  borderRadius: '15px',
                  overflow: 'hidden',
                  marginTop: '1.75em',
                }}>
                <Image
                  alt='index logo'
                  src='/paralta.jpeg'
                  layout='fill'
                  objectFit='cover'
                  priority
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;


    // <Box
    //   id='about'
    //   sx={{
    //     backgroundColor: theme.palette.grey[900],
    //     overFlow: 'hidden',
    //     position: 'relative',
    //   }}>
    //   <Box pt={{ md: 8 }} pb={{ md: 15 }}>
    //     <Container maxWidth='lg'>
    //       <Box
    //         sx={{
    //           display: {
    //             md: 'flex',
    //             sm: 'block'
    //           },
    //         }}>
    //         <Box pr={5}>
              // <Stack spacing={3} pr={4}>
              //   <motion.div
              //     ref={ref}
              //     variants={aboutVariant}
              //     initial='offscreen'
              //     animate={control}>
              //     <Typography
            
              //       sx={{
              //         fontWeight: 'Bold',
              //         fontSize: {
              //           md: '4.68rem',
              //           sm: '3rem',
              //           xs: '2.5rem',
              //         },
              //       }}
              //       gutterBottom>
              //       About Me
              //     </Typography>
              //   </motion.div>
              //   <motion.div
              //     variants={aboutVariant}
              //     initial='offscreen'
              //     animate={controlP1}>
              //     <Typography gutterBottom>
              //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
              //       Placeat alias quisquam unde sed vitae, error cumque eveniet
              //       qui, atque deleniti repellendus voluptates maiores, delectus
              //       soluta! Quis dolor inventore quibusdam alias?
              //     </Typography>
              //   </motion.div>
              //   <motion.div
              //     variants={aboutVariant}
              //     initial='offscreen'
              //     animate={controlP2}>
              //     <Typography gutterBottom>
              //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
              //       Placeat alias quisquam unde sed vitae, error cumque eveniet
              //       qui, atque deleniti repellendus voluptates maiores, delectus
              //       soluta! Quis dolor inventore quibusdam alias?
              //     </Typography>
              //   </motion.div>
              //   <motion.div
              //     variants={aboutVariant}
              //     initial='offscreen'
              //     animate={controlP3}>
              //     <Typography gutterBottom>
              //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
              //       Error magnam sint similique?
              //     </Typography>
              //   </motion.div>
              // </Stack>
    //         </Box>
            // <motion.div
            //   variants={aboutVariant}
            //   initial='offscreenPic'
            //   animate={controlPic}>
            //   <Box
            //     sx={{
            //       marginRight: '1em',
            //       position: 'relative',
            //       height: '25rem',
            //       width: '25rem',
            //       borderRadius: '15px',
            //       overflow: 'hidden',
            //       marginTop: '1.5em'
            //     }}>
            //     <Image
            //       alt='index logo'
            //       src='/paralta.jpeg'
            //       layout='fill'
            //       objectFit='cover'
            //       priority
            //     />
            //   </Box>
            // </motion.div>
    //       </Box>
    //     </Container>
    //   </Box>
    // </Box>