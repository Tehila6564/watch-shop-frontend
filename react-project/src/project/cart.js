import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOty } from "../redux/productActions/addQty";
import { decreaseQty } from "../redux/productActions/decreaseQty";
import { productReducer } from "../redux/reducer/productReducer";
import { addToCart } from "../redux/cartActions/addToCart";
import { deleteFromCart } from "../redux/cartActions/deleteFromCart";
import { decreaseFromCart } from "../redux/cartActions/decreaseFromCart";
import { cartReducer } from "../redux/reducer/cartReducer";
// import GoToPaymant from '../project/GoToPayment'

import { useNavigate } from "react-router-dom";

import imgcart from "../img/garbegeicon.png";
import plus from "../img/+icon.png";
import minus from "../img/-icon.png";
export default function Showcart() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);
  // const [sum, setsum] = useState(0);
  const navigate = useNavigate();

  return (
    <>
    <nav className="navbar fixed-top bg-light">
      <div className="container-fluid">
      <button
        type="button"
        className="btn btn-outline-dark mx-2"
        onClick={() => navigate("/payment")}
        style={{ width: "120px", height: "60px" }}
      >
        payment
      </button></div></nav>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <img
                  className="productsInCart-img-top"
                  src={item.image}
                  alt=""
                />
              </td>
              <td>{item.price}</td>
              <td>{item.cartQty}</td>

              <td>
                {" "}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(addToCart(item));
                    dispatch(decreaseQty(item));
                    setQty(item.cartQty);
                    console.log("cart add");
                    console.log(cart);
                  }}
                  type="button"
                  className="btn btn-outline-warning"
                >
                  <img
                    src={plus}
                    style={{ width: "20px", height: "20px" }}
                    alt="+"
                  />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(decreaseFromCart(item));
                    dispatch(addOty(item));
                    setQty(item.cartQty);
                    console.log("cart del");
                    console.log(cart);
                  }}
                  type="button"
                  className="btn btn-outline-warning"
                >
                  <img
                    src={minus}
                    style={{ width: "20px", height: "20px" }}
                    alt="-"
                  />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteFromCart(item));
                    dispatch(addOty(item));
                    console.log("cart del all in same type");
                    console.log(cart);
                  }}
                  type="button"
                  className="btn btn-outline-warning"
                >
                  <img src={imgcart} style={{ width: "1rem" }} alt="Delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
