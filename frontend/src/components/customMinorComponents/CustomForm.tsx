import React, { useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import theme from '../../theme';


type Props = {};
function CustomForm({}: Props) {
  return (
    <Box mt={5} sx={{ display: 'block', maxWidth: '30em' }}>
      <Box display={'flex'} sx={{ marginBottom: '.5em' }}>
        <TextField
          fullWidth
          id='filled-basic'
          variant='filled'
          label='Name'
          sx={{ marginRight: '.5em' }}
        />
        <TextField fullWidth id='filled-basic' label='Email' variant='filled' />
      </Box>
      <TextField
        fullWidth
        id='filled-basic'
        label='Subject'
        variant='filled'
        sx={{ marginBottom: '.5em' }}
      />
      <TextField
        fullWidth
        multiline
        rows={4}
        id='filled-basic'
        label='Message'
        variant='filled'
        sx={{ marginBottom: '.5em' }}
      />
      <Button fullWidth variant='contained' size='large'>
        Submit
      </Button>
    </Box>
  );
}

export default CustomForm;
