import TextField from "@mui/material/TextField"
import { UseFormRegister } from "react-hook-form"
import { FormData } from "../../features/auth/Login"



type EmailInputType = {
  name: "email"
  register: UseFormRegister<FormData>
}

export const EmailInput:React.FC<EmailInputType> = ({name,register}) => {
  return <TextField  id="standard-basic" label="Email" variant="standard" sx={{opacity:0.6}} {...register(name)}/>
}

