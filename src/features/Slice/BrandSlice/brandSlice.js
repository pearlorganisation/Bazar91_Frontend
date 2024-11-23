import { createSlice } from "@reduxjs/toolkit";

import { getBrands } from "../../actions/Brand/brandAction.js";

const initialState = {
    brandsData: [],
    isSuccess:false,
    isLoading:false,
    isError:false,
    isMailSent:false,
    errorMessage:null
};


const brandSlice = createSlice({
 name:'brands',
 initialState,
 reducers:{

  toggleSuccessReducer:(state,action)=>{
    console.log("hihi",action.payload);
    state.isSuccess = action.payload;
  }

 },
 extraReducers:(builder)=>{
  
    builder
    .addCase(getBrands.pending,(state,action)=>{
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    })
    .addCase(getBrands.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.brandsData = action.payload.data;

    })
    .addCase(getBrands.rejected,(state,action)=>{
        state.isLoading = false;
        isError = true;
        state.errorMessage = action.payload;


    })
 }

});

export const {toggleSuccessReducer} = brandSlice.actions;
export default brandSlice.reducer;