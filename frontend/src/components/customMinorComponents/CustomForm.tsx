import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Grid,
  Snackbar,
  Alert,
  AlertColor,
} from '@mui/material';
import theme from '../../theme';

import axios from 'axios';

type Props = {};
function CustomForm({}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [openSack, setOpenSnack] = useState(false);
  const [responseMessage, SetResponseMessage] = useState('');
  const [status, setStatus] = useState<AlertColor | undefined>('success');

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  // const sendRequest = () => {
  //   setOpenSnack(false);
  //   SetResponseMessage('');
  //   axios
  //     .post('http://127.0.0.1:8000/contact/', {
  //       name: name,
  //       email: email,
  //       subject: subject,
  //       message: message,
  //     })
  //     .then((response) => {
  //       if (response.status == 201) {
  //         setName('');
  //         setEmail('');
  //         setSubject('');
  //         setMessage('');
  //         setStatus('success');
  //         SetResponseMessage('Message was delivered');
  //         setOpenSnack(true);
  //       } else if (response.status == 400) {
  //         setStatus('error');
  //         SetResponseMessage('Error, message was not delivered');
  //         setOpenSnack(true);
  //       } else {
  //         console.log(response.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setStatus('error');
  //       SetResponseMessage('Error, message was not delivered');
  //       setOpenSnack(true);
  //     });
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (name && email && subject && message) {
      setOpenSnack(false);
      SetResponseMessage('');
      axios
        .post('http://127.0.0.1:8000/contact/', {
          name: name,
          email: email,
          subject: subject,
          message: message,
        })
        .then((response) => {
          if (response.status == 201) {
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setStatus('success');
            SetResponseMessage('Message was delivered');
            setOpenSnack(true);
          } else if (response.status == 400) {
            setStatus('error');
            SetResponseMessage('Error, message was not delivered');
            setOpenSnack(true);
          } else {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
          setStatus('error');
          SetResponseMessage('Error, message was not delivered');
          setOpenSnack(true);
        });
    }
  };

  return (
    <>
      <Paper
        sx={{
          borderRadius: '20px',
          backgroundColor: theme.palette.grey[800],
          padding: '1.5em',
          height: '100%',
          width: '100%',
          position: 'relative',
        }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setName(e.target.value)}
                fullWidth
                required
                variant='outlined'
                label='Name'
                color='secondary'
                type='input'
                value={name}
                sx={{ marginRight: '.5em' }}
              />
            </Grid>{' '}
            <Grid xs={12} sm={6} item>
              <TextField
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setEmail(e.target.value)}
                fullWidth
                required
                label='Email'
                type='email'
                variant='outlined'
                color='secondary'
                value={email}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setSubject(e.target.value)}
                fullWidth
                required
                label='Subject'
                variant='outlined'
                color='secondary'
                value={subject}
                type='input'
                sx={{ marginBottom: '.5em' }}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setMessage(e.target.value)}
                fullWidth
                required
                multiline
                rows={18.5}
                label='Message'
                variant='outlined'
                color='secondary'
                type='input'
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
      <Snackbar open={openSack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status} sx={{ wdith: '100%' }}>
          {responseMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default CustomForm;
