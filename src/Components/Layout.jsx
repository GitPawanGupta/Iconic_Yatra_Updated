// src/Components/Layout.jsx
import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';



const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />

      <Box
        component="main"
        sx={{
          width: '100%',                 //  full width
          py: { xs: 2, sm: 2 },          // vertical padding (top & bottom)
          px: { xs: 2, sm: 2 },          // horizontal padding (left & right)
          minHeight: '100%',
          backgroundColor: '',
        }}
      >
        {children}
      </Box>

      <Footer />
    </>
  );
};

export default Layout;
