import { Box, Grid, Paper, Stack, Typography, Checkbox } from "@mui/material"
import { EmailInput } from "../../common/components/EmailInput.tsx"
import { Header } from "../../common/components/Header.js"
import { useAppDispatch } from "../../app/hooks"
import { authThunks } from "./auth.slice"
import { Controller, useForm } from "react-hook-form"
import { SuperButton } from "../../common/components/SuperButton.js"
import { PasswordInput } from "../../common/components/PasswordInput.js"

 type FormNewPasswordData = {
  password: string 
}

export const NewPasword = () => {
  const dispatch = useAppDispatch()

  const NewPaswordHandler = () => {
    // dispatch(
    //   authThunks.login({
    //     password: "MikSma@gmail.com",
    //     email: "1qazxcvBG90",
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
  } = useForm<FormNewPasswordData>({
    defaultValues: {
      password: "",
    },
  })

  const onSubmit = (data:FormNewPasswordData) => {
  NewPaswordHandler()
    console.log(data)
  }

  return (
    <>
      <Header />
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          <Typography variant="h1" textAlign={"center"}>
          Create new password
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} width={400}>
            <PasswordInput name="newPassword" register={register} text={"Password"} />
            </Stack>
            <Typography
              variant="h6"
              style={{ textAlign: "left", padding: "25px 0px 65px 0", opacity: 0.5}}
            >
Create new password and we will send you further instructions to email            </Typography>
            <Stack spacing={3} alignItems="center">
              <SuperButton
                width={"347px"}
                text={"Create new password"}
                borderRadius="30px"
                type="submit"
              />
            </Stack>
          </form>
        </Paper>
      </Grid>
    </>
  )
}
