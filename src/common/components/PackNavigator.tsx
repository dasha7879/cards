import Box from "@mui/material/Box/Box"
import { SuperButton } from "./SuperButton"
import Typography from "@mui/material/Typography/Typography"
import { useState } from "react"
import { useAppDispatch } from "../hooks"
import { packThunk } from "../../features/packs/packs.slice"

type PackNavigatorType = {
    title: string
    buttonText: string
}
export const PackNavigator:React.FC<PackNavigatorType> =({title,buttonText})=>{
    const dispatch = useAppDispatch()
    // const packs =  useAppSelector((state)=>state.)

const onclickHandler =()=> {
    dispatch(packThunk.addNewCardPack({name: 'hihi'}))
}

    const[value,setValue] = useState(true)
   if(value){
    return (
        <Box display="flex" flexDirection={"row"} justifyContent={"space-between"} width={'100%'} margin={'0 auto'}>
        <Typography sx={{fontSize: "22px", fontWeight: "600"}}>{title}</Typography>
        <SuperButton onClick={onclickHandler} text={buttonText} borderRadius="30px" width="175"/>
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