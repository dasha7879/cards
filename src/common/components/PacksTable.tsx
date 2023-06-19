import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material';
import { CardsPagination } from './CardsPagination';
import { ActionButtons } from './ActionButtons';
import { useAppDispatch, useAppSelector } from '../hooks';
import { packSelector } from '../../features/packs/packsSelector';
import { packThunk } from '../../features/packs/packs.slice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.common.black,
      fontWeight:700
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  })); 


type PacksTablePropsType = {} 


export const PacksTable: React.FC<PacksTablePropsType>=({})=>{

  const packs = useAppSelector(packSelector)
  const dispatch = useAppDispatch()

  
  useEffect(() => {
    dispatch(packThunk.getPacks())
  }, [])

  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  const columns = ['Name', 'Cards', 'Updated', 'Created','Actions']

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden', margin:'0 auto'}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{bgcolor: 'red'}}>
            <TableRow>
              {columns.map((column,index) => (
                <StyledTableCell
                  key={column[index]}

                >
                  {column}
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
                      <ActionButtons />
                    </TableCell>
                  </TableRow>
                )
              })}
              </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    <CardsPagination count={10}/>
    </>
  );
}