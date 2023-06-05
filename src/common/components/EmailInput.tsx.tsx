import TextField from "@mui/material/TextField"
import { UseFormRegister } from "react-hook-form"



type EmailInputType = {
  name: "email"
  register: UseFormRegister<any>
}

export const EmailInput:React.FC<EmailInputType> = ({name,register}) => {
  return <TextField  id="standard-basic" label="Email" variant="standard" sx={{opacity:0.6}} {...register(name)}/>
}

