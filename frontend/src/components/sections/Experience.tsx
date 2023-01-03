import { Box, Container, Typography } from '@mui/material';
import theme from '../../theme';
import CustomAccordian from '../customMinorComponents/CustomAccordian';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { experienceVariant } from '../../utils/amimationVariants';


type Props = {};

function Experience({}: Props) {
  const control = useAnimation();
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      control.start('onscreen');
    }
  }, [control, inView]);

  const subtitle: string = "Where I've Been";
  return (
    <Box
      id='experience'
      className='background'
      sx={{
        backgroundColor: theme.palette.grey[900],
        position: 'relative',
        borderTop: '.5px solid #949494',
      }}>
      <Box pt={{ xs: 6, sm: 6, md: 8 }} pb={{ xs: 15, sm: 25, md: 45 }}>
        <Container maxWidth='md'>
          <Box
            mb={2.5}
            pb={2.5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <motion.div
              ref={ref}
              variants={experienceVariant}
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
                EXPERIENCE
              </Typography>
            </motion.div>
            <motion.div
              ref={ref}
              variants={experienceVariant}
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
                {subtitle}
              </Typography>
            </motion.div>
          </Box>
          <CustomAccordian inView={inView} />
        </Container>
      </Box>
    </Box>
  );
}

export default Experience;
