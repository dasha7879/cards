import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import InputAdornment from "@mui/material/InputAdornment"
import { ChangeEvent, FC, useEffect, useState } from "react"
import { useDebounce } from "../hooks/useDebounce"
import { useAppDispatch, useAppSelector } from "../hooks"
import { packActions, packsThunks } from "../../features/packs/packs.slice"
import _ from "lodash"

type PropsType = {
  fullWidth?: boolean
  value?: string
}

export const SearchInput: FC<PropsType> = ({ fullWidth }) => {
  const dispatch = useAppDispatch()
  const params = useAppSelector((state) => state.packs.params)

  function saveChanges(event: ChangeEvent<HTMLInputElement>) {
    dispatch(packActions.setParams({ ...params, packName: event.target.value }))
    dispatch(packsThunks.getPacks({ ...params, packName: event.target.value }))
  }

  return (
    <Box marginTop={"20px"}>
      <TextField
        onChange={_.debounce(saveChanges, 500)}
        label="Search"
        fullWidth={fullWidth || false}
        id="fullWidth"
        hiddenLabel
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}
