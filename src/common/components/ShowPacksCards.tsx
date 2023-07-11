import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import { useAppSelector, useAppState } from "../hooks"

type ShowPacksCardsPropsType = {
  onClickMy: () => void
  onClickAll: () => void
}

export const ShowPacksCards: React.FC<ShowPacksCardsPropsType> = ({
  onClickMy,
  onClickAll,
}) => {
  const id = useAppSelector((state) => state.data.params.user_id)

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontWeight: "500", fontSize: "16px", mb: "8px" }}>
        Show packs cards
      </Typography>
      <ButtonGroup variant="outlined">
        <Button onClick={onClickMy} disabled={!!id}>
          My
        </Button>
        <Button onClick={onClickAll} disabled={!id}>
          All
        </Button>
      </ButtonGroup>
    </Box>
  )
}
