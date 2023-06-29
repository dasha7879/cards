import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"

type ShowPacksCardsPropsType = {
  onClickMy: () => void
  onClickAll: () => void
}

export const ShowPacksCards: React.FC<ShowPacksCardsPropsType> = ({
  onClickMy,
  onClickAll,
}) => {
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
        <Button onClick={onClickMy}>My</Button>
        <Button onClick={onClickAll}>All</Button>
      </ButtonGroup>
    </Box>
  )
}
