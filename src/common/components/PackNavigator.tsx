import Box from "@mui/material/Box/Box"
import { SuperButton } from "./SuperButton"
import Typography from "@mui/material/Typography/Typography"

type PackNavigatorType = {
    title: string
    buttonText: string
}
export const PackNavigator:React.FC<PackNavigatorType> =({title,buttonText})=>{
    return (
        <Box display="flex" flexDirection={"row"} justifyContent={"space-between"}>
            <Typography sx={{fontSize: "22px", fontWeight: "600"}}>{title}</Typography>
            <SuperButton text={buttonText} borderRadius="30px" width="175"/>
        </Box>
    )
}