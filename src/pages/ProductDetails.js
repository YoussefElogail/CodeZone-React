import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  
  let { productId } = useParams();
  const navigate = useNavigate()
  const getProduct = (params) => {
    axios.get(`http://localhost:9000/products/${productId}`)
      .then((data) => setProduct(data.data))
      .catch(error => navigate("/products"))
      
  };  
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <>
        <h1>product id is :{product.id} </h1>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <span>{product.price}</span>
          </div>
        </div>
      </>
    </>
  );
};

export default ProductDetails;
