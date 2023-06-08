import axios from "axios"
import { instance } from "../../common/api/commonApi"

export const authApi = {
  register: (arg: ArgType) => {
    return instance.post<RegisterResponseType>("auth/register", arg)
  },
  login: (arg: ArgLoginType) => {
    return instance.post<LoginResponseType>("auth/login", arg)
  },
  forgot: (arg: ArgForgotType) => {
    return axios.post<ResponseMeType>(
      "https://neko-back.herokuapp.com/2.0/auth/forgot",
      arg,
      { withCredentials: true },
    )
  },

  me: () => {
    return instance.post<LoginResponseType>("auth/me")
  },
  updateProfile: (arg: UpdateProfileType) => {
    return instance.put<UpdateProfileResponseType>("auth/me", arg)
  },
  logout: () => {
    return instance.delete<ResponseMeType>("auth/me")
  },
  //почему ругается типизация на arg?
  SetNewPassword: (arg: any) => {
    return axios.delete<ResponseMeType>(
      "https://neko-back.herokuapp.com/2.0",
      arg,
    )
  },
  block: (arg: BlockType) => {
    return instance.post<BlockResponseType>("auth/block", arg)
  },
}

export type BlockType = {
  id: string
  blockReason: string
}
export type ArgLoginType = {
  email: string
  password: string
  rememberMe: boolean
}
export type ArgForgotType = {
  email: string
  from?: string
  message: string
}

export type ArgType = Omit<ArgLoginType, "rememberMe">

export type ProfileType = Omit<LoginResponseType, "token" | "tokenDeathTime">

export type RegisterResponseType = {
  addedUser: ProfileType
}
export type UpdateProfileResponseType = {
  updatedUser: ProfileType
}
export type BlockResponseType = {
  user: string
  blockedCardPacksCount: number
}
export type UpdateProfileType = {
  name?: string
  avatar?: string
}
export type ArgSetNewPasswordType = {
  password: string
  resetPasswordToken: string
}

// delete duplicate
export type ResponseMeType = {
  info: string
  error?: string
}

// export type DeleteMeResponseType = {
//   info: string
//   error: string
// }
// export type ForgotResponseType = {
//   info: string
//   error?: string
// }

export type LoginResponseType = {
  created: string
  email: string
  isAdmin: boolean
  name: string
  publicCardPacksCount: number
  rememberMe: boolean
  token: string
  tokenDeathTime: number
  updated: string
  verified: boolean
  __v: number
  _id: string
}
