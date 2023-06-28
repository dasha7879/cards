import { Grid, Paper, Stack, Typography } from "@mui/material"
import { SuperButton } from "../../../../common/components/SuperButton"
import { useAppDispatch } from "../../../../common/hooks"
import { useNavigate } from "react-router-dom"
import { path } from "../../../../common/routes/paths"

export const CheckEmail = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const example = "example@mail.com" //delere hardCode

  const paperStyle = {
    padding: 33,
    minHeight: "55vh",
    maxHeigth: "60vh",
    width: 413,
    margin: "20px auto",
  }

  const backToLogin = () => {
    navigate(path.LOGIN)
  }

  return (
    <>
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
