import { useAppSelector } from "../../hooks"
import { profileSelector } from "../../../app/app.selectors"
import { AppHeader } from "./AppHeader"
import { ProfileHeader } from "./ProfileHeader"

export const Header = () => {
  const profile = useAppSelector(profileSelector)
  return (
    <>
    {!profile ? <AppHeader/>:<ProfileHeader/>}
    </>
    // <AppBar position="static" color="secondary">
    //   <Container maxWidth="lg">
    //     <Toolbar sx={{ maxWidth: "1200px" }}>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
    //         INCUBATOR
    //       </Typography>
    //       {!profile ? (
    //         <SuperButton width="113px" text="Sign In" borderRadius="30px" />
    //       ) : (
    //         <Box
    //           width="81px"
    //           display="flex"
    //           justifyContent="space-between"
    //           flexDirection="row"
    //           alignItems={"center"}
    //         >
    //           <div>Name</div>
    //           <Avatar
    //             alt="user avatar"
    //             src={img}
    //             sx={{ width: "36px", height: "36px" }}
    //           />
    //         </Box>
    //       )}
    //     </Toolbar>
    //   </Container>
    // </AppBar>
  )
}
