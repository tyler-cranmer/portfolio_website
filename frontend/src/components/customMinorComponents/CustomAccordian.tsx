import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '../../theme';
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaunchIcon from '@mui/icons-material/Launch';
import Image from 'next/image';

type Props = {};

function CustomAccordian({}: Props) {
  const WorkBullets = [
    'Automated the collection, recording and calculations of community monthly contributions for the Finance group.',
    'Created technical documentation on Solidity, Ethers.js and Hardhat.',
    'Contributed to the creation of the engineering on-boarding process and training for new Solidity developers.',
    'Built Index Coop Subgraph using graph QL and the graph protocol',
  ];

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{ backgroundColor: 'rgb(33, 43, 54)', marginBottom: '.5em' }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
          }
          aria-controls='panel1bh-content'
          id='panel1bh-header'>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '2em',
            }}>
            <Box sx={{ display: 'flex' }}>
              <Typography>Software Enginer</Typography>
              <Typography
                sx={{
                  paddingLeft: '.25em',
                  color: theme.palette.primary.main,
                }}>
                @ Index Coop
              </Typography>
            </Box>
            <Typography sx={{ color: 'text.secondary' }}>
              May 2021 - June 2022
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box sx={{ display: 'flex' }}>
              <LocationOnIcon fontSize='small' />
              <Typography ml={1} mr={2}>
                Remote
              </Typography>
              <LaunchIcon fontSize='small' />
              <Typography ml={1} mr={2}>
                indexcoop.com
              </Typography>
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <List dense>
                  {WorkBullets.map((bullet, index) => (
                    <ListItem sx={{ paddingLeft: 0 }} key={index}>
                      <ListItemIcon sx={{ minWidth: '1.75em' }}>
                        <ArrowRightOutlinedIcon
                          fontSize='small'
                          sx={{ color: theme.palette.primary.main }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{ fontSize: '.25rem' }}
                        primary={bullet}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={2}>
                <Image
                  alt='index logo'
                  src='/index-token.png'
                  width={'100%'}
                  height={'100%'}
                />
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{ backgroundColor: 'rgb(33, 43, 54)' }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
          }
          aria-controls='panel1bh-content'
          id='panel1bh-header'>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '2em',
            }}>
            <Box sx={{ display: 'flex' }}>
              <Typography>Applied Computer Science</Typography>
              <Typography
                sx={{
                  paddingLeft: '.25em',
                  color: theme.palette.primary.main,
                }}>
                @ University of Colorado, Boulder
              </Typography>
            </Box>
            <Typography sx={{ color: 'text.secondary' }}>
              Sept 2018 - August 2022
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box sx={{ display: 'flex' }}>
              <LocationOnIcon fontSize='small' />
              <Typography ml={1} mr={2}>
                Boulder, Colorado
              </Typography>
              <LaunchIcon fontSize='small' />
              <Typography ml={1} mr={2}>
                colorado.edu
              </Typography>
            </Box>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <List dense>
                  {WorkBullets.map((bullet, index) => (
                    <ListItem sx={{ paddingLeft: 0 }} key={index}>
                      <ListItemIcon sx={{ minWidth: '1.75em' }}>
                        <ArrowRightOutlinedIcon
                          fontSize='small'
                          sx={{ color: theme.palette.primary.main }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        sx={{ fontSize: '.25rem' }}
                        primary={bullet}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={2}>
                <Image
                  alt='CU Boulder logo'
                  src='/ralphie.png'
                  width='100%'
                  height='100%'
                />
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CustomAccordian;
