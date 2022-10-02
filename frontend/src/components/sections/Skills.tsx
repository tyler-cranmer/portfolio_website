import React, { useRef, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import {
  Box,
  Container,
  SvgIcon,
  SvgIconProps,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import theme from '../../theme';
import Skill from '../customMinorComponents/Skill';
import Skill2 from '../customMinorComponents/Skill2';
import { FaCogs, FaCubes, FaCode } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Data from '../../utils/tempData';
import {
  titleVariant,
  cardVariant,
  cardVariant2,
} from '../../utils/amimationVariants';

function CogsIcon(props: SvgIconProps) {
  return (
    <IconContext.Provider value={{ className: 'cog-icons' }}>
      <SvgIcon {...props}>
        <FaCogs className='cog-icons' />
      </SvgIcon>
    </IconContext.Provider>
  );
}

function CodeIcon(props: SvgIconProps) {
  return (
    <IconContext.Provider value={{ className: 'dev-icons' }}>
      <SvgIcon {...props}>
        <FaCode className='dev-icons' />
      </SvgIcon>
    </IconContext.Provider>
  );
}

function BlockIcon(props: SvgIconProps) {
  return (
    <IconContext.Provider value={{ className: 'block-icons' }}>
      <SvgIcon {...props}>
        <FaCubes className='block-icons' />
      </SvgIcon>
    </IconContext.Provider>
  );
}

type Props = {};

function Skills({}: Props) {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [sRef, sInView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('onscreen');
    }
  }, [control, inView]);

  return (
    <Box
      id='skills'
      sx={{
        backgroundColor: theme.palette.grey[900],
        overFlow: 'hidden',
        position: 'relative',
      }}>
      <Box pt={{ xs: 6, sm: 6, md: 8 }} pb={{ xs: 8, sm: 10, md: 15 }}>
        <Container maxWidth='lg'>
          <motion.div
            variants={titleVariant}
            initial='offscreen'
            animate={control}>
            <Box
              mb={{ xs: 8, sm: 8, md: 20 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Typography
                letterSpacing={'.1em'}
                color={theme.palette.text.secondary}
                variant='h5'
                gutterBottom>
                Skills
              </Typography>
              <Typography
                ref={ref}
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    md: '2.5rem',
                    sm: '3.125rem',
                    xs: '3.125rem',
                  },
                }}>
                What I can do
              </Typography>
            </Box>
          </motion.div>
          <Grid
            container
            columns={{ xs: 4, sm: 4, md: 12 }}
            columnSpacing={{ sm: 10, md: 10 }}
            spacing={{ xs: 5, sm: 5, md: 0 }}>
            {/* Blockchain card */}
            <Grid item xs={4}>
              <motion.div
                variants={cardVariant}
                initial='offscreen'
                animate={control}>
                <Paper
                  elevation={6}
                  sx={{
                    padding: '70px 40px 0px',
                    maxWidth: { xs: '315px', sm: '380px' },
                    minHeight: '440px',
                    backgroundColor: 'rgb(33, 43, 54)',
                    textAlign: 'center',
                    borderRadius: '20px',
                    margin: 'auto',
                  }}>
                  <span className='spanIcon block-avmrvc'>
                    <BlockIcon
                      sx={{
                        height: '46px',
                        width: '46px',
                      }}
                    />
                  </span>
                  <Typography mb={2} variant='h6'>
                    Blockchain
                  </Typography>
                  <Typography variant='body1'>
                    Experienced web3 developer: Solidity, Typescript, Ether.js,
                    hardhat, graph protocol.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            {/* Software Development Card */}
            <Grid item xs={4}>
              <motion.div
                variants={cardVariant2}
                initial='offscreen'
                animate={control}>
                <Paper
                  elevation={24}
                  sx={{
                    padding: '70px 40px 0px',
                    maxWidth: { xs: '315px', sm: '380px' },
                    minHeight: '440px',
                    backgroundColor: 'rgb(33, 43, 54)',
                    textAlign: 'center',
                    borderRadius: '20px',
                    margin: 'auto',
                    marginTop: { xs: 0, sm: 0, md: -10 },
                  }}
                  className='cardCenter css-avmrvc'>
                  <span className='spanIcon code-avmrvc'>
                    <CodeIcon
                      sx={{
                        height: '46px',
                        width: '46px',
                      }}
                    />
                  </span>
                  <Typography mb={2} variant='h6'>
                    Software Development
                  </Typography>
                  <Typography variant='body1'>
                    Experienced in full stack development: Python, Typescript,
                    Next.js, Django, Flask
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            {/* Machine Learning card */}
            <Grid item xs={4}>
              <motion.div
                variants={cardVariant}
                initial='offscreen'
                animate={control}>
                <Paper
                  elevation={6}
                  sx={{
                    padding: '70px 40px 0px',
                    maxWidth: { xs: '315px', sm: '380px' },
                    minHeight: '440px',
                    backgroundColor: 'rgb(33, 43, 54)',
                    textAlign: 'center',
                    borderRadius: '20px',
                    margin: 'auto',
                  }}>
                  <span className='spanIcon cogs-avmrvc'>
                    <CogsIcon
                      sx={{
                        height: '46px',
                        width: '46px',
                      }}
                    />
                  </span>
                  <Typography mb={2} variant='h6'>
                    Machine Learning
                  </Typography>
                  <Typography variant='body1'>
                    Proficient with Data Science and Machine Learning Models
                    using Python, Pandas, Numpy Sklearn, NLTK, Keras, Tensorflow
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
          <Container
            sx={{
              maxWidth: {
                xs: 'sm',
                sm: 'sm',
                md: 'lg',
              },
            }}>
            <Box
              mt={10}
              mb={{ xs: 5, md: 10 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Typography
                letterSpacing={'.1em'}
                ref={sRef}
                variant='h5'
                color={theme.palette.text.secondary}>
                Technologies
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(3, minmax(0, 1fr))',
                  sm: 'repeat(4, minmax(0, 1fr))',
                  md: 'repeat(4, minmax(0, 1fr))',
                },
                columnGap: '.5rem',
                rowGap: '1.25rem',
              }}>
              {Data.icons
                ?.slice(0, Data.icons.length / 2)
                .map((icon, index) => (
                  <Skill2
                    key={index}
                    name={icon.name}
                    url={icon.url}
                    skill={icon.level}
                    directionLeft
                    inView={sInView}
                  />
                ))}
              {Data.icons
                ?.slice(Data.icons.length / 2, Data.icons.length)
                .map((icon, index) => (
                  <Skill2
                    key={index}
                    name={icon.name}
                    url={icon.url}
                    skill={icon.level}
                    inView={sInView}
                  />
                ))}
            </Box>
          </Container>
        </Container>
      </Box>
    </Box>
  );
}

export default Skills;
