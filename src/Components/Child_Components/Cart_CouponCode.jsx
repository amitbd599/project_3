import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart_CouponCode = () => {
  return (
    <Container className="Cart_CouponCode">
      <Row>
        <Col md={6} className="part_1">
          <div className="wrapCoupon">
            <input type="text" placeholder="Coupon Code" />
            <Link className="my-btn-primary ml-20">APPLY COUPON</Link>
          </div>
        </Col>
        <Col md={6} className="part_2">
          <div className="wrapCartInfo">
            <Link className="my-btn-primary ml-20">CONTINUE SHOPPING</Link>
            <Link className="my-btn-primary ml-20">UPDATE CART</Link>
          </div>
        </Col>
      </Row>

      {/* Cart Total */}

      <Row>
        <Col md={6}>
          <div className="wrapCartTotal">
            <h2>Cart Totals :</h2>
            <table>
              <thead>
                <tr>
                  <th>Shipping :</th>
                  <th>$2500.00</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Shipping :</th>
                  <th>
                    <ul>
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="checkbox"
                          label="Free Shipping"
                        />
                        <Form.Check type="checkbox" id="g" label="Flat Rate" />
                        <Form.Check
                          type="checkbox"
                          id="r"
                          label="Local Pickup"
                        />
                      </Form>
                    </ul>
                    <p className="text">
                      Shipping options will be updated during checkout
                    </p>
                    <p className="shipText">Calculate Shipping</p>
                  </th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <th>Total :</th>
                  <th>
                    <p className="shipText">$ 2500</p>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col md={6}>
          <div className="wrapCheckOut">
            <h2>Check Out</h2>
            <div className="wrap">
              <ul>
                <li>
                  <div className="left ">
                  Subtotal
                  </div>
                  <div className="right">
                  $2500.00
                  </div>
                </li>
                <li>
                  <div className="left">
                  Shipping
                  </div>
                  <div className="right">
                  Flat rate: $50.00
                  </div>
                </li>
                <hr />
                <li>
                  <div className="left fw-bold">
                  Total Price:
                  </div>
                  <div className="right totalPrice">
                  $2550.00
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart_CouponCode;
