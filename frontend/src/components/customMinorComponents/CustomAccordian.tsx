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
import { AnimationControls, motion, useAnimation } from 'framer-motion';
import { accordianVariant } from '../../utils/amimationVariants';
import { ExperienceData } from '../../../types';
import { useAxios } from '../../hooks/useAxios';

type Props = {
  inView: boolean;
};

function CustomAccordian({ inView }: Props) {
  const control: AnimationControls = useAnimation();
  const [expanded, setExpanded] = useState<string | false>(false);
  const [loading, data, error, request] = useAxios<ExperienceData>({
    method: 'GET',
    url: 'http://127.0.0.1:8000/api/experience/',
  });

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
      {data.map((item, index) => (
        <motion.div
          className='space'
          key={index}
          custom={index}
          variants={accordianVariant}
          initial='offscreen'
          animate={control}>
          <Accordion
            square={true}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              backgroundColor: theme.palette.grey[800],
              borderTopRightRadius: '20px',
              borderTopLeftRadius: '20px',
              borderBottomRightRadius: '20px',
              borderBottomLeftRadius: '20px',
              padding: '.25em',
            }}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
              }
              aria-controls={`panel${index} content`}
              id={`panel${index} header`}>
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
                  <Grid item xs={12} sm={9}>
                    <List dense>
                      {item.bullets.map((item, index) => (
                        <ListItem sx={{ paddingLeft: 0 }} key={index}>
                          <ListItemIcon sx={{ minWidth: '1.75em' }}>
                            <ArrowRightOutlinedIcon
                              fontSize='small'
                              sx={{ color: theme.palette.primary.main }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            sx={{ fontSize: '.25rem' }}
                            primary={item.bullet}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={0} sm={3}>
                    <Box
                      sx={{
                        height: '8em',
                        width: '8em',
                        margin: 'auto',
                        position: 'relative',
                        display: {
                          xs: 'none',
                          sm: 'flex',
                        },
                      }}>
                      <Image
                        alt={item.alt}
                        src={item.logo}
                        layout='fill'
                        objectFit='contain'
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
