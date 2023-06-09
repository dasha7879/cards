import { path } from "./../../common/routes/paths"
import { createSlice } from "@reduxjs/toolkit"
import {
  authApi,
  ArgLoginType,
  ArgType,
  ProfileType,
  CommonResponseType,
  ArgForgotType,
  UpdateProfileType,
  SetNewPassordType,
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
  async (arg, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI
    try {
      const res = await authApi.login(arg)
      return { profile: res.data }
    } catch (e: any) {
      console.log(e)

      alert(e.response.data.error)
      return rejectWithValue(e.response.data.error)
    }
  },
)

const forgot = createAppAsyncThunk<
  { path: PathDirectionType; emailMessage: string } & CommonResponseType,
  ArgForgotType
>("auth/forgot", async (arg) => {
  const res = await authApi.forgot(arg)
  return {
    path: path.CHECK_EMAIL as PathDirectionType,
    emailMessage: arg.email,
    info: res.data.info,
  }
})
const logout = createAppAsyncThunk<CommonResponseType>(
  "auth/logout",
  async () => {
    const res = await authApi.logout()
    return {
      info: res.data.info,
    }
  },
)

const updateProfile = createAppAsyncThunk<
  { profile: ProfileType },
  UpdateProfileType
>("auth/updateProfile", async (arg) => {
  const res = await authApi.updateProfile(arg)
  return {
    profile: res.data.updatedUser,
  }
})

const me = createAppAsyncThunk<any>("auth/me", async () => {
  const res = await authApi.me()
  return {
    profile: res.data,
  }
})

const setNewPassword = createAppAsyncThunk<
  { path: PathDirectionType; info: string },
  SetNewPassordType
>("auth/setNewPassword", async (arg) => {
  const res = await authApi.SetNewPassword(arg)
  return {
    path: "auth/login",
    info: res.data.info,
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
      .addCase(logout.fulfilled, (state) => {
        state.profile = null
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
      .addCase(me.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
      .addCase(setNewPassword.fulfilled, (state, action) => {
        state.path = action.payload.path
      })
  },
})

export const authReducer = slice.reducer
export const authThunks = {
  register,
  login,
  forgot,
  logout,
  updateProfile,
  me,
  setNewPassword,
}
