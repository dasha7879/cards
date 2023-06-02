import IconButton from "@mui/material/IconButton"
import { useState } from "react"
import { UseFormRegister } from "react-hook-form"
import { FormData } from "../../features/auth/Login"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"

type PasswordInputType = {
  name: "password"
  register: UseFormRegister<FormData>
}
export const Password: React.FC<PasswordInputType> = ({ name, register }) => {
  const [visibilityEye, setVisibilityEye] = useState<boolean>(false)
  const setPasswordVisible = () => {
    setVisibilityEye(!visibilityEye)
  }

  return (
    <Box sx={{ mt: "30px", position: "relative" }}>
      <TextField
        {...register(name)}
        // error={!!errors[name]}
        // helperText={`${errors[name] ? errors[name]?.message : ''}`}
        label={"Password"}
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
