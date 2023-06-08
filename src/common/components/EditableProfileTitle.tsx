import BorderColorIcon from "@mui/icons-material/BorderColor"
import IconButton from "@mui/material/IconButton"
import TextField from "@mui/material/TextField/TextField"
import Typography from "@mui/material/Typography"
import { ChangeEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { authThunks } from "../../features/auth/auth.slice"
import { Box, Stack } from "@mui/material"

export const EditableProfileTitle = () => {
  const dispatch = useAppDispatch()
  const name = useAppSelector((state) => state.auth.profile?.name)

  const [userName, setUserName] = useState("Darya")
  const [editMode, setEditMode] = useState<boolean>(false)

  const onEditMode = () => {
    setEditMode(true)
  }
  const onChangeName = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setUserName(e.currentTarget.value)
  }

  const offChangeMode = () => {
    dispatch(authThunks.updateProfile({ name: userName }))
    setEditMode(false)
  }

  return (
    <div style={{ marginTop: 17 }}>
      {!editMode ? (
        <Typography
          style={{
            width: 43,
            height: 24,
            font: "Montserrat",
            fontSize: "20px",
            fontWeight: "500px",
            lineHeight: "24px",
            display: "flex",
            margin: "0 auto",
          }}
        >
          {name}
          <IconButton onClick={onEditMode}>
            <BorderColorIcon sx={{ color: "#000", fontSize: "20px" }} />
          </IconButton>
        </Typography>
      ) : (
        <Stack spacing={2} width={400}>
          <TextField
            id="standard-basic"
            label="Nickname"
            variant="standard"
            sx={{ opacity: 0.6 }}
            value={userName}
            onChange={onChangeName}
            onBlur={offChangeMode}
          />
        </Stack>
      )}
    </div>
  )
}
