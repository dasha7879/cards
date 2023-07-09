import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { useEffect, useState } from "react"
import { Button, IconButton, styled } from "@mui/material"
import { CardsPagination } from "../../../common/components/CardsPagination"
import { ActionButtons } from "../../../common/components/ActionButtons"
import { useAppDispatch, useAppSelector } from "../../../common/hooks"
import { packsThunks } from "../packs.slice"
import { packSelector } from "../packsSelector"
import SwapVertSharpIcon from "@mui/icons-material/SwapVertSharp"
import { AgInputDateField } from "ag-grid-community"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.black,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

type PacksTablePropsType = {}

export const PacksTable: React.FC<PacksTablePropsType> = ({}) => {
  const packs = useAppSelector(packSelector)
  const user = useAppSelector((state) => state.auth.profile)
  const params = useAppSelector((state)=>state.packs.params)
  const dispatch = useAppDispatch()
  // const [allPacksFl, setAllPacksFl] = useState(true)

  useEffect(() => {
    dispatch(
      packsThunks.getPacks(params),
    )
  }, [])

  const onClickDelete = (id: string) => {
    dispatch(packsThunks.deletePack({ id }))
    dispatch(packsThunks.getPacks({ user_id: user?._id }))
  }
  const onClickEdit = (_id: string, name: string) => {
    dispatch(packsThunks.upDatePack({ _id, name }))
  }

  const onClickSort = (name: string, _sort: number) => {
    const sort = `${_sort}${name.toLowerCase()}`
    dispatch(
      packsThunks.getPacks({
        sortPacks: sort,
      }),
    )
  }

  const columns = ["Name", "Cards", "Updated", "Created", "Actions"]

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden", margin: "0 auto" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ bgcolor: "red" }}>
              <TableRow>
                {columns.map((column, index) => (
                  <StyledTableCell key={columns[index]}>
                    {column}
                    {column !== "Actions" ? (
                      <IconButton
                        aria-label="sort"
                        size="small"
                        onClick={() => onClickSort(column, 0)}
                      >
                        <SwapVertSharpIcon />
                      </IconButton>
                    ) : (
                      ""
                    )}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {packs.cardPacks?.map((pack) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={pack._id}>
                    <TableCell>{pack.name}</TableCell>
                    <TableCell>{pack.cardsCount}</TableCell>
                    <TableCell>{pack.updated}</TableCell>
                    <TableCell>{pack.created}</TableCell>
                    <TableCell>
                      <ActionButtons
                        onClickDelete={() => onClickDelete(pack._id)}
                        onClickEdit={() => onClickEdit(pack._id, "newName")}
                      />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <CardsPagination count={10} />
    </>
  )
}
