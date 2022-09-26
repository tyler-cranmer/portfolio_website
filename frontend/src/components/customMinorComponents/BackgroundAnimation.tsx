import React from 'react'
import { motion } from "framer-motion";
import { Container, Box, Typography } from '@mui/material';
type Props = {}

function BackgroundAnimation({}: Props) {
  return (
      <Box>
          <div id='circle' className='circle'/>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
    </Box>
  )
}

export default BackgroundAnimation