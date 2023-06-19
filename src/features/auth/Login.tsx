import { Box, Grid, Paper, Stack, Typography, Checkbox } from "@mui/material"
import { EmailInput } from "../../common/components/EmailInput.tsx"
import { Header } from "../../common/components/Header"
import { authThunks } from "./auth.slice"
import { Controller, useForm } from "react-hook-form"
import { SuperButton } from "../../common/components/SuperButton"
import { PasswordInput } from "../../common/components/PasswordInput"
import { path } from "../../common/routes/paths.js"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useAppDispatch } from "../../common/hooks/useAppDispatch"

export type FormData = {
  email: string
  password: string
  rememberMe: boolean
}

export const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const loginHandler = (data: FormData) => {
    dispatch(authThunks.login(data))
      .unwrap()
      .then(() => {
        toast.success("Вы успешно залогинились")
        navigate(path.PROFILE)
      })
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
    loginHandler(data)
  }

  return (
    <>
      {/* <Header /> */}
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          <Typography variant="h1" textAlign={"center"}>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} width={400}>
              <EmailInput name="email" register={register} />
              <PasswordInput
                name="password"
                register={register}
                text={"Password"}
              />
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
              <Link to={path.FORGOT_PASSWORD}>Forgot the password?</Link>
            </Typography>
            <Stack spacing={3} alignItems="center">
              <SuperButton
                width={"347px"}
                text={"Sign in"}
                borderRadius="30px"
                type="submit"
              />
              <Typography variant="h6">Don't have account?</Typography>
              <Typography variant="h6">
                <Link to={path.REGISTRATION}>Sign Up</Link>
              </Typography>
            </Stack>
          </form>
        </Paper>
      </Grid>
    </>
  )
}
