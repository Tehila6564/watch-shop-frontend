import React, { useEffect } from "react";

import { useSelector } from "react-redux";


const GoToPayment = () => {
  useEffect(() => {
    alert('are you sure?');
  }, []);
  const cart = useSelector((state) => state.cartReducer);
  
  let sum = 0;

  cart.forEach((element) => {
    sum += element.price * element.cartQty;
  });

  console.log(sum); 
  console.log(cart);

  return (
    <>
      <table className="table">
        <thead className="head-dark">
          <tr>
            <th scope="col">totle price</th>
            <th scope="col">price</th>
            <th scope="col">cartQty</th>
            <th scope="col">name</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.price * item.cartQty}</td>
              <td>{item.price}</td>
              <td>{item.cartQty}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <h1>Sum: {sum}</h1>
      <button className="btn btn-dark">pay now</button>
    </>
  );
};

export default GoToPayment;
