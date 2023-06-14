import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"

type ShowPacksCardsPropsType = {
  disabled?: boolean
  onClick: () => void
  onMy: boolean
  setOnMy: (value: boolean) => void
}
export const ShowPacksCards:React.FC<ShowPacksCardsPropsType> = ({disabled,onClick,onMy,setOnMy}) => {
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
        <Button onClick={()=>alert("My")} >
          My
        </Button>
        <Button onClick={()=>alert("All")}>
          All
        </Button>
      </ButtonGroup>
    </Box>
  )
}
