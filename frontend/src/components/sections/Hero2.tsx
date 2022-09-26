import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Container, Box, Typography } from '@mui/material';
import theme from '../../theme';
import BackgroundAnimation from "../customMinorComponents/BackgroundAnimation"



type Props = {};

function Hero2({}: Props) {
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

  const i_build: string = 'I build';
  return (
      <Box sx={{ backgroundColor: theme.palette.grey[900] }}>
          <BackgroundAnimation/>
      <Container>
        <Box>
          <Typography
            sx={{ fontWeight: 500, color: theme.palette.text.primary }}
            variant='h2'
            gutterBottom>
            {i_build} {text}
            <Cursor cursorStyle='_' />
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero2;
