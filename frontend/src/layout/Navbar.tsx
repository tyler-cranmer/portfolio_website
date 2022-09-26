import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Link as Link2,
  Button,
} from '@mui/material';
import theme from '../theme';
import CustomButton from '../components/customMinorComponents/CustomButton';
import { Container } from '@mui/system';
import { Link } from 'react-scroll/modules';


function Navbar() {
  const MenuItems = [
    { Name: 'About', Link: 'about' },
    { Name: 'Expertise', Link: 'expertise' },
    { Name: 'Work', Link: 'work' },
    { Name: 'Experience', Link: 'experience' },
    { Name: 'Contact', Link: 'hero' },
  ];

  const name: string = 'TeeWhy.'
  const underScore: string = '_'

  return (
    <>
      <AppBar sx={{ background: theme.palette.grey[900] }} position='sticky'>
        <Toolbar sx={{ height: '6em' }}>
          <Link2 href='/' sx={{ textDecoration: 'none' }}>
            <IconButton
              size='large'
              edge='start'
              aria-label='logo'
              sx={{ color: theme.palette.primary.light }}>
              <Box mx={5} sx={{ display: { md: 'flex', xs: 'none' } }}>
                <Typography
                  variant='h4'
                  sx={{
                    flexGrow: 1,
                    color: theme.palette.text.primary,
                  }}>
                  {name}
                </Typography>
                <Typography
                  variant='h4'
                  sx={{
                    flexGrow: 1,
                    // color: theme.palette.text.primary,
                  }}>
                  {underScore}
                </Typography>
              </Box>
            </IconButton>
          </Link2>
          <Container maxWidth='sm'>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                alignItems: 'center',
                display: { lg: 'flex' },
              }}>
              {MenuItems.map((item, index) => (
                <div key={index}>
                  <Link activeClass='active' to={item.Link} spy={true} smooth={true} offset={0} duration={1000}>
                    <CustomButton  text={item.Name} />
                  </Link>
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