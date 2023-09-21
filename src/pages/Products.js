import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Products.css";
import Swal from "sweetalert2";


const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((rse) => rse.json())
      .then((data) => setAllProducts(data));
  };
  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are you sure to delete ${product.title} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => getAllProducts());
      }
    });
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h1> Products page</h1>

      <Link to="add" className="btn btn-success mt-3">
        Add new product
      </Link>

      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            {/* <th>Description</th> */}
            <th>Peice</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                {/* <td>{product.description.slice(0, 50) + "...."}</td> */}
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`${product.id}`}
                    className="btn btn-info btn-sm m-2 "
                  >
                    View
                  </Link>
                  <Link className="btn btn-primary btn-sm" to={`edit/${product.id}`} >Edit</Link>
                </td> 
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Products;
