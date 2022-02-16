import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    products: [], //User shopping cart can have multiple products.
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload); //User selected product.
      state.quantity += 1; //This is cart quantity, not the product quantity.
      state.totalPrice += action.payload.price * action.payload.itemCount;
    },
  },
});

export const {addProduct} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;