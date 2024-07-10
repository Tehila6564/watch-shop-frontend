const cart = [];

export const cartReducer = (state = cart, action) => {
  console.log("cart");
  console.log(state);
  switch (action.type) {
    case "ADDTOCART":
      let flag = 0;
      state.map((element) => {
        if (element.id === action.payload.id) {
          flag = 1;
        }
      });

      if (!flag) {
        return [...state, action.payload];
      }

      return state;

    case "DELETEFROMCART":
      return state.filter((product) => product.id !== action.payload.id);

    case "DECREASEFROMCART":
      
      return state;

    default:
      return state;
  }
};

export default cartReducer;
