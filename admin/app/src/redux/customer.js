import { createSlice } from "@reduxjs/toolkit";
import { adminRequest } from "./requestMethod";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customers: [], //no customer at default.
    fetching: false,
    success: false,
    fail: false,
  },
  reducers: {
    getCustomer: (state) => {
      state.fetching = true;
    },
    getCustomerSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.customers = action.payload;
    },
    getCustomerFail: (state) => {
      state.fetching = false;
      state.fail = true;
    },

    deleteCustomer: (state) => {
      state.fetching = true;
    },
    deleteCustomerSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.customers.splice(
        state.customers.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteCustomerFail: (state) => {
      state.fetching = false;
      state.fail = true;
    },

    updateCustomer: (state) => {
      state.fetching = true;
    },
    updateCustomerSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.customers[
        state.customers.findIndex((item) => item._id === action.payload._id)
      ] = action.payload.newCustomer;
    },
    updateCustomerFail: (state) => {
      state.fetching = false;
      state.fail = true;
    },

    addCustomer: (state) => {
      state.fetching = true;
    },
    addCustomerSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.customers.push(action.payload);
    },
    addCustomerFail: (state) => {
      state.fetching = false;
      state.fail = true;
    },
  },
});

//Call to backend routes to get all users.
export const getCustomerFunc = async (dispatch) => {
  dispatch(getCustomer());
  try {
    const res = await adminRequest.get("/users/find");
    dispatch(getCustomerSuccess(res.data));
  } catch (err) {
    dispatch(getCustomerFail());
    console.log("Something wrong with customer: ", err);
  }
};

//Call to backend routes to delete a user.
export const deleteCustomerFunc = async (dispatch, _id) => {
  dispatch(deleteCustomer());
  try {
    const res = await adminRequest.delete(`/users/${_id}`);
    dispatch(deleteCustomerSuccess(_id));
    alert("User Delete Successful");
  } catch (err) {
    dispatch(deleteCustomerFail());
    console.log("Something wrong with deleteing customer: ", err);
  }
};

//Call to backend routes to update a user.
export const updateCustomerFunc = async (dispatch, navigate, customerID, firstName, lastName, email, contact, location) => {
    dispatch(updateCustomer());
    try {
      const res = await adminRequest.put(`/users/${customerID}`, {
          firstName: firstName,
          lastName: lastName,
          email: email,
          contact: contact,
          location: location,
      });
    //   console.log("update res.data: ", res.data)
      dispatch(updateCustomerSuccess({_id: customerID, newCustomer: res.data}));
      alert("Update Successful");
      navigate("/user");
    } catch (err) {
      dispatch(updateCustomerFail());
      console.log("Something wrong with updating customer: ", err);
    }
  };

//Call to backend routes to create a user.
export const createCustomerFunc = async (dispatch, navigate, email, username, password) => {
    dispatch(addCustomer());
    try {
      const res = await adminRequest.post('/auth/register', {
        username: username,
        email: email,
        password: password,
      });
      // console.log("update res.data: ", res.data)
      dispatch(addCustomerSuccess(res.data));
      alert("Customer Create Successful");
      navigate("/user");
    } catch (err) {
      dispatch(addCustomerFail());
      console.log("Something wrong with creating customer: ", err);
    }
  };
export const {
  getCustomer,
  getCustomerSuccess,
  getCustomerFail,
  deleteCustomer,
  deleteCustomerSuccess,
  deleteCustomerFail,
  updateCustomer,
  updateCustomerSuccess,
  updateCustomerFail,
  addCustomer,
  addCustomerSuccess,
  addCustomerFail,
} = customerSlice.actions;
export default customerSlice.reducer;
