// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Customize your primary color
    },
    secondary: {
      main: '#FF4081', // Customize your secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Customize your font family
    fontSize: 16, // Customize your base font size
  },
});

export default theme;
