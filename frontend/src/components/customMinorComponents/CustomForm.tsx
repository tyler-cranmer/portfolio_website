import React, { useEffect, useRef, useState } from 'react';
import { TextField, Button, Paper, Grid } from '@mui/material';
import theme from '../../theme';
import { FormData } from '../../../types';
import axios from 'axios';
import { useAxios } from '../../hooks/useAxios';
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
  const [postError, setPostError] = useState('');
  const [loading, data, error, request] = useAxios<FormData>(
    {
      method: 'POST',
      url: 'http://127.0.0.1:8000/contact/',
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    },
    false
  );

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
      request();
      console.log(`data: ${data}\n error: ${error}`);
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
              variant='outlined'
              label='Name'
              color='secondary'
              error={nameError}
              value={name}
              sx={{ marginRight: '.5em' }}
            />
          </Grid>{' '}
          <Grid xs={12} sm={6} item>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              label='Email'
              type='email'
              variant='outlined'
              color='secondary'
              error={emailError}
              value={email}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              onChange={(e) => setSubject(e.target.value)}
              fullWidth
              required
              label='Subject'
              variant='outlined'
              color='secondary'
              error={subjectError}
              value={subject}
              sx={{ marginBottom: '.5em' }}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
              required
              multiline
              minRows={19}
              label='Message'
              variant='outlined'
              color='secondary'
              error={messageError}
              value={message}
              sx={{ marginBottom: '.5em' }}
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
