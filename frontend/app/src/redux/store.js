/**
 * Global store avaiable to be used in every page.
 */

import {configureStore } from "@reduxjs/toolkit"
import shoppingCartReducer from "./shoppingCart"

//Wrap app with <Provider> to be able to use store.
const store = configureStore({
    reducer:{
        cart: shoppingCartReducer
    }
})

export default store;
