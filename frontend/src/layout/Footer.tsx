import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'></Link>{' '}
      {new Date().getFullYear()}
      {'.'} All Rights Reserved
    </Typography>
  );
}

function Footer() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: theme.palette.grey[800],
        }}>
        <CssBaseline />
        <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
          <Typography variant='h2' component='h1' gutterBottom>
            Sticky footer
          </Typography>
          <Typography variant='h5' component='h2' gutterBottom>
            {'Pin a footer to the bottom of the viewport.'}
            {'The footer will move as the main element of the page grows.'}
          </Typography>
          <Typography variant='body1'>Sticky footer placeholder.</Typography>
        </Container>
        <Box
          component='footer'
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: theme.palette.grey[900],
            display: 'flex',
          }}>
          <Container maxWidth='sm'>
            <Copyright />
            <Typography variant='body2'>made by Tyler Cranmer</Typography>
          </Container>
          <Container>
            <IconButton>
              <GitHubIcon
                fontSize='large'
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': {
                    color: theme.palette.grey[500],
                  },
                }}
              />
            </IconButton>
            <IconButton>
              <LinkedInIcon
                fontSize='large'
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': {
                    color: theme.palette.grey[500],
                  },
                }}
              />
            </IconButton>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
