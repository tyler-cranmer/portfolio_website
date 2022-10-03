import React from 'react';
import Button from '@mui/material/Button';
import theme from '../../theme';

type props = {

  text: string;

}

const CustomButton = ({ text }: props) => {
  
  return (
    <Button
      color='primary'
      variant='text'
      disableRipple={true}
  
      sx={{
        color: theme.palette.text.primary,
        mx: 0.25,
        // marginLeft: '15px',
        '&:active': {
          color: theme.palette.text.secondary,
        },
        '&:hover': {
          color: theme.palette.text.secondary,
          background: 'none'
        },
        fontSize: '1em',
        letterSpacing: '.1em',
      }}>
      {text}
    </Button>
  );
};

export default CustomButton;
