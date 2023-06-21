import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { Avatar, Container } from "@mui/material"
import img from "../../../common/assets/photo_2023-01-14_16-14-57.jpg"
import { Link } from "react-router-dom"
import { path } from "../../routes/paths"

export const ProfileHeader = () => {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="lg">
        <Toolbar sx={{ maxWidth: "1200px" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            INCUBATOR
          </Typography>
          <Box
            width="81px"
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            alignItems={"center"}
          >
            <Link to={path.PROFILE}>Name</Link>
            <Avatar
              alt="user avatar"
              src={img}
              sx={{ width: "36px", height: "36px" }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
