import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  Checkbox,
} from "@mui/material"
import { EmailInput } from "../../common/components/EmailInput.tsx"
import { Header } from "../../common/components/Header.js"
import { Password } from "../../common/components/PasswordInput.js"
import { useAppDispatch } from "../../app/hooks"
import { authThunks } from "./auth.slice"
import { Controller, useForm } from "react-hook-form"
import { SuperButton } from "../../common/components/SuperButton.js"

export type FormData = {
  email: string
  password: string
  rememberMe: boolean
}

export const Login = () => {
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

  const paperStyle = {
    padding: 33,
    minHeight: "55vh",
    maxHeigth: "60vh",
    width: 413,
    margin: "20px auto",
  }

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <>
      <Header />
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          <Typography variant="h1" textAlign={"center"}>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} width={400}>
              <EmailInput name="email" register={register} />
              <Password name="password" register={register} />
            </Stack>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Controller
                name="rememberMe"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              <Typography variant="h6">Remember Me</Typography>
            </Box>
            <Typography
              variant="h6"
              style={{ textAlign: "right", padding: "25px 20px 77px 0" }}
            >
              Forgot the password?
            </Typography>
            <Stack spacing={3} alignItems="center">
              <SuperButton
                width={"327"}
                text={"Login"}
                borderRadius="30px"
                type="submit"
              />
              <Typography variant="h6">Don't have account?</Typography>
              <Typography variant="h6">
                <a href="#">Sign Up</a>
              </Typography>
            </Stack>
          </form>
        </Paper>
      </Grid>
    </>
  )
}
