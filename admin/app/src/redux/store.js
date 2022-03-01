/**
 * Global store avaiable to be used in every page.
 */

 import {configureStore, combineReducers} from "@reduxjs/toolkit"
 import userReducer from './user'
 import {
     persistStore,
     persistReducer,
     FLUSH,
     REHYDRATE,
     PAUSE,
     PERSIST,
     PURGE,
     REGISTER,
   } from 'redux-persist'
 import storage from 'redux-persist/lib/storage'
 
 const persistConfig = {
     key: 'root',
     version: 1,
     storage,
 }  
 
 //Use combineReducer to persist both user and shopping cart.
 const rootReducer= combineReducers({user: userReducer})
 //Reducer we want to persist.
 const persistedReducer = persistReducer(persistConfig, rootReducer)
 
 //Wrap app with <Provider> to be able to use store.
 export const store = configureStore({
     reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware({
       serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       },
     }),
 })
 
 export let persistor = persistStore(store);
 // export default store;
 