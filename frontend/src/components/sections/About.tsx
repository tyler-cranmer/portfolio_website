import React, { useEffect } from 'react';
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
                // md: 'repeat(4, 1fr)',
                md: 'repeat(3, minmax(0, 1fr))',
                // grid-template-columns: repeat(3, minmax(0, 1fr));
              },
              gap: 1,
              gridTemplateRows: 'auto',
              gridTemplateAreas: {
                // xs: `"header" "pic" "stack"`,
                // sm: `"header" "pic" "stack"`,
                md: ` "stack stack pic" "stack stack pic" `,
              },
            }}>
            <Box sx={{ gridArea: 'stack', marginTop: { xs: 2, md: 'none' } }}>
              <Stack spacing={{ md: 1, sm: 1, xs: 1 }}>
                <motion.div
                  ref={ref}
                  variants={aboutVariant}
                  initial='offscreen'
                  animate={control}>
                  <Typography
                    color={theme.palette.grey[600]}
                    sx={{
                      // fontWeight: 'Bold',
                      fontSize: {
                        md: '1.68rem',
                        sm: '3.125rem',
                        xs: '3.125rem',
                      },
                    }}>
                    ABOUT
                  </Typography>
                </motion.div>
                <Typography
                 
                  sx={{
                    fontWeight: 600,
                   variant:{md: 'h2', sm: 'h1'}
                  }}>
                  Who I am
                </Typography>
                <motion.div
                  variants={aboutVariant}
                  initial='offscreen'
                  animate={controlP1}>
                  <Typography
                    sx={{
                      fontSize: {
                        md: '1.125rem',
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
                        md: '1.125rem',
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
                        md: '1.125rem',
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
                <Paper
                  variant='elevation'
                  elevation={24}
                  sx={{
                    backgroundColor: theme.palette.grey[800],
                    padding: '1em',
                    borderRadius: '15px',
                  }}>
                  <Box
                    overflow={'hidden'}
                    borderRadius={'15px'}
                    position='relative'
                    height='30em'
                    width='100%'
                    margin='auto'
                    display='flex'
                    justifyContent={'center'}
                    alignItems='center'>
                    <Image
                      alt='index logo'
                      src='/paralta.jpeg'
                      layout='fill'
                      objectFit='cover'
                      priority
                    />
                  </Box>
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



{/* <Box
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
</Box>; */}