import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../../services/axiosInterceptor";

export const getBrands= createAsyncThunk('brand/get', async (_, thunkAPI)=> {
    try{
      const { data} = await instance.get('/brand');

      console.log(data, "getting products")

      return data;
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
})