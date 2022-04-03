import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Cart_Product = () => {
  return (
    <Container className="Cart_Product">
      <Row>
        <Col>
          <div className="tableBox">
            <table>
              <thead>
                <tr>
                  <th className="ProductName">Product Name</th>
                  <th className="Price">Price</th>
                  <th className="Quantity">Quantity</th>
                  <th className="Subtotal">Subtotal</th>
                  <th className="hide_me"></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div class="thumb-box">
                      {" "}
                      <a href="shop-details-1.html" class="thumb">
                        <img
                          src="assets/images/shop/cart-product-thumb-1.jpg"
                          alt=""
                        />
                      </a>{" "}
                      <a href="shop-details-1.html" class="title">
                        <h5> Leather Bag </h5>
                      </a>{" "}
                    </div>
                  </td>
                  <th>$250.00</th>
                  <td class="qty">
                    <div class="qtySelector text-center">
                      {" "}
                      <span class="decreaseQty">
                        <i class="flaticon-minus"></i>{" "}
                      </span>{" "}
                      <input type="number" class="qtyValue" value="1" />{" "}
                      <span class="increaseQty">
                        {" "}
                        <i class="flaticon-plus"></i>{" "}
                      </span>{" "}
                    </div>
                  </td>
                  <th>2</th>
                  <th>2</th>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart_Product;
