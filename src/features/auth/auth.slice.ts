import { path } from "./../../common/routes/paths"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
  authApi,
  ArgLoginType,
  ArgType,
  ProfileType,
  ResponseMeType,
  RegisterResponseType,
  ArgForgotType,
  UpdateProfileType,
} from "./auth.api"
import { createAppAsyncThunk } from "../../common/utils/create-app-async-thunk"

type PathDirectionType = "auth/login" | "auth/checkEmail" | "/"

const register = createAppAsyncThunk<any, ArgType>(
  "auth/register",
  async (arg: ArgType) => {
    const res = await authApi.register(arg)
    return res.data
  },
)

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>(
  "auth/login",
  async (arg) => {
    const res = await authApi.login(arg)
    return { profile: res.data }
  },
)

const forgot = createAppAsyncThunk<
  { path: PathDirectionType; emailMessage: string } & ResponseMeType,
  ArgForgotType
>("auth/forgot", async (arg) => {
  const res = await authApi.forgot(arg)
  return {
    path: path.CHECK_EMAIL as PathDirectionType,
    emailMessage: arg.email,
    info: res.data.info,
  }
})
const logout = createAppAsyncThunk<ResponseMeType>("auth/logout", async () => {
  const res = await authApi.logout()
  return {
    info: res.data.info,
  }
})

const updateProfile = createAppAsyncThunk<
  { profile: ProfileType },
  UpdateProfileType
>("auth/updateProfile", async (arg) => {
  const res = await authApi.updateProfile(arg)
  return {
    profile: res.data.updatedUser,
  }
})
const slice = createSlice({
  name: "auth",
  initialState: {
    profile: null as ProfileType | null,
    path: "/" as PathDirectionType,
    emailMessage: "" as string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
      .addCase(forgot.fulfilled, (state, action) => {
        state.path = action.payload.path
        state.emailMessage = action.payload.emailMessage
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.profile = null
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
  },
})

export const authReducer = slice.reducer
export const authThunks = { register, login, forgot, logout, updateProfile }
