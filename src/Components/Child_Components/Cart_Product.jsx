import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";

const Cart_Product = () => {
  const [value, setValue] = useState(0);
  const increaseQty = () => {
    setValue(value + 1);
  };
  const decreaseQty = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  let handleChange = (e)=>{
    setValue(e.target.value);
   }

  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "DataBase/ProductData.json";
    axios.get(url).then((res) => setData(res.data.slice(0, 6)));
  }, []);
  return (
    <Container className="Cart_Product">
      <Row>
        <Col>
          <div className="tableBox">
            <table>
              <thead className="cart-header">
                <tr>
                  <th className="ProductName">Product Name</th>
                  <th className="Price">Price</th>
                  <th className="Quantity">Quantity</th>
                  <th className="Subtotal">Subtotal</th>
                  <th className="hide_me"></th>
                </tr>
              </thead>

              {data.map((data) => (
                <tbody className="classBody">
                  <tr>
                    <td>
                      <div class="thumb-box">
                        {" "}
                        <a href="shop-details-1.html" class="thumb">
                          <img
                            src={data.img}
                            alt=""
                          />
                        </a>{" "}
                        <a href="shop-details-1.html" class="title">
                          <h5> {data.title} </h5>
                        </a>{" "}
                      </div>
                    </td>
                    <td>$250.00</td>
                    <td class="qty">
                      <div class="qtySelector ">
                        {" "}
                        <span class="decreaseQty">
                          <IoIosRemoveCircleOutline
                            className="icon"
                            onClick={decreaseQty}
                          />
                        </span>
                        <input type="text" class="qtyValue" value={value} onChange={handleChange}/>
                        <span class="increaseQty">
                          <IoIosAddCircleOutline
                            className="icon"
                            onClick={increaseQty}
                          />
                        </span>
                      </div>
                    </td>
                    <td>$250</td>
                    <td>
                      <AiOutlineClose />
                    </td>
                  </tr>
                </tbody>
              ))}



            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart_Product;
