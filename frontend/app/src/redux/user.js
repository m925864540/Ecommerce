import { createSlice } from "@reduxjs/toolkit";
import { userRequest } from "./requestMethod";
import { clearCart } from "./shoppingCart";

/**
 * Login for user.
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
      state.success = false;
      state.fail = false;
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
      state.fetching = false;
      state.success = false;
      state.fail = false;
    },
  },
});

//Register an user with credential provided.
export const registerFunc = async (dispatch, navigate, userRegisterCredential) =>{
  dispatch(login());
  try {
    const res = await userRequest.post("/auth/register", userRegisterCredential);
    // console.log("res data is: ", res.data)
    dispatch(loginSuccess(res.data));
    alert("Account Successfully Created.")
    navigate("/");
  } catch (err) {
    dispatch(loginFail());
    console.log("Something wrong with signup ", err);
  }
}

//Login function to be called in login page, takes in dispatch hook and un,up.
export const loginFunc = async (dispatch, navigate, userLoginCredential) => {
  dispatch(login());
  try {
    const res = await userRequest.post("/auth/login", userLoginCredential);
    // console.log("res data is: ", res.data)
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFail());
    console.log("Something wrong with login ", err);
  }
};

//Logout
export const logoutFunc = (dispatch, navigate) => {
  dispatch(logout());
  dispatch(clearCart());
  navigate("/");
};


export const { login, logout, loginSuccess, loginFail } = userSlice.actions;
export default userSlice.reducer;
