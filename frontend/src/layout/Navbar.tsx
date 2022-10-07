import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import theme from '../theme';
import CustomButton from '../components/customMinorComponents/CustomButton';
import { Container } from '@mui/system';
import { Link } from 'react-scroll/modules';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


type Props = {
  onSidebarOpen: () => void;
};


function Navbar({onSidebarOpen}: Props) {
  const MenuItems = [
    { Name: 'About', Link: 'about' },
    { Name: 'Skills', Link: 'skills' },
    { Name: 'Projects', Link: 'projects' },
    { Name: 'Experience', Link: 'experience' },
    { Name: 'Contact', Link: 'contact' },
  ];

  const name: string = 'TeeWhy.';
  const underScore: string = '_';

  return (
    <>
      <AppBar
        variant='outlined'
        sx={{
          background: 'rgba(22, 28, 36, .7)',
          backdropFilter: 'blur(20px)',
          borderBottom: '.5px solid #949494',
        }}
        position='sticky'>
        <Toolbar sx={{ height: '6em' }}>
          <Container maxWidth='lg'>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              display={{
                sm: 'flex',
                xs: 'none',
              }}
              justifyContent={{
                sm: 'flex-end',
              }}
              alignItems='center'>
              {MenuItems.map((item, index) => (
                <div key={index}>
                  <Link
                    activeClass='active'
                    to={item.Link}
                    spy={true}
                    smooth={true}
                    offset={-96}
                    duration={1000}>
                    <CustomButton text={item.Name} />
                  </Link>
                </div>
              ))}
            </Box>
            <Box
              display={{ xs: 'flex', sm: 'none' }}
              justifyContent={{ xs: 'flex-end' }}>
              <IconButton onClick={() => onSidebarOpen()}>
                <MenuIcon
                  fontSize='large'
                  sx={{ color: theme.palette.text.primary }}
                />
              </IconButton>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
