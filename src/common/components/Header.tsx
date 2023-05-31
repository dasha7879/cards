import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { SuperButton } from "./SuperButton"

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>       
        <Typography variant="h6" component="div" sx={{ flexGrow: 3}}>
            INCUBATOR
          </Typography>
          <SuperButton width="113px" text="Sign In"  borderRadius="30px"/>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
