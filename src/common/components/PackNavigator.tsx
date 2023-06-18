import Box from "@mui/material/Box/Box"
import { SuperButton } from "./SuperButton"
import Typography from "@mui/material/Typography/Typography"
import { useState } from "react"

type PackNavigatorType = {
    title: string
    buttonText: string
}
export const PackNavigator:React.FC<PackNavigatorType> =({title,buttonText})=>{
    const[value,setValue] = useState(false)
   if(value){
    return (
        <Box display="flex" flexDirection={"row"} justifyContent={"space-between"} width={'100%'} margin={'0 auto'}>
        <Typography sx={{fontSize: "22px", fontWeight: "600"}}>{title}</Typography>
        <SuperButton text={buttonText} borderRadius="30px" width="175"/>
    </Box>
    )
   }else{ 
    return (
    <Box display="flex" flexDirection={"row"} justifyContent={"space-between"} width={'100%'} margin={'0 auto'}>
    <Typography sx={{fontSize: "22px", fontWeight: "600"}}>{title}</Typography>
</Box>
)

   }
   
}