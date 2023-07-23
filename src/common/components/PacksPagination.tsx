import Container from "@mui/material/Container/Container"
import FormControl from "@mui/material/FormControl/FormControl"
import FormHelperText from "@mui/material/FormHelperText/FormHelperText"
import MenuItem from "@mui/material/MenuItem/MenuItem"
import Pagination from "@mui/material/Pagination"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { ChangeEvent, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../hooks"
import { dataActions, dataThunks } from "../../features/packs/packs.slice"

export type PacksPaginationPropsType = {
  // filter?:boolean
}

export const PacksPagination: React.FC<PacksPaginationPropsType> = ({}) => {
  const state = useAppSelector((state) => state.data)
  const { page, pageCount, cardPacksTotalCount, params } = state
  const { filter } = params

  const dispatch = useAppDispatch()

  const [pageCountSelect, setPage] = useState<number>(pageCount)
  const [currentPage, setCurrentPage] = useState<number>(1)

  let commonPagesCount = Math.ceil(cardPacksTotalCount / pageCountSelect)

  useEffect(() => {
    if (filter) {
      setPage(4)
    }
  }, [filter])



  const handleChange = (event: SelectChangeEvent) => {
    dispatch(
      dataActions.setParams({ ...params, pageCount: event.target.value, filter:false }),
    )
    dispatch(dataThunks.getData({ ...params, pageCount: event.target.value, filter:false}))
    setPage(Number(event.target.value))
  }
  const onChangeCurrentPage = (
    event: ChangeEvent<unknown>,
    newPage: number,
  ) => {
    setCurrentPage(newPage)
    dispatch(dataActions.setParams({ ...params, page: newPage.toString() }))
    dispatch(dataThunks.getData({ ...params, page: newPage.toString() }))
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
          page={currentPage}
          onChange={onChangeCurrentPage}
          count={commonPagesCount}
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
          <FormHelperText>Cards per Page</FormHelperText>
        </FormControl>
      </Container>
    </>
  )
}