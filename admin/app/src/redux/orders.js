import { createSlice } from "@reduxjs/toolkit";
import { adminRequest } from "./requestMethod";
import { getDownloadURL } from "firebase/storage";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [], //no order at default
    fetching: false,
    success: false,
    fail: false,
  },
  reducers: {
    getOrder: (state) => {
      state.fetching = true;
    },
    getOrderSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.orders = action.payload;
    },
    getOrderFail: (state) => {
      state.fetching = false;
      state.fail = true;
    },

    deleteOrder: (state) => {
      state.fetching = true;
    },
    deleteOrderSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteOrderFail: (state) => {
      state.fetching = false;
      state.fail = true;
    },
    clearOrderState: (state) =>{
        state.orders= []; 
        state.etching= false;
        state.success= false;
        state.fail= false;
    },
  },
});

//Call to backend routes to get all order.
export const getOrderFunc = async (dispatch) => {
    dispatch(getOrder());
    try {
      const res = await adminRequest.get("/order/find");
      console.log(res.data);
      dispatch(getOrderSuccess(res.data));
    } catch (err) {
      dispatch(getOrderFail());
      console.log("Something wrong with order: ", err);
    }
};

//Call to backend routes to delete a order.
export const deleteOrderFunc = async (dispatch, navigate,  _id) => {
  dispatch(deleteOrder());
  try {
    const res = await adminRequest.delete(`/order/delete/${_id}`);
    dispatch(deleteOrderSuccess(_id));
    alert("Order Delete Successful");
    navigate('/transaction');
  } catch (err) {
    dispatch(deleteOrderFail());
    console.log("Something wrong with deleteing order: ", err);
  }
};

export const {
    getOrder,
    getOrderFail,
    getOrderSuccess,
    deleteOrder,
    deleteOrderFail,
    deleteOrderSuccess,
    clearOrderState,
  } = orderSlice.actions;
  export default orderSlice.reducer;
  