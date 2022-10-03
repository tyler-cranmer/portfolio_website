import React, { useEffect } from 'react';
import { Box, TextField, Button, Paper } from '@mui/material';
import theme from '../../theme';


type Props = {};
function CustomForm({}: Props) {
  return (
    <Paper
      sx={{
        borderRadius: '15px',
        backgroundColor: theme.palette.grey[900],
        padding: '1.5em',
        height: '100%',
        width: '100%',
      }}>
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
        rows={20}
        id='filled-basic'
        label='Message'
        variant='filled'
        sx={{ marginBottom: '.5em', rows:{md:15} }}
      />
      <Button fullWidth variant='contained' size='large'>
        Submit
      </Button>
    </Paper>
  );
}

export default CustomForm;
