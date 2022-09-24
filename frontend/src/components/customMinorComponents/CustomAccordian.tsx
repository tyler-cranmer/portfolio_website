import React, { useState, useEffect } from 'react';
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
  Link,
} from '@mui/material';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaunchIcon from '@mui/icons-material/Launch';
import Image from 'next/image';
import experienceData from '../../utils/tempData';
import { motion, useAnimation, Variants } from 'framer-motion';

type Props = {
  inView: boolean;
};

const expVariant: Variants = {
  offscreen: {
    scale: 1,
    opacity: 0,
    x: -80,
  },
  onscreen: (i: number) => ({
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.6,
    },
  }),
};

function CustomAccordian({ inView }: Props) {
  const control = useAnimation();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  useEffect(() => {
    if (inView) {
      control.start('onscreen');
    }
  }, [control, inView]);

  return (
    <div>
      {experienceData.experience.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={expVariant}
          initial='offscreen'
          animate={control}>
          <Accordion
            square={true}
            expanded={expanded === item.panel}
            onChange={handleChange(item.panel)}
            sx={{
              backgroundColor: 'rgb(33, 43, 54)',
              marginBottom: '.5em',
              borderTopRightRadius: '15px',
              borderTopLeftRadius: '15px',
              borderBottomRightRadius: '15px',
              borderBottomLeftRadius: '15px',
              padding: '.25em',
            }}>
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
                  <LocationOnIcon
                    fontSize='small'
                    sx={{ color: theme.palette.primary.main }}
                  />
                  <Typography ml={1} mr={2}>
                    {item.location}
                  </Typography>
                  <Link
                    href={item.slug}
                    color='inherit'
                    underline='none'
                    sx={{ display: 'flex' }}>
                    <LaunchIcon
                      fontSize='small'
                      sx={{ color: theme.palette.primary.main }}
                    />
                    <Typography className='websiteLink' ml={1} mr={2}>
                      {item.website}
                    </Typography>
                  </Link>
                </Box>
                <Grid container spacing={1}>
                  <Grid item xs={9}>
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
                  <Grid item xs={3}>
                    <Box
                      sx={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '1em',
                      }}>
                      <Image
                        alt={item.alt}
                        src={item.logo}
                        width='255'
                        height='125'
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </div>
  );
}

export default CustomAccordian;
