import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../../services/axiosInterceptor";

export const getProducts = createAsyncThunk('product/get', async (_, thunkAPI)=> {
    try{
      const { data} = await instance.get('/product');

      console.log(data, "getting products")

      return data;
    }catch(error){
      return thunkAPI.rejectWithValue(error)
    }
})


export const getProductById = createAsyncThunk('product/getById', async (productId, thunkAPI) => {
  try {
    const { data } = await instance.get(`/product/${productId}`); // Adjust the endpoint to get by ID
    console.log(data, "getting product by ID");
    return data;
  } catch (error) {
    // Log the error message for easier debugging
    console.error("Error fetching product:", error);
    return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
  }
});
