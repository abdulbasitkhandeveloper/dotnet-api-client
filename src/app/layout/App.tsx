import React from 'react';
import '../../App.css';
import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import Navbar from "./Navbar"
import { CssBaseline } from '@mui/material';//+
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/store';

function App() {
  const {darkMode} = useAppSelector(state => state.ui)
  const palateType = darkMode ? 'dark' : 'light';

  const darkTheme = createTheme({
    palette: {
      mode: palateType,
      background: {
        default: (palateType === "light") ? '#eaeaea' : '#121212'
      }
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar/>
      <Box sx={{
        height: '100vh', 
        background: darkMode
        ? 'radial-gradient(circle, #1e3aba, #111B27)'
        : 'radial-gradient(circle, #baecf9, #f0f9ff)',
        py: 6
      }}>
        <Container
          maxWidth="xl"
          sx={{ mt: 6}}
        >
          <Outlet />
      </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
