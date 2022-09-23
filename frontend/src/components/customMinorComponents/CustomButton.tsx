import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

type props = {
  href: string;
  text: string;

}

const CustomButton = ({ href, text}: props) => {
  const theme = useTheme();

  return (
    <Button

      color='primary'
      href={href}
      variant='text'
      sx={{
        color: theme.palette.text.primary,
        mx: 0.25,
        // marginLeft: '15px',
        '&:active': {
          color: theme.palette.primary.main,
        },
        '&:hover': {
          color: theme.palette.grey[500],
        },
      }}>
      {text}
    </Button>
  );
};

export default CustomButton;
