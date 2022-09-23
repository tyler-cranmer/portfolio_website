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
import experienceData from '../../utils/tempData';

type Props = {};

function CustomAccordian({}: Props) {

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {experienceData.experience.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === item.panel}
          onChange={handleChange(item.panel)}
          sx={{ backgroundColor: 'rgb(33, 43, 54)', marginBottom: '.5em' }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
            }
            aria-controls={item.panel + 'content'}
            id={item.panel + 'header'}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                paddingRight: '2em',
              }}>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: '.25em',
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                  }}>
                  @ {item.company}
                </Typography>
              </Box>
              <Typography sx={{ color: 'text.secondary' }}>
                {item.duration}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Box sx={{ display: 'flex' }}>
                <LocationOnIcon fontSize='small' />
                <Typography ml={1} mr={2}>
                  {item.location}
                </Typography>
                <LaunchIcon fontSize='small' />
                <Typography ml={1} mr={2}>
                  {item.location}
                </Typography>
              </Box>
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <List dense>
                    {item.bullets.map((bullet, index) => (
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
                    alt={item.alt}
                    src={item.logo}
                    width={'100%'}
                    height={'100%'}
                  />
                </Grid>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default CustomAccordian;
