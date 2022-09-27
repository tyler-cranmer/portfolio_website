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
import { FaCogs, FaCubes, FaCode } from 'react-icons/fa';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Data from '../../utils/tempData';

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

const titleVariants: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    y: -80,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
};

const cardVariants: Variants = {
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
      delay: 1.4,
    },
  },
};

const cardVariants2: Variants = {
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
      delay: 1.2,
    },
  },
};

type Props = {};

function Expertise({}: Props) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('onscreen');
    }
  }, [control, inView]);

  return (
    <Box
      id='expertise'
      sx={{
        backgroundColor: theme.palette.grey[900],
        // overFlow: 'hidden',
        position: 'relative',
      }}>
      <Box pt={{ md: 8 }} pb={{ md: 15 }}>
        <Container>
          <motion.div
            ref={ref}
            variants={titleVariants}
            initial='offscreen'
            animate={control}>
            <Box
              mb={{ xs: 8, sm: 8, md: 22 }}
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography
                sx={{
                  fontWeight: 'Bold',
                  fontSize: '75px',
                }}>
                Expertise
              </Typography>
              <Box
                sx={{
                  backgroundColor: 'white',
                  width: '125px',
                  height: '3.5px',
                }}
              />
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
                variants={cardVariants}
                initial='offscreen'
                animate={control}>
                <Paper
                  elevation={6}
                  sx={{
                    padding: '70px 40px 0px',
                    maxWidth: '380px',
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
                variants={cardVariants2}
                initial='offscreen'
                animate={control}>
                <Paper
                  elevation={24}
                  sx={{
                    padding: '70px 40px 0px',
                    maxWidth: '380px',
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
                variants={cardVariants}
                initial='offscreen'
                animate={control}>
                <Paper
                  elevation={6}
                  sx={{
                    padding: '70px 40px 0px',
                    maxWidth: '380px',
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
                    Experienced in full stack development: Python, Typescript,
                    Next.js, Django, Flask
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
          <Container maxWidth='md'>
            <Box
              mt={10}
              mb={10}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Typography variant='h5' sx={{ color: 'text.secondary' }}>
                Skills
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={2}
                columns={{ xs: 4, sm: 8, md: 12 }}>
                {Data.icons
                  ?.slice(0, Data.icons.length / 2)
                  .map((icon, index) => (
                    <Grid
                      item
                      xs={1}
                      sm={2}
                      md={3}
                      key={index}
                      sx={{ alignItem: 'center' }}>
                      <Skill
                        name={icon.name}
                        url={icon.url}
                        skill={icon.level}
                        directionLeft
                      />
                    </Grid>
                  ))}

                {Data.icons
                  ?.slice(Data.icons.length / 2, Data.icons.length)
                  .map((icon, index) => (
                    <Grid
                      item
                      xs={1}
                      sm={2}
                      md={3}
                      key={index}
                      sx={{ alignItem: 'center' }}>
                      <Skill
                        name={icon.name}
                        url={icon.url}
                        skill={icon.level}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Container>
        </Container>
      </Box>
    </Box>
  );
}

export default Expertise;
