import {
  Avatar,
  Badge,
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material"
import { useAppDispatch } from "../../app/hooks"
import { Header } from "../../common/components/Header"
import { SuperButton } from "../../common/components/SuperButton"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { EditableProfileTitle } from "../../common/components/EditableProfileTitle"
import LocalSeeOutlinedIcon from "@mui/icons-material/LocalSeeOutlined"

export const Profile = () => {
  const dispatch = useAppDispatch()

  const example = "example@mail.com"

  const paperStyle = {
    padding: 33,
    minHeight: "55vh",
    maxHeigth: "60vh",
    width: 413,
    margin: "20px auto",
  }

  const onClickProfile = () => {
    console.log("backToLogin")
  }

  return (
    <>
      <Header />
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          <Typography variant="h1" textAlign={"center"}>
            Personal Information
          </Typography>
          <Box display="flex" justifyContent="center">
            <Badge
              overlap={"circular"}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <IconButton
                  component={"label"}
                  disableRipple={true}
                  sx={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #fff",
                    bgcolor: "#808080",
                  }}
                >
                  <LocalSeeOutlinedIcon
                    sx={{ fontSize: "16px", color: "#FFF" }}
                  />
                  <input type={"file"} hidden accept="image/*" />
                </IconButton>
              }
            >
              <Avatar
                alt="user avatar"
                src="/common/assets/photo_2023-01-14_16-14-57.jpg"
                sx={{ width: "96px", height: "96px", mt: "30px" }}
              />
            </Badge>
          </Box>
          <Typography variant="h1" textAlign={"center"}>
            img
          </Typography>
          <EditableProfileTitle />
          <Stack spacing={2} alignItems="center" paddingTop={8}>
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                padding: "25px 20px 77px 0",
                opacity: 0.5,
              }}
            >
              {`${example}`}
            </Typography>
            <SuperButton
              startIcon={<ArrowBackIcon />}
              text={"Log out"}
              borderRadius="30px"
              color="secondary"
              onClick={onClickProfile}
            />
          </Stack>
        </Paper>
      </Grid>
    </>
  )
}
