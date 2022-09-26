import React from 'react'
import { motion } from "framer-motion";
import { Container, Box, Typography } from '@mui/material';
type Props = {}

function BackgroundAnimation({}: Props) {
    return (
      <div className='container'>
        <div id='circle' className='circle' />
        <div id='circle' className='circle2' />
        <div id='circle' className='circle3' />
        <div id='circle' className='circle4' />
        <div id='circle' className='circle5' />
      </div>
    );
}

export default BackgroundAnimation