import {
  Box,
  Grid,
  Paper,
  TextField,
  styled,
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

type FormData = {
  email: string
  password: string
  checkbox: boolean
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export const Login = () => {
//

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         "& > :not(style)": {
//           m: 1,
//           width: 413,
//           height: 552,
//         },
//       }}
//     >
//       <form onSubmit={onSubmit}>
//         <label>email</label>
//         <input aria-label="email" type="text" {...register("email")} />
//         <label>password</label>
//         <input aria-label="Password" type="text" {...register("password")} />
//         <Controller
//           name="checkbox"
//           control={control}
//           rules={{ required: true }}
//           render={({ field }) => <Checkbox {...field} />}
//         />
//         <span style={{ color: "white" }}>Remember me</span>
//         <div style={{ color: "white" }}>Forot password</div>
//         <input onClick={loginHandler} type="submit" value={"Sign In"} />
//         <div style={{ color: "white" }}>Don't have account</div>
//         <a href="#">Sign Up</a>
//       </form>
//     </Box>
//   )
// }

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
    height: "55vh",
    width: 413,
    margin: "20px auto",
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
    <>
      <Header />
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          <Typography variant="h1" textAlign={"center"}>
            Sign In
          </Typography>
          <form onSubmit={onSubmit}>
            <Stack spacing={2} width={400}>
              <EmailInput {...register("email")} />
              <Password {...register("password")} />
            </Stack>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Checkbox {...field} />}
              />
              <Typography variant="h6">Remember Me</Typography>
            </Box>
            <Typography variant="h6" style={{ textAlign: "right" , padding: '25px 20px 77px 0'}}>
              Forgot the password?
            </Typography>
            <Stack spacing={3} alignItems="center">
              <SuperButton width={"347px"} text={"Sign In"}  borderRadius="30px" onClick={loginHandler}/>
              <Typography variant="h6" >
              Don't have account?
            </Typography>
              <Typography variant="h6" >
              <a href="#">Sign Up</a>
            </Typography>
            </Stack>
          </form>
        </Paper>
      </Grid>
    </>
  )
}
