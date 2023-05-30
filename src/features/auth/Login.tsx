import { useAppDispatch } from "../../app/hooks"
import { authThunks } from "./auth.slice"
import { Controller, useForm } from "react-hook-form"
import "./login.css"
import Checkbox from "@mui/material/Checkbox"
import { Box, Grid, Paper, TextField, styled } from "@mui/material"

type FormData = {
  email: string
  password: string
  checkbox: boolean
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const Login = () => {
  console.log("form")
  const dispatch = useAppDispatch()
  const loginHandler = () => {
    dispatch(
      authThunks.login({
        email: "MikSma@gmail.com",
        password: "1qazxcvBG90",
        rememberMe: true,
      }),
    )
  }

  const defaultValues = {
    AntdCheckbox: true,
  }
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: {
      checkbox: false,
    },
  })
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 413,
          height: 552,
        },
      }}
    >
      <form onSubmit={onSubmit}>
        <label>email</label>
        <input aria-label="email" type="text" {...register("email")} />
        <label>password</label>
        <input aria-label="Password" type="text" {...register("password")} />
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        />
        <span style={{ color: "white" }}>Remember me</span>
        <div style={{ color: "white" }}>Forot password</div>
        <input onClick={loginHandler} type="submit" value={"Sign In"} />
        <div style={{ color: "white" }}>Don't have account</div>
        <a href="#">Sign Up</a>
      </form>
    </Box>
  )
}
