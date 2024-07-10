import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Shop from "./Shop";
import imgcart from "../img/carticon.png";
import Payment from "../project/GoToPayment";
import About from "../project/about";
import Cart from "../project/cart";


export function Navigator() {
  const navigate = useNavigate();

  return (
    <>
    <nav className="navbar fixed-top bg-light">
      <div className="container-fluid">
        <button
          type="button"
          className="btn btn-outline-dark mx-2"
          onClick={() => navigate("/cart")}
          style={{ width: "120px", height: "60px" }}
        >
          <img
            className="img-cart"
            src={imgcart}
            style={{ width: "50px", height: "50px" }}
            alt="Cart"
          />
        </button>

        <button
          type="button"
          className="btn btn-outline-dark mx-2"
          onClick={() => navigate("/")}
          style={{ width: "120px", height: "60px" }}
        >
          Our products
        </button>
        <button
          type="button"
          className="btn btn-outline-dark mx-2"
          onClick={() => navigate("/about")}
          style={{ width: "120px", height: "60px" }}
        >
          About
        </button>
        <h1>Watch Store</h1>
      </div>
    </nav>

 
      <Routes>
        
        <Route exact path="/" element={<Shop />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
