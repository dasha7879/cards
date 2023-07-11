import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider/Slider"
import Typography from "@mui/material/Typography/Typography"
import { useEffect, useState } from "react"
import _ from "lodash"
import { useAppDispatch, useAppSelector } from "../hooks"
import { dataThunks, dataActions } from "../../features/packs/packs.slice"
import IconButton from "@mui/material/IconButton/IconButton"
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff"
type NumberOfCardsType = {}

export const NumberOfCards: React.FC<NumberOfCardsType> = ({}) => {
  const state = useAppSelector((state) => state.data)
  const { minCardsCount, maxCardsCount, params } = state
  const { min, max } = params
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

  useEffect(() => {
    console.log("lala")
    dispatch(
      dataActions.setParams({
        ...params,
        min: `${minCardsCount}`,
        max: `${maxCardsCount}`,
      }),
    )
  }, [minCardsCount, maxCardsCount])

  useEffect(() => {
    setValue([Number(min), Number(max)])
  }, [max, min])

  const saveChanges = () => {
    dispatch(
      dataActions.setParams({
        ...params,
        min: `${value[0]}`,
        max: `${value[1]}`,
      }),
    )
    dispatch(
      dataThunks.getData({
        ...params,
        min: `${value[0]}`,
        max: `${value[1]}`,
      }),
    )
  }

  let resultDebounced = _.debounce(saveChanges, 500)

  const handleChange = (event: Event, newValue: number[] | number) => {
    setValue(newValue as number[])
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
          <Typography sx={typographySx}>{`${value[0]}`}</Typography>
        </Box>
        <Slider
          max={maxCardsCount}
          min={0}
          sx={{ m: "0 20px" }}
          value={value}
          onChange={handleChange}
          onChangeCommitted={resultDebounced}
        />
        <Box sx={boxSx}>
          <Typography sx={typographySx}>{`${value[1]}`}</Typography>
        </Box>
        {/* <IconButton
          sx={{ width: "50px" }}
          onClick={onClickHandler}
        >
          <FilterAltOffIcon />
        </IconButton> */}
      </Box>
    </Box>
  )
}
