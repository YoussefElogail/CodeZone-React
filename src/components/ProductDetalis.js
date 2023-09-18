import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
const ProductDetalis = () => {
  const [product,setProduct] = useState({})
  const params = useParams()

  const urlProduct = "https://fakestoreapi.com/products"
  useEffect(() => {
    fetch(`${urlProduct}/${params.ProductId}`)
    .then(rse => rse.json())
    .then(data => setProduct(data))
  },[])
  return (
    <>
      <Product product={product} showBTN={false}/>
    </>
  );
}

export default ProductDetalis;
