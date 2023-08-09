import Box from "@mui/material/Box/Box"
import Typography from "@mui/material/Typography/Typography"
import { useState } from "react"
import { useAppDispatch } from "../../../common/hooks"
import { dataThunks } from "../packs.slice"
import { SuperButton } from "../../../common/components/SuperButton"
import { path } from "../../../common/routes/paths"
import { useNavigate } from "react-router-dom"

type PackNavigatorType = {
  title: string
  buttonText: string
}
export const PackNavigator: React.FC<PackNavigatorType> = ({
  title,
  buttonText,
}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [disabled, setDisabled] = useState<boolean>(true)

  const onclickHandler = () => {
    setDisabled(false)
    // dispatch(dataThunks.addPack({ name: "NewFolder" }))
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
