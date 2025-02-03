import React from 'react'
import ProductList from './ProductList'
import { useFetchProductsQuery } from './CatalogAPi';

export default function Catalog() {
  const {data: products, isLoading} = useFetchProductsQuery()

  if (!products || isLoading) return <p>Loading...</p>
  
  return (
    <>
      <ProductList products={products} />
    </>
  )
}
