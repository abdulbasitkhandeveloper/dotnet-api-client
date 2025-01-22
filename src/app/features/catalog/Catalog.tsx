import React, { useEffect, useState } from 'react'
import { Product } from '../../../models/product'
import ProductList from './ProductList'
import axios from 'axios';

export default function Catalog() {
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
  
  return (
    <>
      <ProductList products={products} />
    </>
  )
}
