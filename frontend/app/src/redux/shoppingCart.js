import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    products: [], //User shopping cart can have multiple products.
    quantity: 0,
    totalPrice: 0,
    finalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload); //User selected product.
      state.quantity += 1; //This is cart quantity, not the product quantity.
      state.totalPrice += action.payload.price * action.payload.itemCount;
    },
    //Handles decreasing product unit or removing it in shopping cart
    decreaseProductInCart: (state, action) =>{
      //Index
      const index = state.products.findIndex((i)=> (i._id === action.payload));

      //Remove the item if its itemCount is 1,
      if(state.products[index].itemCount === 1){
        state.totalPrice -= state.products[index].price
        state.products.splice(state.products[index],1);
        state.quantity -= 1;
      }else{  // Decrease the item itemCount, and adjust totalPrice
        state.products[index].itemCount -=1 ;
        state.totalPrice -= state.products[index].price
      }
    },
    //Handles increasing product unit in shopping cart.
    increaseProductInCart: (state, action) =>{
      //Index
      const index = state.products.findIndex((i)=> (i._id === action.payload));

      state.products[index].itemCount += 1;
      state.totalPrice += state.products[index].price;
    },
    finalize: (state)=>{
      state.finalPrice = (parseFloat(state.totalPrice) + (parseFloat(state.totalPrice) * parseFloat(0.07))).toFixed(2);
    },
    clearCart: (state)=> {
      state.products = [];
      state.quantity= 0;
      state.totalPrice= 0;
      state.finalPrice= 0;
    }
  },
});

export const {addProduct, decreaseProductInCart, increaseProductInCart, finalize, clearCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;