import React from 'react'
import { Card, CardContent, CardHeader, Typography, IconButton, Box } from '@mui/material'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GitHubIcon from '@mui/icons-material/GitHub';
import theme from '../../theme';

type props = {
  title: string,
  description: string,
  tech: string[],
  // github: string
}

function CustomCard({ title, description, tech }: props) {

  return (
    <Box sx={{ margin: '.5em' }}>
      <Card
        sx={{
          minWidth: 250,
          // maxWidth: 250,
          backgroundColor: theme.palette.grey[800],
          paddingRight: '.5em',
          paddingLeft: '.5em',
          paddingTop: '.75em',
        }}>
        <CardHeader
          sx={{ paddingBottom: '.25em' }}
          avatar={
            <FolderOpenIcon
              fontSize='large'
              sx={{ color: theme.palette.primary.light }}
            />
          }
          action={
            <IconButton>
              <GitHubIcon
                sx={{
                  color: theme.palette.text.primary,
                  '&:hover': {
                    color: theme.palette.grey[500],
                  },
                }}
              />
            </IconButton>
          }>
          <FolderOpenIcon fontSize='small' />
        </CardHeader>
        <CardContent>
          <Typography gutterBottom variant='h5' sx={{ fontWeight: 'Bold' }}>
            {title}
          </Typography>
          <Typography variant='body2' gutterBottom>
            {description}
          </Typography>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              paddingBottom: '.5em',
              paddingTop: '1em',
            }}>
            {tech.map((item) => (
              <Typography variant='caption' pr={1.5}>
                {item}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CustomCard