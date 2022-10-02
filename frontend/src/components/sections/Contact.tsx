import { Box, Container, Typography, Paper, IconButton } from '@mui/material';
import CustomForm from '../customMinorComponents/CustomForm';
import theme from '../../theme';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { contactVariant } from '../../utils/amimationVariants';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
        overFlow: 'hidden',
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
              letterSpacing={'.1em'}
              variant='h5'
              color={theme.palette.text.secondary}
              gutterBottom>
              Contact
            </Typography>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: {
                  md: '2.5rem',
                  sm: '3.125rem',
                  xs: '3.125rem',
                },
              }}
              gutterBottom>
              Get In Touch
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
              gap: 8,
              gridTemplateRows: 'auto',
              gridTemplateAreas: {
                // xs: `"header" "pic" "stack"`,
                // sm: `"header" "pic" "stack"`,
                md: ` "contact contact form form form " `,
              },
            }}>
            <Paper
              sx={{
                gridArea: 'contact',
                backgroundColor: theme.palette.grey[900],
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5em',
                borderRadius: '15px',
                minHeight: '35em',
              }}>
              <Box
                position={'relative'}
                display='flex'
                width='100%'
                height='100%'
                minHeight='15em'
                sx={{
                  borderRadius: '15px',
                  marginBottom: '1em',
                }}>
                <div>
                  <Image
                    alt='index logo'
                    src='/paralta.jpeg'
                    layout='fill'
                    objectFit='cover'
                    priority
                  />
                </div>
              </Box>
              <Box pb={15}>
                {/* Name */}
                <Typography gutterBottom variant='h5' sx={{ fontWeight: 'bold' }}>
                  Tyler Cranmer
                </Typography>
                <Typography>Software Developer</Typography>
                <Typography>
                  Have a question or want to work together?
                </Typography>
              </Box>
              <Typography>Connect with me</Typography>
              <Box display='flex' justifyContent='space-around'>
                <IconButton>
                  <LinkedInIcon fontSize='large' />
                </IconButton>
                <IconButton>
                  <GitHubIcon fontSize='large' />
                </IconButton>

                <IconButton>
                  <EmailOutlinedIcon fontSize='large' />
                </IconButton>
                <IconButton>
                  <ArticleOutlinedIcon fontSize='large' />
                </IconButton>
              </Box>
            </Paper>
            <Paper
              sx={{
                gridArea: 'form',
                padding: '1em',
                borderRadius: '15px',
              }}>
              <CustomForm />
            </Paper>
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
