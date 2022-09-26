import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../../theme';
import { Stack, Container } from '@mui/material';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import textData from '../../utils/tempData';


function Hero() {
  const [text, count] = useTypewriter({
    words: [
      'things for the internet.',
      'web3 Dapps.',
      'smart contracts.',
      'machine learning models.',
    ],
    // loop: 3,
    loop: true,
    // onLoopDone: () => console.log(`loop completed after 3 runs.`),
    delaySpeed: 2000,
  });

  const i_build: string = 'I build'

  return (
    <Box
      id='hero'
      sx={{
        backgroundColor: theme.palette.grey[700],
        height: '100vh',
      }}>
      <Box
        sx={{
          top: 0,
          left: 0,
          height: '100vh',
          width: '100%',
          display: 'flex',
          position: 'fixed',
        }}>
        <Container maxWidth='lg'>
          <Box
            sx={{
              // minHeight: '100vh',
              display: 'flex',
              alignitems: 'flex-start',
              flexDirection: 'column',
              // padding: '0px',
              // justifyContent: 'center',
            }}>
            <Stack
              mt={28}
              direction='column'
              justifyContent='flex-start'
              alignItems='flex-start'
              spacing={2}
              maxWidth='md'>
              <Box>
                <Typography
                  variant='h5'
                  gutterBottom
                  sx={{ color: theme.palette.primary.light }}>
                  Hi, my name is
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ fontWeight: 500, color: theme.palette.text.primary }}
                  variant='h1'>
                  Tyler Cranmer.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ fontWeight: 500, color: theme.palette.text.primary }}
                  variant='h2'
                  gutterBottom>
                  {i_build} {text}
                  <Cursor cursorStyle='_' />
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant='body1'
                  sx={{ color: theme.palette.text.primary }}
                  gutterBottom>
                  {textData.Hero.text}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Hero;
