import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../../theme';
import { Stack, Container, Button } from '@mui/material';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

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
      sx={{
        backgroundImage: `url(https://minimals.cc/assets/overlay.svg)`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
      }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignitems: 'flex-start',
            flexDirection: 'column',
            padding: '0px',
            // justifyContent: 'center',
            margin: '0 auto',
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
                component='h1'
                gutterBottom
                sx={{ color: theme.palette.primary.light }}>
                Hi, my name is
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 500, color: 'white' }} variant='h1'>
                Tyler Cranmer.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontWeight: 500, color: 'white' }}
                variant='h2'
                gutterBottom>
                {i_build} {text}
                <Cursor cursorStyle='_' />
              </Typography>
            </Box>
            <Box>
              <Typography variant='body1' sx={{ color: 'white' }} gutterBottom>
                I'm a software engineer graduate specializing in building web
                and machine learning applications. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Repellendus, nobis eos? Aliquam
                accusamus voluptatem, iure ratione neque, saepe magnam fuga,
                soluta sit illum dignissimos magni iusto rem ab laudantium.
                Ratione.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
