import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Button,
} from '@mui/material';
import theme from '../theme';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import CustomButton from '../components/customMinorComponents/CustomButton';
import { Container } from '@mui/system';

function Navbar() {
  const MenuItems = [
    { Name: 'Home', Link: '#home' },
    { Name: 'About', Link: '#home' },
    { Name: 'Work', Link: '#home' },
    { Name: 'Projects', Link: '#home' },
    { Name: 'Contact', Link: '#home' },
  ];

  const name: string = 'TeeWhy._'

  return (
    <>
      <AppBar sx={{ background: theme.palette.grey[900] }} position='static'>
        <Toolbar sx={{ minHeight: '80px' }}>
          <Link href='/' sx={{ textDecoration: 'none' }}>
            <IconButton
              size='large'
              edge='start'
              aria-label='logo'
              sx={{ color: theme.palette.primary.light }}>
              <DeveloperModeIcon />
              <Box sx={{ display: { md: 'inline', xs: 'none' } }}>
                <Typography
                  variant='h6'
                  sx={{
                    flexGrow: 1,
                    color: theme.palette.text.primary,
                  }}>
                  {name}
                </Typography>
              </Box>
            </IconButton>
          </Link>
          <Container maxWidth='sm'>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                alignItems: 'center',
                display: { lg: 'flex' },
              }}>
              {MenuItems.map((item, index) => (
                <div key={index}>
                  <CustomButton href={item.Link} text={item.Name} />
                </div>
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

// sx={{ background: theme.palette.grey[900] }}
