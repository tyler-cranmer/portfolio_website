import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../../theme';
import { Stack, Container, IconButton } from '@mui/material';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import textData from '../../utils/textData';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-scroll/modules';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      'apps for the internet.',
      'machine learning models.',
      'things for the future.'
    ],
    loop: 3,
    delaySpeed: 2000,
  });

  const i_build: string = 'I build';
  const name: string = ' Tyler';
  return (
    <Box
      id='hero'
      sx={{
        backgroundColor: theme.palette.grey[900],
        height: '100vh',
      }}>
      <Box
        sx={{
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          position: { sm: 'fixed' },
        }}>
        <Container maxWidth='lg'>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Stack
              mt={{ xs: 14, sm: 40 }}
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
                      xs: '2.25rem',
                    },
                  }}>
                  Hi, I'm
                </Typography>
                <Typography
                  color={theme.palette.primary.main}
                  fontWeight='500'
                  fontSize={{ md: '5rem', sm: '4.5rem', xs: '2.25rem' }}
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
                      xs: '2.25rem',
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
                <IconButton href='https://www.linkedin.com/in/georgetylercranmer/'>
                  <LinkedInIcon
                    fontSize='large'
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.text.secondary,
                      },
                    }}
                  />
                </IconButton>
                <IconButton href='https://github.com/tyler-cranmer/'>
                  <GitHubIcon
                    fontSize='large'
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.text.secondary,
                      },
                    }}
                  />
                </IconButton>
                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-96}
                  duration={1000}>
                  <IconButton>
                    <EmailOutlinedIcon
                      fontSize='large'
                      sx={{
                        color: theme.palette.text.primary,
                        '&:hover': {
                          color: theme.palette.text.secondary,
                        },
                      }}
                    />
                  </IconButton>
                </Link>
                <IconButton href='./TC_SE_Resume.pdf'>
                  <ArticleOutlinedIcon
                    fontSize='large'
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.text.secondary,
                      },
                    }}
                  />
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
