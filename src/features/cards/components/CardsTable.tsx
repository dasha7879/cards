import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { IconButton,SelectChangeEvent, styled } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../common/hooks"

import SwapVertSharpIcon from "@mui/icons-material/SwapVertSharp"
import { cardsActions, cardsThunks } from "../cards.slice"
import { CardsPagintaion } from "../../../common/components/CardsPagintaion"

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



export const CardsTable = () => {
  const params = useAppSelector((state) => state.cards.params)
  const cards = useAppSelector((state) => state.cards.cards)
  const dispatch = useAppDispatch()

  const onClickSort = (name: string) => {
    // to CamelCase
    const currentType = params.sortCards?.[0]
    const currentName = params.sortCards?.slice(1)

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
      cardsActions.setParams({
        ...params,
        sortCards: sort,
      }),
    )

    dispatch(
      cardsThunks.getCards({
        ...params,
        sortCards: sort,
      }),
    )
  }
 

  const columns = ["Question", "Answer", "Last Updated", "Grade"]

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
                    {column !== "Question"&& column !==  "Answer" ? (
                      <IconButton
                        aria-label="sort"
                        size="small"
                        onClick={()=>onClickSort(column)}
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
              {cards.map((card) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={card.cardsPack_id}>
                    <TableCell>{card.question}</TableCell>
                    <TableCell>{card.answer}</TableCell>
                    <TableCell>{card.updated}</TableCell>
                    <TableCell>{card.grade}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <CardsPagintaion />
    </>
  )
}
