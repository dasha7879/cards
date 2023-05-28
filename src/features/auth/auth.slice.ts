
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi, payloadType } from "./auth.api";
 

const register = createAsyncThunk(
    "auth/register",
    (arg:payloadType, thunkAPI) => {
        const  { dispatch, getState} = thunkAPI
        authApi.register(arg).then((res) => {
            console.log(thunkAPI)
      });
    }
)
const slice = createSlice({
    name:"auth",
    initialState: {},
    reducers:{},
})


export const authReducer = slice.reducer
export const authThunks = { register };
