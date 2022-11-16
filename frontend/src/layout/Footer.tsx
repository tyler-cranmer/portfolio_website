import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

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
          minHeight: '15vh',
          backgroundColor: theme.palette.grey[900],
          overFlow: 'hidden',
          position: 'relative',
          borderTop: '.5px solid #949494',
        }}>
        <Box
          component='footer'
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            display: 'flex',
          }}>
          <Container>
            <Copyright />
            <Typography variant='body2'>Built by Tyler Cranmer with Next.js & Django</Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
