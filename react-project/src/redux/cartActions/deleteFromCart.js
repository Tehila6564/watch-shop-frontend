export const deleteFromCart = (product)=>
{
  
    return{
        type:"DELETEFROMCART",
       payload: product
    };
};