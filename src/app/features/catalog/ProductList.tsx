import React from 'react'
import { Product } from '../../../models/product'
import ProductCard from './ProductCard'
import { Box } from '@mui/material'

type Props = {
	products: Product[],
}

export default function ProductList({products}: Props) {
  return (
	<Box sx={{display: "flex", flexWrap: 'wrap', gap: 3, justifyContent: "center", marginY: 3}}>
		{products.map((product) => (
			<ProductCard product={product} key={product.id}/>
		))}
	</Box>
  )
}
