import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { MouseEventHandler, useEffect } from "react"
import { IconButton, styled } from "@mui/material"
import { PacksPagination } from "../../../common/components/PacksPagination"
import { ActionButtons } from "../../../common/components/ActionButtons"
import { useAppDispatch, useAppSelector } from "../../../common/hooks"
import { dataActions, dataThunks } from "../packs.slice"
import { dataSelector } from "../packsSelector"
import SwapVertSharpIcon from "@mui/icons-material/SwapVertSharp"
import { path } from "../../../common/routes/paths"
import { useNavigate } from "react-router-dom"
import { cardsActions, cardsThunks } from "../../cards/cards.slice"

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
  const data = useAppSelector(dataSelector)
  const user = useAppSelector((state) => state.auth.profile)
  const params = useAppSelector((state) => state.data.params)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(dataThunks.getData(params))
  }, [])

  const onClickDelete = (id: string) => {
    dispatch(dataThunks.deletePack({ id }))
    dispatch(dataThunks.getData({ user_id: user?._id }))
  }
  const onClickEdit = (_id: string, name: string) => {
    dispatch(dataThunks.upDatePack({ _id, name }))
  }

  const onClickShowCards = ( cardsPack_id: string, packName: string) => {
    dispatch(dataActions.setParams({packName}))
    dispatch(cardsActions.setParams( {cardsPack_id} ))
    dispatch(cardsThunks.getCards({ cardsPack_id }))
    navigate(path.CARDS)
  }

  const onClickSort = (name: string) => {
    // to CamelCase
    const currentType = params.sortPacks?.[0]
    const currentName = params.sortPacks?.slice(1)

    name = name
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase()
      })
      .replace(/\s+/g, "")

    let sort

    if (currentName === name) {
      sort = `${currentType == "0" ? 1 : 0}${name}`
    } else {
      sort = `${0}${name}`
    }

    dispatch(
      dataActions.setParams({
        ...params,
        sortPacks: sort,
      }),
    )

    dispatch(
      dataThunks.getData({
        ...params,
        sortPacks: sort,
      }),
    )
  }

  const columns = ["Name", "Cards count", "Updated", "Created", "Actions"]

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
                        onClick={() => onClickSort(column)}
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
              {data.cardPacks.length > 0
                ? data.cardPacks?.map((pack) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={pack._id}
                      >
                        <TableCell onClick={()=> onClickShowCards(pack._id, pack.name)}>{pack.name}</TableCell>
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
                  })
                : "not found"}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <PacksPagination />
    </>
  )
}
