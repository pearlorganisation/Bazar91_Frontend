import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../../services/axiosInterceptor";


export const login = createAsyncThunk('auth/login',
    async (payload,{rejectWithValue})=>{

        try{
          const res = await instance.post('auth/login',payload,{
            withCredentials:true,
            headers:{
                'Content-Type':'application/json'
            }
          });

          return res.data;
        }
        catch(error)
        {
           console.log(error);
           return rejectWithValue(error);
        }

    }
)
export const signUp = createAsyncThunk('auth/signUp',
    async (payload,{rejectWithValue})=>{

        try{
          const res = await instance.post('/auth/signup',payload,{
            withCredentials:true,
            headers:{
                'Content-Type':'application/json'
            }
          });

          return res.data;
        }
        catch(error)
        {
           console.log(error);
           return rejectWithValue(error);
        }

    }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get('auth/logout',{
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res.data; // Return only the response data
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Logout failed. Please try again."
      );
    }
  }
);

