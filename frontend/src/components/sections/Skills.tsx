import { useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { TechData } from '../../../types';
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
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  titleVariant,
  cardVariant,
  cardVariant2,
} from '../../utils/amimationVariants';
import { useAxios } from '../../hooks/useAxios';
import textData from '../../utils/textData';

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
    <IconContext.Provider value={{ color: '#1878fe' }}>
      <SvgIcon {...props}>
        <FaCubes />
      </SvgIcon>
    </IconContext.Provider>
  );
}

type Props = {};

function Skills({}: Props) {
  const [loading, data, error, request] = useAxios<TechData>({
    method: 'GET',
    url: 'https://portfolio-backend-teewhy.herokuapp.com/api/technologies/',
  });

  const control = useAnimation();
  const control2 = useAnimation();
  const [ref, inView] = useInView();
  const [sRef, sInView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('onscreen');
    }
  }, [control, inView]);

  useEffect(() => {
    if (sInView) {
      control2.start('onscreenTech');
    }
  }, [control2, sInView]);


  return (
    <Box
      id='skills'
      sx={{
        backgroundColor: theme.palette.grey[900],
        position: 'relative',
        overflowX: 'hidden',
        borderTop: '.5px solid #949494',
      }}>
      <Box pt={{ xs: 6, sm: 6, md: 8 }} pb={{ xs: 8, sm: 10, md: 15 }}>
        <Container maxWidth='lg'>
          <Box
            mb={{ xs: 8, sm: 8, md: 20 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <motion.div
              variants={titleVariant}
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
                SKILLS
              </Typography>
            </motion.div>
            <motion.div
              variants={titleVariant}
              initial='offscreenSubtitle'
              animate={control}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    md: '2.5rem',
                    sm: '3.125rem',
                    xs: '3rem',
                  },
                }}>
                What I can do
              </Typography>
            </motion.div>
          </Box>

          <Grid
            ref={ref}
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
                    maxWidth: { xs: '355px', sm: '380px' },
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
                    {textData.Skill.cardOneName}
                  </Typography>
                  <Typography variant='body1'>
                    {textData.Skill.cardOneText}
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
                    maxWidth: { xs: '355px', sm: '380px' },
                    minHeight: '440px',
                    backgroundColor: 'rgb(33, 43, 54)',
                    textAlign: 'center',
                    borderRadius: '20px',
                    margin: 'auto',
                    marginTop: { xs: 0, sm: 0, md: -10 },
                    boxShadow: 'rgb(0 0 0 / 40%) -40px 40px 80px 0px',
                  }}>
                  <span className='spanIcon code-avmrvc'>
                    <CodeIcon
                      sx={{
                        height: '46px',
                        width: '46px',
                      }}
                    />
                  </span>
                  <Typography mb={2} variant='h6'>
                    {textData.Skill.cardTwoName}
                  </Typography>
                  <Typography variant='body1'>
                    {textData.Skill.cardTwoText}
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
                    maxWidth: { xs: '355px', sm: '380px' },
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
                    {textData.Skill.cardThreeName}
                  </Typography>
                  <Typography variant='body1'>
                    {textData.Skill.cardThreeText}
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
              ref={sRef}
              mt={10}
              mb={{ xs: 5, md: 10 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <motion.div
                variants={titleVariant}
                initial='offscreenSubtitle'
                animate={control2}>
                <Typography
                  letterSpacing={'.1em'}
                  variant='h5'
                  color={theme.palette.text.secondary}>
                  Technologies
                </Typography>
              </motion.div>
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
              {data?.slice(0, data.length / 2).map((item) => (
                <Skill
                  key={item.id}
                  name={item.name}
                  url={item.icon}
                  directionLeft
                  inView={sInView}
                />
              ))}

              {data?.slice(data.length / 2, data.length).map((item) => (
                <Skill
                  key={item.id}
                  name={item.name}
                  url={item.icon}
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
