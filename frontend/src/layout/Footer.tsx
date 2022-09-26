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
          minHeight: '20vh',
          backgroundColor: theme.palette.grey[900],
          overFlow: 'hidden',
          position: 'relative',
        }}>
        <Box
          component='footer'
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            display: 'flex',
          }}>
          <Container maxWidth='sm'>
            <Copyright />
            <Typography variant='body2'>built by Tyler Cranmer</Typography>
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
