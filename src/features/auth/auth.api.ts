import { instance } from "../../common/api/commonApi"
export type payloadType = {
    email: string,
    password: string
}
export const authApi = {
    register:(payload:payloadType)=>{
        return instance.post('auth/register',payload)
    }
}