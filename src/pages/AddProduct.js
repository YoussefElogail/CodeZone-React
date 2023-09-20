import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate()
  const sendData = () => {
    axios.post("http://localhost:9000/products",{
      title,
      price
    })
    .then(data => navigate("/products"))

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
      <h1>Add new product</h1>
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
          Add
        </button>
      </form>
    </>
  );
};

export default AddProduct;
