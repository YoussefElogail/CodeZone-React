import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addProduct, fetchProducts } from '../store/actions/products-actions';
import { useEffect } from 'react';
import { addProduct, fetchProducts } from '../rtk/slices/products-slice';

const Products = () => {
  const state = useSelector(state => state.products)
  const dispatch = useDispatch()
  console.log(state)
  useEffect(() => {
    dispatch(fetchProducts())
  },[])
  return (
    <>
      {state.map((product) => {
        return(
          <h1 key={product.id}>products is : {product.title}</h1>
        )
      })}
      <button onClick={()=> dispatch(addProduct({id:4,title:"product 4"}))}>Add product</button>
    </>
  );
}

export default Products;
