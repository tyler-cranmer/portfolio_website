import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../../theme';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

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

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'rgb(33, 43, 54)',
        display: 'flex',
        height: 224,
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
          sx={{ fontSize: '.75rem', padding: '.5em' }}
        />
        <Tab
          label='Item Two'
          {...a11yProps(1)}
          sx={{ fontSize: '.75rem', padding: '.5em' }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant='subtitle1'>
          Software Engineer @ Index Coop
        </Typography>
        <Typography variant='caption'> May 2018 - Present</Typography>
          {/* <ul>
            <li>
              <Typography variant='body2'>
                Automated the collection, recording and calculations of
                community monthly contributions for the Finance group.
              </Typography>
            </li>
            <li>
              <Typography variant='body2'>
                Created technical documentation on Solidity, Web3.js and
                Hardhat.
              </Typography>
            </li>
            <li>
              <Typography variant='body2'>
                Contributed to the creation of the engineering on-boarding
                process for new developers.
              </Typography>
            </li>
            <li>s
              <Typography variant='body2'>
                Helped develop the Engineering Bronze Owl Quest for new Solidity
                Developers.
              </Typography>
            </li>
            <li>
              <Typography variant='body2'>
                Created technical documentation about Solidity for on boarding
                new engineers.
              </Typography>
            </li>
          </ul> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
