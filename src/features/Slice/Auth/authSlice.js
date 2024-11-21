import { createSlice } from "@reduxjs/toolkit";
import { login, logout, signUp } from "../../actions/auth/authAction";
import { toast } from "sonner";

const initialState = {
    authenticationData: {},
    isSuccess:false,
    isLoading:false,
    isError:false,
    isMailSent:false,
    errorMessage:null
};


const authSlice = createSlice({
 name:'authentication',
 initialState,
 reducers:{

  toggleSuccessReducer:(state,action)=>{
    console.log("hihi",action.payload);
    state.isSuccess = action.payload;
  }

 },
 extraReducers:(builder)=>{
  
    builder
    .addCase(login.pending,(state,action)=>{
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    })
    .addCase(login.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.authenticationData = action.payload.data;
        toast.success("Login SuccessFull !!");

    })
    .addCase(login.rejected,(state,action)=>{
        state.isLoading = false;
        isError = true;
        state.errorMessage = action.payload;


    })
    .addCase(signUp.pending,(state,action)=>{
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.isMailSent = false;
    })
    .addCase(signUp.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.isMailSent = true;
        state.isSuccess = true;
        toast.success("Please Check Your Mail For Email Verification !!")


    })
    .addCase(signUp.rejected,(state,action)=>{
        state.isLoading = false;
        state.isError = true;
        state.isMailSent = false;
        state.errorMessage = action.payload;
        toast.error("Something Went Wrong !!")




    })
    .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.authenticationData = null; // Clear user data
        state.errorMessage = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.errorMessage = action.payload; // Set error message
        toast.error("Something Went Wrong !!")
      });
 }



});

export const {toggleSuccessReducer} = authSlice.actions;
export default authSlice.reducer;