export const decreaseFromCart = (item)=>
{
    return{
        type:"DECREASEFROMCART",
        payload: item
    };
};