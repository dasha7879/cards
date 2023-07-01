import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import InputAdornment from "@mui/material/InputAdornment"
import { ChangeEvent, FC, useEffect, useState } from "react"
import { useDebounce } from "../hooks/useDebounce"
import { useAppDispatch } from "../hooks"
import { packsThunks } from "../../features/packs/packs.slice"

type PropsType = {
  fullWidth?: boolean
}

export const SearchInput: FC<PropsType> = ({ fullWidth }) => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>("")
  const debouncedValue = useDebounce<string>(value, 500)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  // Fetch API (optional)
  useEffect(() => {
    dispatch(packsThunks.getPacks({ packName: debouncedValue }))
  }, [debouncedValue])

  return (
    <Box marginTop={"20px"}>
      <TextField
        onChange={handleChange}
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
