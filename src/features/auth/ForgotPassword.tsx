import { Box, Grid, Paper, Stack, Typography, Checkbox } from "@mui/material"
import { EmailInput } from "../../common/components/EmailInput.tsx"
import { Header } from "../../common/components/Header.js"
import { useAppDispatch } from "../../app/hooks"
import { authThunks } from "./auth.slice"
import { Controller, useForm } from "react-hook-form"
import { SuperButton } from "../../common/components/SuperButton.js"
import { PasswordInput } from "../../common/components/PasswordInput.js"

export type FormData = {
  email: string
  password: string
  rememberMe: boolean
}

export const ForgotPassword = () => {
  const dispatch = useAppDispatch()

  const ForgotPasswordHandler = () => {
    // dispatch(
    //   authThunks.login({
    //     email: "MikSma@gmail.com",
    //     password: "1qazxcvBG90",
    //     rememberMe: true,
    //   }),
    // )
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
    ForgotPasswordHandler()
    console.log(data)
  }

  return (
    <>
      <Header />
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          <Typography variant="h1" textAlign={"center"}>
            Forgot your password?
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} width={400}>
              <EmailInput name="email" register={register} />
            </Stack>
            <Typography
              variant="h6"
              style={{ textAlign: "left", padding: "25px 0px 65px 0", opacity: 0.5}}
            >
              Enter your email address and we will send you further instructions
            </Typography>
            <Stack spacing={3} alignItems="center">
              <SuperButton
                width={"347px"}
                text={"Send Instructions"}
                borderRadius="30px"
                type="submit"
              />
              <Typography variant="h6" style={{opacity: 0.5, fontWeight:600}}>Did you remember your password?</Typography>
              <Typography variant="h6">
                <a href="#">Try logging in</a>
              </Typography>
            </Stack>
          </form>
        </Paper>
      </Grid>
    </>
  )
}
