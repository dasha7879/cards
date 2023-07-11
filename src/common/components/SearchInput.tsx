import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import InputAdornment from "@mui/material/InputAdornment"
import { ChangeEvent, FC, useEffect, useState } from "react"
import { useDebounce } from "../hooks/useDebounce"
import { useAppDispatch, useAppSelector } from "../hooks"
import { dataActions, dataThunks } from "../../features/packs/packs.slice"
import _ from "lodash"

type PropsType = {
  fullWidth?: boolean
  value?: string
}

export const SearchInput: FC<PropsType> = ({ fullWidth }) => {
  const dispatch = useAppDispatch()
  const params = useAppSelector((state) => state.data.params)
  const [value, setValue] = useState<string | undefined>(params.packName)

  function saveChanges(event: ChangeEvent<HTMLInputElement>) {
    dispatch(dataActions.setParams({ ...params, packName: event.target.value }))
    dispatch(dataThunks.getData({ ...params, packName: event.target.value }))
  }

  useEffect(() => {
    console.log("kuku")
    setValue(params.packName)
  }, [params.packName])

  return (
    <Box marginTop={"20px"}>
      <TextField
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value)
          _.debounce(saveChanges, 500)(event)
        }}
        label="Search"
        fullWidth={fullWidth || false}
        id="fullWidth"
        hiddenLabel
        value={value ? value : ""}
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
