import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/Auth/authSlice"
import CartSlice from "./Slice/CartSlice";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import ProductSlice from "./Slice/Product/ProductSlice";
import brandSlice from "./Slice/BrandSlice/brandSlice";



const persistConfig = {
  key:'BAZAR91',
  version:1,
  storage,
  transforms:[
    encryptTransform({
      secretKey: `${import.meta.env.REACT_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        console.log('Redux Persist Encryption Failed: ', err);
      }
    })
  ],
  //omitted part should come below
  // backlist:[]
}

const reducer = combineReducers({
  cart: CartSlice,
  auth: authSlice,
  product:ProductSlice,
  brands:brandSlice
})

//this would clear whole got dam redux data along with local storage data 
const rootReducer = (state, action) => {
  if (action.type === 'auth/clearReduxStoreData') {
    state = undefined;
    localStorage.clear();
    sessionStorage.clear();
  }
  return reducer(state,action);
};

const persistedReducers = persistReducer(persistConfig,rootReducer);
const store = configureStore({
  reducer:persistedReducers,
  devTools:import.meta.env.VITE_APP_WORKING_ENVIRONMENT === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
