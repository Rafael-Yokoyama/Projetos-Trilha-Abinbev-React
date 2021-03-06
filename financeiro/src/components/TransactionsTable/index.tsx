import React, { useEffect } from 'react';
import * as FinanceActions from '../../store/ducks/finances/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Transaction } from '../../store/ducks/finances/types';

import { Icon, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Delete as DeleteIcon, Add, Remove } from '@material-ui/icons';

const useStyles = makeStyles((theme: any) => ({
  table: {
    minWidth: 650,
  },
  icon: {
    color: 'white',
    cursor: 'pointer'
  }
}));

function TransactionsTable() {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FinanceActions.getTransactionsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const transactions = useSelector((state: any) => state.finance.transactions)

  const deleteTransaction = (id: any) => {
    try {
      dispatch(FinanceActions.deleteTransactionsRequest(id))
    } catch (e) {
      console.log(e)
    }
    dispatch(FinanceActions.getTransactionsRequest())
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((row: Transaction) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.type === 'recebimento' ? <Add /> : <Remove />}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  <Icon className={classes.icon} onClick={() => deleteTransaction((row.id))}><DeleteIcon /></Icon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TransactionsTable;