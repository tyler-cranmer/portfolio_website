import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../../theme';
import { Stack, Container, IconButton } from '@mui/material';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import textData from '../../utils/tempData';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

  const i_build: string = 'I build';
  const name: string = ' Tyler';
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
          width: '100%',
          display: 'flex',
          position: 'fixed',
        }}>
        <Container maxWidth='lg'>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Stack
              mt={{ xs: 30, sm: 40 }}
              direction='column'
              justifyContent='center'
              alignItems='center'
              spacing={1}>
              <Box display='flex'>
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                    fontSize: {
                      md: '5rem',
                      sm: '4.5rem',
                      xs: '2.75rem',
                    },
                  }}>
                  Hi, I'm
                </Typography>
                <Typography
                  color={theme.palette.primary.main}
                  fontWeight='500'
                  fontSize={{ md: '5rem', sm: '4.5rem', xs: '2.75rem' }}
                  pl={2}>
                  {name}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                    fontSize: {
                      md: '4.5rem',
                      sm: '4.5rem',
                      xs: '2.75rem',
                    },
                  }}>
                  {i_build} {text}
                  <Cursor cursorStyle='_' />
                </Typography>
              </Box>
              <Box
                maxWidth='md'
                display='flex'
                justifyContent='center'
                alignItems={'center'}>
                <Typography
                  sx={{
                    color: theme.palette.text.primary,
                    fontSize: {
                      md: '1rem',
                      sm: '.9rem',
                      xs: '.9rem',
                    },
                  }}
                  gutterBottom>
                  {textData.Hero.text}
                </Typography>
              </Box>
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
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Hero;
