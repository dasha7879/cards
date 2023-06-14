import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import InputAdornment from "@mui/material/InputAdornment"
import { FC } from "react"


type PropsType = {
  fullWidth?: boolean
}

export const SearchInput: FC<PropsType> = ({ fullWidth }) => {
  return (
        <Box marginTop={'20px'}>
          <TextField
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
