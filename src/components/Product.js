import { Link } from "react-router-dom";

const Product = (props) => {
  const { product, showBTN = true } = props;

  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          {!showBTN && <p>price: {product.price}</p>}
          {showBTN && <Link className="btn btn-primary" to={"product/" + product.id}>Details</Link>}
        </div>
      </div>
    </>
  );
};

export default Product;
