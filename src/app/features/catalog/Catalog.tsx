import React from 'react'
import { Product } from '../../../models/product'

type Props = {
   products: Product[],
   addProduct: () => void,
}

export default function Catalog({products, addProduct}: Props) {
  return (
    <div>
       <ul>
        {products.map((product) => (
          <li key={product.id}> {product.name} - {product.price}</li>
        ))}
      </ul>

      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}
