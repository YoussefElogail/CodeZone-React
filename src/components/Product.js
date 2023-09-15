import React from 'react';
import "./Product.css"
const Product = (props) => {
  return (
    <>
      <div  className='card'>
        <div className='card-head'>
          <h1>{props.itme.title}</h1>
        </div>
        <div className='card-body'>
          <img src={props.itme.image} />
          <p>{props.itme.description}</p>
          <span>${props.itme.price}</span>
        </div>
      </div>
    </>
  );
}

export default Product;
