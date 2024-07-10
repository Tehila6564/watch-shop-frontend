import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer  } from "./cartReducer";


export const allReducers = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer
})
