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
    return axios.post<ForgotResponseType>("https://neko-back.herokuapp.com/2.0/auth/forgot", arg, {withCredentials:true})
  }
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

export type ForgotResponseType={
    info: string;
    error?: string;
}
