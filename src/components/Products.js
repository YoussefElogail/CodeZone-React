import React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

const Products = () => {
  const products = useSelector(state => state.products) 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  },[])
  return (
    <main className="mt-5 py-3">
      <Container >
        <Row className=" align-items-center justify-content-between">
          {products.map((product) => {
            return(
              <Col key={product.id} className="col-12 col-sm-6 col-lg-3 mt-1 mb-1">
            <Card style={{ maxWidth: "17rem", margin: " auto" }}>
              <Card.Img style={{height: "250px"}} variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title.slice(0,15)+"...."}</Card.Title>
                <Card.Text>
                  {product.description.slice(0,40)+"....."}
                </Card.Text>
                <Card.Text>
                  {product.price}$
                </Card.Text>
                <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
            )
          })}
        </Row>
      </Container>
    </main>
  );
};

export default Products;
