import {useState,useEffect} from 'react';

import Product from './Product';
import  './ProductsLists.css';
const ProductsLists = () => {
  const [data, setData] = useState([]);
  
const getData = () => {
  fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(json=>setData(json));
}
  useEffect(() => {
      getData()
              
  },[]);
  console.log(data)
  const product = data.map((itme) => {
    return (
      itme.price>=100 &&<Product itme={itme} key={itme.id}/> 
    )
  })
  return (
    <div className='products-lists'>
      {data.length === 0 && <h1>loding........</h1>}
      {product}
    </div>
  );
}

export default ProductsLists;
