import Box from "@mui/material/Box/Box"
import { SuperButton } from "./SuperButton"
import Typography from "@mui/material/Typography/Typography"
import { useAppDispatch } from "../hooks"
import { useState } from "react"
import { packsThunks } from "../../features/packs/packs.slice"
import { useNavigate } from "react-router-dom"
import { path } from "../routes/paths"

type PackNavigatorType = {
  title: string
  buttonText: string
}
export const PackNavigator: React.FC<PackNavigatorType> = ({
  title,
  buttonText,
}) => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()//потом убрать мб

  // const [disabled, setDisabled] = useState<boolean>(false)

  // const onclickHandler = () => {
  //   dispatch(packsThunks.addPack({ name: "NewFolder" }))
  // }
  const onclickHandler = () => {
    navigate(path.NEWCARDPACK)
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
      />
    </Box>
  )
}
