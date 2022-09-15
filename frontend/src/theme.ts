import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  mode: 'dark',
  palette: {
    primary: {
      // lighter: '#C8FACD',
      light: '#5BE584',
      main: '#00AB55',
      dark: '#007B55',
      darker: '#005249',
    },
    secondary: {
      // lighter: '#D6E4FF',
      light: '#84A9FF',
      main: '#3366FF',
      dark: '#1939B7',
      darker: '#091A7A',
    },
    info: {
      // lighter: '#D0F2FF',
      light: '#74CAFF',
      main: '#1890FF',
      dark: '#0C53B7',
      darker: '#04297A',
    },
    text: {
      primary: '#ffffff',
      secondary: '#949494',
    },
    grey: {
      100: '#F9FAFB',
      200: '#F4F6F8',
      300: '#DFE3E8',
      400: '#C4CDD5',
      500: '#919EAB',
      600: '#637381',
      700: '#454F5B',
      800: '#212B36',
      900: '#161C24',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
