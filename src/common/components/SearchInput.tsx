import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import InputAdornment from "@mui/material/InputAdornment"
import { ChangeEvent, FC } from "react"

type PropsType = {
  fullWidth?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export const SearchInput: FC<PropsType> = ({ fullWidth, onChange, value }) => {
  return (
    <Box marginTop={"20px"}>
      <TextField
        label="Search"
        onChange={onChange}
        fullWidth={fullWidth || false}
        id="fullWidth"
        hiddenLabel
        value={value}
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
