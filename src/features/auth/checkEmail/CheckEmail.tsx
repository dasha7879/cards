import {Grid, Paper, Stack, Typography } from "@mui/material"
import { Header } from "../../../common/components/Header.js"
import { useAppDispatch } from "../../../app/hooks.js"
import { SuperButton } from "../../../common/components/SuperButton.js"

export type FormData = {
  email: string
  password: string
  rememberMe: boolean
}

export const CheckEmail = () => {
  const dispatch = useAppDispatch()
   
const example = 'example@mail.com'

  const paperStyle = {
    padding: 33,
    minHeight: "55vh",
    maxHeigth: "60vh",
    width: 413,
    margin: "20px auto",
  }

  const backToLogin = ()=>{
    console.log('backToLogin'); 
  }

  return (
    <>
      <Header />
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          <Typography variant="h1" textAlign={"center"}>
            Check Email
          </Typography>
          <Stack spacing={2} alignItems="center" paddingTop={8}>
            <Typography variant="h1" textAlign={"center"}>
              img
            </Typography>
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                padding: "25px 20px 77px 0",
                opacity: 0.5,
              }}
            >
              {`We've sent an Email with instructions to ${example}`}
            </Typography>
            <SuperButton
              width={"347px"}
              text={"Back to login"}
              borderRadius="30px"
              onClick={backToLogin}
            />
          </Stack>
        </Paper>
      </Grid>
    </>
  )
}
