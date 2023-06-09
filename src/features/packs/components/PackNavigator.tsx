import Box from "@mui/material/Box/Box"
import Typography from "@mui/material/Typography/Typography"
import { useState } from "react"
import { useAppDispatch } from "../../../common/hooks"
import { packsThunks } from "../packs.slice"
import { SuperButton } from "../../../common/components/SuperButton"

type PackNavigatorType = {
  title: string
  buttonText: string
}
export const PackNavigator: React.FC<PackNavigatorType> = ({
  title,
  buttonText,
}) => {
  const dispatch = useAppDispatch()
  const [disabled, setDisabled] = useState<boolean>(false)

  const onclickHandler = () => {
    dispatch(packsThunks.addPack({ name: "NewFolder" }))
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
