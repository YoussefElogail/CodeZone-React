import BTN from "./BTN";

const Product = (props) => {
  return (
    <div className="product-card">
      <h1>{props.title}</h1>
      <p>{props.dec}</p>
      <span>{props.price}</span>
      <br />
      <br />
      <BTN name="click"/>
    </div>
  );
}

export default Product;
