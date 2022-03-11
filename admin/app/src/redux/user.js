import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { clearCustomerState } from "./customer";
import { clearOrderState } from "./orders";
import { clearProductState } from "./product";
import { adminRequest } from "./requestMethod";

/**
 * Login for admin.
 */
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null, //No user at default.
    fetching: false,
    success: false,
    fail: false,
  },
  reducers: {
    login: (state) => {
      state.fetching = true;
    },
    loginSuccess: (state, action) => {
      state.fetching = false;
      state.success = true;
      state.currentUser = action.payload;
    },
    loginFail: (state) => {
      state.fetching = false;
      state.fail = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

//Login function to be called in login page, takes in dispatch hook and un,up.
export const loginFunc = async (dispatch, navigate, userLoginCredential) => {
  dispatch(login());
  try {
    const res = await adminRequest.post("/auth/login", userLoginCredential);
    // console.log("[Admin] res data is: ", res.data)
    if (res.data.isAdmin) {
      dispatch(loginSuccess(res.data));
      navigate("/home");
    } else {
      alert("Admin Credential False.");
      dispatch(loginFail());
    }
  } catch (err) {
    dispatch(loginFail());
    console.log("Something wrong with login: ", err);
  }
};

export const logoutFunc = (dispatch, navigate) => {
  dispatch(clearProductState());
  dispatch(clearCustomerState());
  dispatch(clearOrderState())
  dispatch(logout());
  navigate("/");
};

export const { login, logout, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
