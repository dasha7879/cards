import { Grid, Paper, Stack, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import { EmailInput } from "../../../common/components/EmailInput.tsx.js"
import { SuperButton } from "../../../common/components/SuperButton.js"
import { authThunks } from "../auth.slice.js"
import { useNavigate } from "react-router-dom"
import { path } from "../../../common/routes/paths.js"
import { useAppDispatch } from "../../../common/hooks/useAppDispatch.js"

export type FormForgotData = {
  email: string
}

export const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const ForgotPasswordHandler = (formData: FormForgotData) => {
    const payload = {
      email: formData.email,
      message: `<div style="background-color: lime; padding: 15px">
      password recovery link: 
      <a href='http://localhost:5173/#/auth/set-new-password/$token$'>
      link</a>
      </div>`,
    }
    dispatch(authThunks.forgot(payload))
      .unwrap()
      .then(() => {
        navigate(path.CHECK_EMAIL)
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
  } = useForm<FormForgotData>({
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (data: FormForgotData) => {
    ForgotPasswordHandler(data)
  }

  return (
    <>
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
              style={{
                textAlign: "left",
                padding: "25px 0px 65px 0",
                opacity: 0.5,
              }}
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
              <Typography
                variant="h6"
                style={{ opacity: 0.5, fontWeight: 600 }}
              >
                Did you remember your password?
              </Typography>
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
