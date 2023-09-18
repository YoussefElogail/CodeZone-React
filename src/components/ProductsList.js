import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [apiData, setApiData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [fleterCategories, setFleterCategories] = useState("");

  const getData = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  };

  const getCategories = () => {
    fetch(apiUrl + "/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  const getCategorie = (catName) => {
    fetch(`${apiUrl}/category/${catName}`)
      .then((res) => res.json())
      .then((json) => setApiData(json));
  };

  useEffect(() => {
    getData();
    getCategories()
    
  }, []);

  return (
    <>
      <h2 className="text-center mt-2">Our products</h2>
      <div className="container">
        <div className="text-center my-2">
        <button
              
              type="button"
              className="btn btn-outline-secondary me-2"
              onClick={() => {
                getData()
              }}
            >All</button>
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={() => {
                  getCategorie(cat)
                }}
              >
                {cat}
              </button>
            );
          })}
          
        </div>
        <div className="row ">
          {apiData.map((product) => {
            return (
              <div key={product.id} className="col-3 ">
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
