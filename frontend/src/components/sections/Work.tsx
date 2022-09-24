
import { Box, Container, Typography } from "@mui/material";
import theme from "../../theme";
import CustomAccordian from "../customMinorComponents/CustomAccordian";
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

const expVariant: Variants = {
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
      delay: 0.9,
      duration: 2,
    },
  },

};

type Props = {};
function Work({ }: Props) {
  
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('onscreen');

    }
  }, [control, inView])

  return (
    <Box
      id='work'
      sx={{
        backgroundColor: theme.palette.grey[900],
        minHeight: '80vh',
      }}>
      <Container maxWidth='md'>
        <motion.div
          ref={ref}
          variants={expVariant}
          initial='offscreen'
          animate={control}>
          <Box
            pt={12.5}
            mb={2.5}
            pb={2.5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Typography variant='h2' sx={{ fontWeight: 'Bold' }}>
              My Experience
            </Typography>
          </Box>

          <CustomAccordian />
        </motion.div>
      </Container>
    </Box>
  );
}

export default Work;
