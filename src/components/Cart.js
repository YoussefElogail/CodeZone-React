import React from "react";
import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  },0);

  return (
    <main className="mt-5 py-3">
      <Container>
        <h1 className="text-center">Wellcom to cart</h1>
        {cart.length === 0 ? (
          <h2 className="text-center mt-5">No products here</h2>
        ) : (
          <div style={{ maxWidth: "800px", margin: "10px auto" }}>
            <h2>Total price: {totalPrice.toFixed(2)}$</h2>
            <Button onClick={() => dispatch(clear())}>Clear cart</Button>
            <Table striped bordered hover size="sm" className="mt-2">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Img</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.title}</td>
                      <td>
                        <Image
                          style={{ width: "100px", height: "100px" }}
                          src={product.image}
                          alt={product.title}
                        />
                      </td>
                      <td>{product.price}$</td>
                      <td>{product.quantity}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => dispatch(deleteFromCart(product))}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </main>
  );
};

export default Cart;
