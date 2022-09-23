import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
  Box,
  Container,
  SvgIcon,
  SvgIconProps,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import theme from '../../theme';
import { FaCogs, FaCubes, FaCode } from 'react-icons/fa';


function CogsIcon(props: SvgIconProps) {
  return (
    <IconContext.Provider value={{ className: 'cog-icons' }}>
      <SvgIcon {...props}>
        <FaCogs className='cog-icons' />
      </SvgIcon>
    </IconContext.Provider>
  );
}

function CodeIcon(props: SvgIconProps) {
    return (
      <IconContext.Provider value={{ className: 'dev-icons' }}>
        <SvgIcon {...props}>
          <FaCode className='dev-icons' />
        </SvgIcon>
      </IconContext.Provider>
    );
}

function BlockIcon(props: SvgIconProps) {
  return (
    <IconContext.Provider value={{ className: 'block-icons' }}>
      <SvgIcon {...props}>
        <FaCubes className='block-icons' />
      </SvgIcon>
    </IconContext.Provider>
  );
}

type Props = {};

function Expertise({}: Props) {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[900],
        minHeight: '80vh',
        paddingBottom: '7.5em',
      }}>
      <Container>
        <Box mb={22} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            sx={{
              fontWeight: 'Bold',
              fontSize: '75px',
            }}>
            My Expertise
          </Typography>
        </Box>
        <Grid container columns={{ xs: 3, md: 12 }} columnSpacing={10}>
          <Grid item xs={4}>
            <Paper
              elevation={6}
              sx={{
                padding: '70px 40px 0px',
                maxWidth: '380px',
                minHeight: '440px',
                backgroundColor: 'rgb(33, 43, 54)',
                textAlign: 'center',
                borderRadius: '20px',
                margin: 'auto',
              }}>
              <span className='spanIcon block-avmrvc'>
                <BlockIcon
                  sx={{
                    height: '46px',
                    width: '46px',
                  }}
                />
              </span>
              <Typography mb={2} variant='h6'>
                Blockchain
              </Typography>
              <Typography variant='body1'>
                Experienced web3 developer: Solidity, Typescript, Ether.js,
                hardhat, graph protocol.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={24}
              sx={{
                padding: '70px 40px 0px',
                maxWidth: '380px',
                minHeight: '440px',
                backgroundColor: 'rgb(33, 43, 54)',
                textAlign: 'center',
                borderRadius: '20px',
                margin: 'auto',
              }}
              className='cardCenter css-avmrvc'>
              <span className='spanIcon code-avmrvc'>
                <CodeIcon
                  sx={{
                    height: '46px',
                    width: '46px',
                  }}
                />
              </span>
              <Typography mb={2} variant='h6'>
                Software Development
              </Typography>
              <Typography variant='body1'>
                Experienced in full stack development: Python, Typescript,
                Next.js, Django, Flask
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={6}
              sx={{
                padding: '70px 40px 0px',
                maxWidth: '380px',
                minHeight: '440px',
                backgroundColor: 'rgb(33, 43, 54)',
                textAlign: 'center',
                borderRadius: '20px',
                margin: 'auto',
              }}>
              <span className='spanIcon cogs-avmrvc'>
                <CogsIcon
                  sx={{
                    height: '46px',
                    width: '46px',
                  }}
                />
              </span>
              <Typography mb={2} variant='h6'>
                Machine Learning
              </Typography>
              <Typography variant='body1'>
                Experienced in full stack development: Python, Typescript,
                Next.js, Django, Flask
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Expertise;
