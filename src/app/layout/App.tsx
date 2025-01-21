import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import { Product } from "../../models/product";
import Catalog from '../features/catalog/Catalog';
import { Box, Button, Container, Typography } from '@mui/material';


function App() {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5051/api/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);


  const addProduct = (() => {
    setProduct((prevState) => [...prevState, {
      id: prevState.length + 1,
      name: `Your ${prevState.length + 1} Product`,
      description: "A new product description",
      price: (prevState.length  * 100) + 100,
      pictureUrl: "https://via.placeholder.com/150",
      type: "Electronics",
      brand: "Samsung",
      quantityStock: 10,
    }])
  })

  return (
    <Container maxWidth="xl">
      <Box display="flex" gap={3} justifyContent="center" marginY={3} >
        <Typography variant='h4'>Re Store</Typography>
        <Button variant="contained" onClick={addProduct}>Add Product</Button>
      </Box>
      <Catalog products={products} />
    </Container>
  );
}

export default App;
