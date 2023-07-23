import Container from "@mui/material/Container/Container"
import FormControl from "@mui/material/FormControl/FormControl"
import FormHelperText from "@mui/material/FormHelperText/FormHelperText"
import MenuItem from "@mui/material/MenuItem/MenuItem"
import Pagination from "@mui/material/Pagination/Pagination"
import Select, { SelectChangeEvent } from "@mui/material/Select/Select"
import { useAppDispatch, useAppSelector } from "../hooks"
import { ChangeEvent, useState } from "react"
import { cardsActions, cardsThunks } from "../../features/cards/cards.slice"

export const CardsPagintaion = () => {
  const state = useAppSelector((state) => state.cards)
  const { page, pageCount, params, cardsTotalCount } = state

  const dispatch = useAppDispatch()

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageCountSelect, setPage] = useState<number>(pageCount)

  const onChangeCurrentPage = (e: ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage)

    dispatch(cardsActions.setParams({ ...params, page: newPage }))
    dispatch(cardsThunks.getCards({ ...params, page: newPage }))
  }

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(
      cardsActions.setParams({
        ...params,
        pageCount: Number(event.target.value),
      }),
    )
    dispatch(
      cardsThunks.getCards({
        ...params,
        pageCount: Number(event.target.value),
      }),
    )
    setPage(Number(event.target.value))
  }

  let CommonPagesCount = Math.ceil(cardsTotalCount / pageCount)
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
        
          page={currentPage}
          onChange={onChangeCurrentPage}
          count={CommonPagesCount}
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
            value={`${pageCountSelect}`}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ height: "30px" }}
          >
            <MenuItem value={4}>{4}</MenuItem>
            <MenuItem value={10}>{10}</MenuItem>
            <MenuItem value={20}>{20}</MenuItem>
          </Select>
          <FormHelperText>Cards</FormHelperText>
        </FormControl>
      </Container>
    </>
  )
}
