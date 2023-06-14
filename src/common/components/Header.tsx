import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { SuperButton } from "./SuperButton"
import { Container } from "@mui/material"
// если человек авторизован , то показать ему хедер и его именем, если нет , то AppHeader

export const Header = () => {
  return (
      <AppBar position="static" color="secondary">
        <Container maxWidth = 'lg'  >
        <Toolbar sx= {{maxWidth: "1200px"}}>       
        <Typography variant="h6" component="div" sx={{ flexGrow: 3}}>
            INCUBATOR
          </Typography>
          <SuperButton width="113px" text="Sign In"  borderRadius="30px"/>
        </Toolbar>
        </Container>
      </AppBar>
  )
}
