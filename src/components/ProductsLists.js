import React from 'react';
import productsData from '../productsData';
import Product from './Product';
import  './ProductsLists.css';
const ProductsLists = () => {
  const product = productsData.map((itme) => {
    return (
      itme.price>=100 &&<Product itme={itme} key={itme.id}/> 
    )
  })
  return (
    <div className='products-lists'>
      <h1>hellow there</h1>
      {product}
    </div>
  );
}

export default ProductsLists;
