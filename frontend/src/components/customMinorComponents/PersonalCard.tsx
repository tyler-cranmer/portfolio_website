import { Box, Typography, Paper, IconButton } from '@mui/material';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import theme from '../../theme';

type Props = {};

function PersonalCard({}: Props) {
  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.grey[800],
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5em',
        borderRadius: '20px',
      }}>
      <Box
        borderRadius={'20px'}
        overflow={'hidden'}
        sx={{ height: '100%', width: '100%', marginBottom: '1em' }}>
        <Image
          alt='profile pic'
          src='/profile_pic.JPG'
          objectFit='cover'
          layout='responsive'
          height={425}
          width={350}
        
        />
      </Box>
      <Box pb={13.5}>
        {/* Name */}
        <Typography
          variant='h5'
          sx={{ fontWeight: 600, marginBottom: '.25rem' }}>
          Tyler Cranmer
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Software Engineer
        </Typography>
        <Typography variant='body2'>
          Have a question or want to work together?
        </Typography>
      </Box>
      <Typography>Connect:</Typography>
      <Box display='flex' justifyContent='space-around' margin='auto'>
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
        <IconButton href='https://twitter.com/tyler_cranmer/'>
          <TwitterIcon
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
    </Paper>
  );
}

export default PersonalCard;
