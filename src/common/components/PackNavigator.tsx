import Box from "@mui/material/Box/Box"
import { SuperButton } from "./SuperButton"
import Typography from "@mui/material/Typography/Typography"
import { useAppDispatch } from "../hooks"
import { packThunk } from "../../features/packs/packs.slice"
import { useState } from "react"

type PackNavigatorType = {
  title: string
  buttonText: string
}
export const PackNavigator: React.FC<PackNavigatorType> = ({
  title,
  buttonText,
}) => {
  const dispatch = useAppDispatch()
  const [disabled,setDisabled] = useState<boolean>(false)

  const onclickHandler = () => {
    setDisabled(true)
    dispatch(packThunk.addNewCardPack({ name: "NewFolder" }))
    dispatch(packThunk.getPacks({})).then(()=>setDisabled(false))
   

  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      margin="0 auto"
      paddingTop="20px"
    >
      <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
        {title}
      </Typography>
      <SuperButton
        onClick={onclickHandler}
        text={buttonText}
        borderRadius="30px"
        width="175"
        disabled= {disabled}
      />
    </Box>
  )
}
