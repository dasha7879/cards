import { Grid, Paper, Stack, Typography } from "@mui/material"
import { Header } from "../../common/components/Header/Header"
import { PasswordInput } from "../../common/components/PasswordInput"
import { SuperButton } from "../../common/components/SuperButton"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { authThunks } from "./auth.slice"
import { path } from "../../common/routes/paths"
import { useAppDispatch } from "../../common/hooks"

type FormNewPasswordData = {
  password: string
  resetPasswordToken: string
}

export const NewPasword = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { token } = useParams()
  const tokenForReset = token ? token : ""

  const NewPaswordHandler = (data: FormNewPasswordData) => {
    dispatch(
      authThunks.setNewPassword({
        password: data.password,
        resetPasswordToken: tokenForReset,
      }),
    )
      .unwrap()
      .then(() => navigate(path.LOGIN))
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

  const onSubmit = (data: FormNewPasswordData) => {
    NewPaswordHandler(data)
  }

  return (
    <>
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          <Typography variant="h1" textAlign={"center"}>
            Create new password
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} width={400}>
              <PasswordInput
                name="password"
                register={register}
                text={"Password"}
              />
            </Stack>
            <Typography
              variant="h6"
              style={{
                textAlign: "left",
                padding: "25px 0px 65px 0",
                opacity: 0.5,
              }}
            >
              Create new password and we will send you further instructions to
              email{" "}
            </Typography>
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
