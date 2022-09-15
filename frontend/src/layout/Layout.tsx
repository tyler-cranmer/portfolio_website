import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';


function Layout({ children }) {
    const theme = useTheme();
  return (
    <>
      <Box
        id='page-top'
        sx={{
          backgroundColor: theme.palette.background.default,
          height: '100%',
        }}>
        <Navbar />

          {children}
        
        <Footer />
      </Box>
    </>
  );
}

Layout.propTypes = { children: PropTypes.node };

export default Layout;
