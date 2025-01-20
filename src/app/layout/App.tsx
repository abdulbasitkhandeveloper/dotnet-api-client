import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import { Product } from "../../models/product";
import Catalog from '../features/catalog/Catalog';


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
    <div className="App">
      <h1>Re Store</h1>
      <Catalog products={products} addProduct={addProduct}/>
    </div>
  );
}

export default App;
