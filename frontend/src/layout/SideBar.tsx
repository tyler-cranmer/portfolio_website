import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-scroll/modules';

type Props = {
  open: boolean;
  onClose: () => void;
};

const SideBar = ({ open, onClose }: Props) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Drawer
        anchor='left'
        onClose={() => onClose()}
        open={open}
        variant='temporary'
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 280,
            backgroundColor: theme.palette.grey[900],
          },
        }}>
        <Box sx={{ height: '100%', padding: 1 }}>
          <Box
            width={1}
            paddingX={1}
            paddingY={1}
            display={'flex'}
            justifyContent={'flex-end'}>
            <IconButton onClick={() => onClose()}>
              <ChevronLeftIcon color='primary' fontSize='large' />
            </IconButton>
          </Box>
          <Divider />

          <List>
            {/* HOME */}
            <Link
              activeClass='active'
              to='hero'
              spy={true}
              smooth={true}
              offset={-96}
              duration={1000}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary='Home' color='primary' />
              </ListItemButton>
            </Link>
            {/* ABOUT */}
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-96}
              duration={1000}>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary='About' color='primary' />
              </ListItemButton>
            </Link>
            {/* SKILL */}
            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={-96}
              duration={1000}>
              <ListItemButton>
                <ListItemIcon>
                  <TerminalRoundedIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary='Skill' color='primary' />
              </ListItemButton>
            </Link>
            {/* PROJECTS */}
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-96}
              duration={1000}>
              <ListItemButton>
                <ListItemIcon>
                  <FolderOutlinedIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary='Projects' color='primary' />
              </ListItemButton>
            </Link>
            {/* EXPERIENCE */}
            <Link
              activeClass='active'
              to='experience'
              spy={true}
              smooth={true}
              offset={-96}
              duration={1000}>
              <ListItemButton>
                <ListItemIcon>
                  <WorkOutlineIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary='Experience' color='primary' />
              </ListItemButton>
            </Link>
            {/* CONTACT */}
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-96}
              duration={1000}>
              <ListItemButton>
                <ListItemIcon>
                  <MailOutlineIcon color='primary' />
                </ListItemIcon>
                <ListItemText primary='Contact' color='primary' />
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default SideBar;
