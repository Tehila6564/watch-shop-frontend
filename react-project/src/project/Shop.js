import { useSelector, useDispatch } from "react-redux"

import { decreaseQty } from "../redux/productActions/decreaseQty"

import { addToCart } from "../redux/cartActions/addToCart";

import imgcart from '../img/++.png';
 


export default function Showshop() {
    const products = useSelector((state) => state.productReducer)
    const dispatch = useDispatch()
   
    return (
        <>

           
           
            <div id="cards" >
            
                {products.map((item, i) => (
                    <>

                        <div class="card" style={{ "width": "20rem","marginTop": "1.5rem"}}>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">{item.name} </p>
                                <img class="card-img-top" src={item.image} alt="" />
                                <p class="card-text">PRICE:{item.price} </p>
                                <p class="card-text">In Stock:{item.Qty} </p>
                                <p class="card-text">{item.description} </p>

                                <button onClick={(e) => {
                                    e.preventDefault();

                                    dispatch(addToCart(item));
                                    dispatch(decreaseQty(item));
                                    console.log("product");
                                    console.log(products);


                                }}

                                ><img src={imgcart} style={{ "width": "30px", "height": "30px" }}></img></button>


                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

