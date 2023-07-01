import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider/Slider"
import Typography from "@mui/material/Typography/Typography"

type NumberOfCardsType = {
  disabled?: boolean
  onChange?: (minCardsCount: string, maxCardsCount: string) => void
  minMax?: number[]
  setMinMax?: (value: number[]) => void
}

const handleMouseUp = () => {
  console.log("MouseOn")
}
const handleChange = () => {
  console.log("OnChange")
}

export const NumberOfCards: React.FC<NumberOfCardsType> = ({
  disabled,
  onChange,
  minMax,
  setMinMax,
}) => {
  const boxSx = {
    width: "63px",
    height: "36px",
    border: "1px solid rgba(000, 000, 000, 0.3)",
    borderRadius: "3px",
    padding: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  const typographySx = {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
    textAlign: "center",
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
        Number of cards
      </Typography>
      <Box sx={{ width: 300, display: "flex", alignItems: "center" }}>
        <Box sx={boxSx}>
          <Typography sx={typographySx}>{1}</Typography>
        </Box>
        <Slider
          value={minMax}
          onMouseUp={handleMouseUp}
          onChange={handleChange}
          sx={{ m: "0 20px" }}
          disabled={disabled}
        />
        <Box sx={boxSx}>
          <Typography sx={typographySx}>{3}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
