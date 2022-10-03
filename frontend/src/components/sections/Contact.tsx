import { Box, Container, Typography } from '@mui/material';
import CustomForm from '../customMinorComponents/CustomForm';
import theme from '../../theme';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { contactVariant } from '../../utils/amimationVariants';
import PersonalCard from '../customMinorComponents/PersonalCard';

type Props = {};

function Contact({}: Props) {
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
      control4.start('onscreenForm');
    }
  }, [control, control2, control3, control4, inView]);
  return (
    <Box
      id='contact'
      sx={{
        backgroundColor: theme.palette.grey[800],
        position: 'relative',
      }}>
      <Box pt={8} pb={10}>
        <Container>
          <motion.div
            ref={ref}
            variants={contactVariant}
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
              }}
              gutterBottom>
              CONTACT
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: '2.5rem',
                  xs: '3.125rem',
                },
                fontWeight: 600,
              }}
              gutterBottom>
              Get In Touch
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                sxs: '1fr',
                sm: 'repeat(3, minmax(0, 1fr))',
                md: 'repeat(3, minmax(0, 1fr))',
              },
              gap: { xs: 8, sm: 2, md: 8 },
              gridTemplateRows: 'auto',
              gridTemplateAreas: {
                xs: `"contact" "form"`,
                sm: ` "contact form form" `,
                md: ` "contact form form" `,
              },
            }}>
            <Box gridArea='contact'>
              <PersonalCard />
            </Box>
            <Box gridArea='form'>
              <CustomForm />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;

// <motion.div
//   variants={contactVariant}
//   initial='offscreenForm'
//   animate={control4}>
//   <CustomForm />
// </motion.div>;

// grid-template-columns: repeat(5, minmax(0, 1fr))
