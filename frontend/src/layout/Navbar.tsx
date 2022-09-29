import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
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
    { Name: 'Contact', Link: 'contact' },
  ];

  const name: string = 'TeeWhy.'
  const underScore: string = '_'

  return (
    <>
      <AppBar sx={{ background: theme.palette.grey[900] }} position='sticky'>
        <Toolbar sx={{ height: '6em' }}>
          <Container maxWidth='sm'>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                alignItems: 'center',
                display: { lg: 'flex', sm:'flex', xs:'none' },
              }}>
              {MenuItems.map((item, index) => (
                <div key={index}>
                  <Link activeClass='active' to={item.Link} spy={true} smooth={true} offset={-96} duration={1000}>
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