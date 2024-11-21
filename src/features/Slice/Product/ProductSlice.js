import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getProductById, getProducts } from "../../actions/product/productAction";

const initialState = {
    ProductData: {},
    isSuccess:false,
    isLoading:false,
    isError:false,
    isMailSent:false,
    errorMessage:null
};


const ProductSlice = createSlice({
 name:'Products',
 initialState,
 reducers:{

  toggleSuccessReducer:(state,action)=>{
    console.log("hihi",action.payload);
    state.isSuccess = action.payload;
  }

 },
 extraReducers:(builder)=>{
  
    builder
    .addCase(getProducts.pending,(state,action)=>{
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    })
    .addCase(getProducts.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.ProductData = action.payload.data;
        toast.success("getBrands SuccessFull !!");

    })
    .addCase(getProducts.rejected,(state,action)=>{
        state.isLoading = false;
        isError = true;
        state.errorMessage = action.payload;


    })
     .addCase(getProductById.pending,(state,action)=>{
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    })
    .addCase(getProductById.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.ProductData = action?.payload?.data;

        console.log(action?.payload?.data, "my payload")
        toast.success("get Products SuccessFull !!");

    })
    .addCase(getProductById.rejected,(state,action)=>{
        state.isLoading = false;
        isError = true;
        state.errorMessage = action.payload;


    })
 }

});

export const {toggleSuccessReducer} = ProductSlice.actions;
export default ProductSlice.reducer;