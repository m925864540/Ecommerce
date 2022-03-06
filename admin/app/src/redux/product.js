import { createSlice } from "@reduxjs/toolkit";
import { adminRequest } from "./requestMethod";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [], //no product at default.
    fetching: false,
    success: false,
    fail: false,
  },
  reducers: {
    getProduct: (state) => {
      state.fetching = true;
    },
    getProductSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.products = action.payload;
    },
    getProductFail: (state) => {
      state.fetching = false;
      state.fail = true;
    },

    deleteProduct: (state) => {
      state.fetching = true;
    },
    deleteProductSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFail: (state) => {
      state.fetching = false;
      state.fail = true;
    },

    updateProduct: (state) => {
      state.fetching = true;
    },
    updateProductSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.products[state.products.findIndex((item)=>(
          item._id === action.payload._id
      ))] = action.payload.newProduct;
    },
    updateProductFail: (state) => {
      state.fetching = false;
      state.fail = true;
    },
  },
});

//Call to backend routes to get all products.
export const getProductFunc = async (dispatch) => {
  dispatch(getProduct());
  try {
    const res = await adminRequest.get("/product/");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFail());
    console.log("Something wrong with product: ", err);
  }
};

//Call to backend routes to delete a products.
export const deleteProductFunc = async (dispatch, _id) => {
  dispatch(deleteProduct());
  try {
    // const res = await adminRequest.delete(`/product/${_id}`);
    dispatch(deleteProductSuccess(_id));
  } catch (err) {
    dispatch(deleteProductFail());
    console.log("Something wrong with deleteing product: ", err);
  }
};

//Call to backend routes to update a products.
export const updateProductFunc = async (dispatch, navigate, _id, productName, productDescription, productPrice, inStock) => {
  dispatch(updateProduct());
  try {
    const res = await adminRequest.put(`/product/${_id}`, {
        title: productName,
        description: productDescription,
        price: productPrice,
        inStock: inStock,
    });
    // console.log("update res.data: ", res.data)
    dispatch(updateProductSuccess({_id: _id, newProduct: res.data}));
    alert("Update Successful");
    navigate("/products");
  } catch (err) {
    dispatch(updateProductFail());
    console.log("Something wrong with updating product: ", err);
  }
};

export const {
  getProduct,
  getProductSuccess,
  getProductFail,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFail,
  updateProduct,
  updateProductSuccess,
  updateProductFail,
} = productSlice.actions;
export default productSlice.reducer;
