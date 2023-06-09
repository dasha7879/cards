import { Grid, Paper, Stack, Typography } from "@mui/material"
import { EmailInput } from "../../../common/components/EmailInput.tsx.js"
import { useForm } from "react-hook-form"
import { SuperButton } from "../../../common/components/SuperButton.js"
import { PasswordInput } from "../../../common/components/PasswordInput.js"
import { authThunks } from "../auth.slice.js"
import { Link, useNavigate } from "react-router-dom"
import { path } from "../../../common/routes/paths.js"
import { useAppDispatch } from "../../../common/hooks/index.js"

export type FormRegistrationData = {
  email: string
  password: string
  confirmPassword: string
}
export const Registration = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const registrationHandler = (formData: FormRegistrationData) => {
    dispatch(authThunks.register(formData))
      .unwrap()
      .then((res) => {
        navigate(path.LOGIN)
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
  } = useForm<FormRegistrationData>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = (data: FormRegistrationData) => {
    registrationHandler(data)
  }

  return (
    <>
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
                text="Password"
              />
              <PasswordInput
                name="confirmPassword"
                register={register}
                text="Confirm password"
              />
            </Stack>
            <Stack spacing={2} alignItems="center" paddingTop={8}>
              <SuperButton
                width={"347px"}
                text={"Sign up"}
                borderRadius="30px"
                type="submit"
              />
              <Typography
                variant="h6"
                style={{ textAlign: "right", padding: "25px 20px 77px 0" }}
              >
                Already have an Account?
              </Typography>
              <Typography variant="h6">
                <Link to={path.LOGIN}>Sign In</Link>
              </Typography>
            </Stack>
          </form>
        </Paper>
      </Grid>
    </>
  )
}
