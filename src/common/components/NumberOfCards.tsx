import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider/Slider"
import Typography from "@mui/material/Typography/Typography"
import { useEffect, useState } from "react"
import _ from "lodash"
import { useAppDispatch, useAppSelector } from "../hooks"
import { packsThunks } from "../../features/packs/packs.slice"

type NumberOfCardsType = {}

export const NumberOfCards: React.FC<NumberOfCardsType> = ({}) => {
  const maxCardsCount = useAppSelector((state) => state.packs.maxCardsCount)
  const minCardsCount = useAppSelector((state) => state.packs.minCardsCount)

  const [value, setValue] = useState<number[]>([minCardsCount, maxCardsCount])
  const dispatch = useAppDispatch()

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

  const saveChanges = (event: Event, newValue: number[]) => {
    setValue(newValue as number[])
  }

  let resultDebounced = _.debounce(saveChanges, 500)

  const handleChange = (event: Event, newValue: number[]) => {
    resultDebounced(event, newValue)
  }

  useEffect(() => {
    dispatch(packsThunks.getPacks({ min: `${value[0]}`, max: `${value[1]}` }))
  }, [handleChange])

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
          <Typography sx={typographySx}>{`${value[0]}`}</Typography>
        </Box>
        <Slider
          max={10}
          min={0}
          sx={{ m: "0 20px" }}
          value={value}
          onChange={handleChange} // think about type
        />
        <Box sx={boxSx}>
          <Typography sx={typographySx}>{`${value[1]}`}</Typography>
        </Box>
      </Box>
    </Box>
  )
}
