import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authApi, ArgLoginType, ArgType, ProfileType, RegisterResponseType } from "./auth.api"
import { createAppAsyncThunk } from "../../common/utils/create-app-async-thunk"


//доделала типизашку и заменила async await
const register = createAppAsyncThunk<void, ArgType>("auth/register",async (arg: ArgType) => {
  const res = await authApi.register(arg)
  console.log(res.data)
//   return res.data
})

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>
  ("auth/login", async(arg) => {
  const res = await authApi.login(arg);
    return { profile: res.data }
  })


const slice = createSlice({
  name: "auth",
  initialState: { profile: null as ProfileType | null },
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(login.fulfilled,(state,action)=>{
        state.profile = action.payload.profile
    })
  },
})

export const authReducer = slice.reducer
export const authThunks = { register, login }
