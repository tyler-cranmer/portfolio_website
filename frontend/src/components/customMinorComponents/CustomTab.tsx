import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../../theme';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import CodeIcon from '@mui/icons-material/Code';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
} from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ pt: 0.5, pl: 3, pr: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function CustomTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const WorkBullets = [
    'Automated the collection, recording and calculations of community monthly contributions for the Finance group.',
    'Created technical documentation on Solidity, Web3.js and Hardhat.',
    'Contributed to the creation of the engineering on-boarding process for new developers.',
    'Helped develop the Engineering Bronze Owl training program for new Solidity developers.',
    'Created technical documentation about Solidity for on boarding new engineers.',
  ];

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'rgb(33, 43, 54)',
          display: 'flex',
          paddingBottom: '.5em',
        }}>
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: 'divider' }}>
          <Tab
            label='Index Coop'
            {...a11yProps(0)}
            sx={{
              fontSize: '.7rem',
              padding: '.5em .75em .5em .5em',
            }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box pl={1}>
            <Box display={'flex'}>
              <Typography variant='subtitle1'>Software Engineer</Typography>
              <Typography
                variant='subtitle1'
                sx={{ paddingLeft: '.25em', color: theme.palette.primary.main }}>
                @ Index Coop
              </Typography>
            </Box>
            <Typography variant='caption'> May 2021 - June 2022</Typography>
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={12}>
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
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </>
  );
}
