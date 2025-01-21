import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import { Product } from "../../models/product";
import Catalog from '../features/catalog/Catalog';
import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './Navbar';
import { CssBaseline } from '@mui/material';//+


function App() {
  const [products, setProduct] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(true)
  const palateType = darkMode ? 'dark' : 'light';

  useEffect(() => {
    axios.get("http://localhost:5051/api/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

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
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Box sx={{
        height: '100vh', 
        background: darkMode
        ? 'radial-gradient(circle, #1e3aba, #111B27)'
        : 'radial-gradient(circle, #baecef9, #f0f9ff)',
        py: 6
      }}>
        <Container
          maxWidth="xl"
          sx={{ mt: 6}}
        >
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
