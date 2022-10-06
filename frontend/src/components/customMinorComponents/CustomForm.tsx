import React, { useEffect, useRef, useState } from 'react';
import { TextField, Button, Paper, Grid } from '@mui/material';
import theme from '../../theme';

type Props = {};
function CustomForm({}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setSubjectError(false);
    setMessageError(false);

    if (name == '') {
      setNameError(true);
    }

    if (email == '') {
      setEmailError(true);
    }

    if (subject == '') {
      setSubjectError(true);
    }

    if (message == '') {
      setSubjectError(true);
    }

    if (name && email && subject && message) {
      console.log(name, email, subject, message);
    }
  };

  return (
    <Paper
      sx={{
        borderRadius: '20px',
        backgroundColor: theme.palette.grey[900],
        padding: '1.5em',
        height: '100%',
        width: '100%',
      }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField
              onChange={(e) => setName(e.target.value)}
              fullWidth
              required
              id='filled-basic'
              variant='outlined'
              label='Name'
              color='secondary'
              error={nameError}
              sx={{ marginRight: '.5em', name: 'name' }}
            />
          </Grid>{' '}
          <Grid xs={12} sm={6} item>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              id='filled-basic'
              label='Email'
              type='email'
              variant='outlined'
              color='secondary'
              error={emailError}
              sx={{ name: 'email' }}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              onChange={(e) => setSubject(e.target.value)}
              fullWidth
              required
              id='filled-basic'
              label='Subject'
              variant='outlined'
              color='secondary'
              error={subjectError}
              sx={{ marginBottom: '.5em', name: 'subject' }}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
              required
              multiline
              minRows={19}
              id='filled-basic'
              label='Message'
              variant='outlined'
              color='secondary'
              error={messageError}
              sx={{ marginBottom: '.5em', name: 'message' }}
            />
          </Grid>
          <Grid xs={12} item>
            <Button type='submit' fullWidth variant='contained' size='large'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default CustomForm;
