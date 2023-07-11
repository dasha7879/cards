import React, { memo } from "react"
import Box from "@mui/material/Box"
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff"
import IconButton from "@mui/material/IconButton"
import { useAppDispatch, useAppSelector } from "../hooks"
import { dataActions, dataThunks } from "../../features/packs/packs.slice"

type ClearFilterPropsType = {
  disabled?: boolean
}
export const ClearFilter: React.FC<ClearFilterPropsType> = memo(
  ({ disabled }) => {
    const dispatch = useAppDispatch()
    const state = useAppSelector((state) => state.data)
    const { minCardsCount, maxCardsCount, params } = state
    const boxSx = {
      width: "36px",
      height: "36px",
      border: "1px solid rgba(000, 000, 000, 0.3)",
      borderRadius: "3px",
      padding: "3px",
      display: "flex",
      justifyContent: "center",
      marginTop: "22px",

      "&:hover": {
        bgcolor: "rgba(000, 000, 000, 0.13)",
      },
      overflow: "hidden",
    }

    const onClickHandler = () => {
      dispatch(
        dataActions.setParams({
          ...params,
          packName: undefined,
          min: minCardsCount.toString(),
          max: maxCardsCount.toString(),
          sortPacks: undefined,
          page: undefined,
          pageCount: undefined,
          user_id: undefined,
          block: undefined,
        }),
      )

      dispatch(
        dataThunks.getData({
          ...params,
          packName: undefined,
          min: "0",
          max: "4",
          sortPacks: undefined,
          page: undefined,
          pageCount: undefined,
          user_id: undefined,
          block: undefined,
        }),
      )
    }

    return (
      <Box sx={boxSx}>
        <IconButton
          sx={{ width: "50px" }}
          onClick={onClickHandler}
          disabled={disabled}
        >
          <FilterAltOffIcon />
        </IconButton>
      </Box>
    )
  },
)
