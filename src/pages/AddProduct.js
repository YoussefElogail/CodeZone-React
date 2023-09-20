import { useState } from "react";
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
const AddProduct = (props) => {
  const params = useParams()
  
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate()
  const sendData = () => {
    console.log(props.isAdd)
    if (props.isAdd) {
      console.log("1")
      axios.post("http://localhost:9000/products",{
      title,
      price
    })
    .then(data => navigate("/products"))
    }else{
      console.log("2")
      axios.put(`http://localhost:9000/products/${params.productId}`,{
      title,
      price
    })
    .then(data => navigate("/products"))
    }

  //   fetch("http://localhost:9000/products", {
  //     method: "POST",
  //     body: {
  //       "title" :title,
  //       "price" : price
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
   };

  return (
    <>
      <h1>{props.h1} product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendData();
        }}
      >
        <div className="mb-3">
          <label htmlFor="Product-title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="Product-title"
            aria-describedby="Product-title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Product-price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            id="Product-price"
            aria-describedby="Product-price"
            onChange={(e) => {
              setPrice(Number(e.target.value));
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {props.btn}
        </button>
      </form>
    </>
  );
};

export default AddProduct;
