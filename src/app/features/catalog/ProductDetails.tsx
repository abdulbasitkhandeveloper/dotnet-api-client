import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../../../models/product';
import axios from 'axios';
import { Button, Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => { 
    axios.get(`http://localhost:5051/api/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => { console.error(error) })
  }, [id]);

  if (!product) return <p>Loading...</p>

  const ProductDetails = [
    { label: "Name", value: product.name },
    { label: "Description", value: product.description },
    { label: "Type", value: product.type },
    { label: "Brand", value: product.brand },
    { label: "Quantity in stock", value: product.quantityStock },
  ]

  return (
    <Grid2 container spacing={6} maxWidth={'lg'} sx={{ mx: 'auto' }}>
      <Grid2 size={6}>
        <img
          src={`${product.pictureUrl}`}
          alt={product.name}
          loading="lazy"
          style={{ width: '100%' }}
        />
      </Grid2>
      <Grid2 size={6}>
        <Typography variant='h3'>
          {product.name}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant='h6'>
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table sx={{
            "& td": {fontSize: '1rem'}
          }}>
            <TableBody>
              {ProductDetails.map((detail, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: 'bold' }}>{detail.label}</TableCell>
                    <TableCell>{detail.value}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid2 container spacing={2} marginTop={3}>
          <Grid2 size={6}>
            <TextField
              type='number'
              label='Quantity in Stock'
              defaultValue={1}
              variant='outlined'
              fullWidth  
            />
          </Grid2>
          <Grid2 size={6}> 
            <Button
              variant='contained'
              color='primary'
              size='large'
              fullWidth
              sx={{height: '55px'}}
              >Add to Basket
            </Button> 
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}
