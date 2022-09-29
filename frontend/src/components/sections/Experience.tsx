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

  return (
    <Box
      id='experience'
      className='background'
      sx={{
        backgroundColor: theme.palette.grey[900],
        // overFlow: 'hidden',
        position: 'relative',
      }}>
      <Box
        pt={{ md: 10 }}
        pb={{ md: 15 }}
        // sx={{ zIndex: 10, position: 'relative' }}
      >
        <Container maxWidth='md'>
          <motion.div
            ref={ref}
            variants={experienceVariant}
            initial='offscreen'
            animate={control}>
            <Box
              mb={2.5}
              pb={2.5}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Typography
                sx={{
                  fontWeight: 'Bold',
                  fontSize: {
                    md: '4.68rem',
                    sm: '3.125rem',
                    xs: '3.125rem',
                  },
                }}>
                My Experience
              </Typography>
            </Box>
          </motion.div>
          <CustomAccordian inView={inView} />
        </Container>
      </Box>
    </Box>
  );
}

export default Experience;
