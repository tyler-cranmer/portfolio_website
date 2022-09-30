import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import theme from '../../theme';
import Image from 'next/image';
import { Stack } from '@mui/system';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { aboutVariant } from '../../utils/amimationVariants';

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
        height: '90vh',
      }}>
      <Box pt={8}>
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 1,
              gridTemplateRows: 'auto',
              gridTemplateAreas: {
                xs: `"header" "pic" "stack"`,
                sm: `"header" "pic" "stack"`,
                md: ` "header pic" "stack pic" `,
              },
            }}>
            <Box
              sx={{
                gridArea: 'header',
                display: 'flex',
                justifyContent: { xs: 'center', md: 'left' },
              }}>
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
                      sm: '3.125rem',
                      xs: '3.125rem',
                    },
                  }}>
                  About Me
                </Typography>
              </motion.div>
            </Box>
            <Box sx={{ gridArea: 'stack', marginTop: { xs: 2, md: 'none' } }}>
              <Stack
                spacing={{ md: 3, sm: 1, xs: 1 }}
                sx={{ paddingRight: { md: 1.5, sm: 0, xs: 0 } }}>
                <motion.div
                  variants={aboutVariant}
                  initial='offscreen'
                  animate={controlP1}>
                  <Typography
                    sx={{
                      fontSize: {
                        md: '1rem',
                        sm: '.9rem',
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
                        sm: '.9rem',
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
                        sm: '.9rem',
                      },
                    }}
                    gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error magnam sint similique?
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
                  marginRight={'1em'}
                  position='relative'
                  borderRadius={'15px'}
                  overflow={'hidden'}
                  margin={'auto'}
                  sx={{
                    marginTop: { xs: '1.75em', md: '1.55em' },
                    height: {
                      xs: '15rem',
                      sm: '20rem',
                      md: '28rem',
                    },
                    width: {
                      xs: '15rem',
                      sm: '20rem',
                      md: '25rem',
                    },
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
    </Box>
  );
}

export default About;
