import Container from "@mui/material/Container/Container"
import FormControl from "@mui/material/FormControl/FormControl"
import FormHelperText from "@mui/material/FormHelperText/FormHelperText"
import InputLabel from "@mui/material/InputLabel/InputLabel"
import MenuItem from "@mui/material/MenuItem/MenuItem"
import Pagination from "@mui/material/Pagination"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Typography from "@mui/material/Typography"
import { useState } from "react"

export type CardsPaginationPropsType = {
  count: number
}

export const CardsPagination: React.FC<CardsPaginationPropsType> = ({
  count,
}) => {
  const [age, setAge] = useState("10")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <Pagination
          count={count}
          shape="rounded"
          sx={{ marginTop: 3 }}
          color="primary"
        />
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            display: "flex",
            flexDirection: "row",
            marginTop: "26px",
          }}
          size="small"
        >
          <FormHelperText>Show</FormHelperText>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ height: "30px" }}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
          <FormHelperText>Cards per Page</FormHelperText>
        </FormControl>
      </Container>
    </>
  )
}
