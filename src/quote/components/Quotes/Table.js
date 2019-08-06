import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
}))

export default function SimpleTable (quotes) {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Quoted on date</TableCell>
            <TableCell align="right">Start Location</TableCell>
            <TableCell align="right">End Location</TableCell>
            <TableCell align="right">Pick up date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quotes.map(quote => (
            <TableRow key={quote.createdAt}>
              <TableCell component="th" scope="row">
                {quote.createdAt.slice(0, 10)}
              </TableCell>
              <TableCell align="right">{quote.pickUpLocation}</TableCell>
              <TableCell align="right">{quote.dropOffLocation}</TableCell>
              <TableCell align="right">{quote.pickUpDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}
