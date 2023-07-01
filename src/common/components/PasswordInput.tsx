import IconButton from "@mui/material/IconButton"
import { useState } from "react"
import { UseFormRegister } from "react-hook-form"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"

type PasswordInputType = {
  name: "password" | "confirmPassword" | "newPassword"
  register: UseFormRegister<any>
  text: string
}
export const PasswordInput: React.FC<PasswordInputType> = ({
  name,
  register,
  text,
}) => {
  const [visibilityEye, setVisibilityEye] = useState<boolean>(false)
  const setPasswordVisible = () => {
    setVisibilityEye(!visibilityEye)
  }

  return (
    <Box sx={{ mt: "30px", position: "relative" }}>
      <TextField
        {...register(name)}
        label={text}
        type={`${visibilityEye ? "text" : "password"}`}
        variant="standard"
        sx={{ opacity: 0.6 }}
        fullWidth={true}
      />
      <Box sx={{ position: "absolute", right: "0", top: "10px" }}>
        <IconButton onClick={setPasswordVisible}>
          {visibilityEye ? <VisibilityIcon /> : <VisibilityOff />}
        </IconButton>
      </Box>
    </Box>
  )
}
