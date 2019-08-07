import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { allQuotes } from '../../api'
import { formattedDate } from './helpers'

class Quotes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quotes: [],
      loaded: false,
      isDeleted: false,
      error: null
    }
  }

  async componentDidMount () {
    try {
      const response = await allQuotes(this.props.user)
      this.setState({ quotes: response.data.quotes, loaded: true })
    } catch (err) {
      console.error(err)
      this.setState({ error: err.message })
    }
  }

  nextPath = path => {
    this.props.history.push(path)
  }

  render () {
    const { quotes, error, loaded } = this.state

    if (!loaded) {
      return (
        <div style={{
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <CircularProgress />
        </div>
      )
      // return <p>Loading...</p>
    }

    if (quotes.length === 0) {
      return (
        <Paper style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3>Get a quote now</h3>
          <Button variant="contained" color="primary" onClick={() => this.nextPath('/quote-create')}>New Quote</Button>
        </Paper>
      )
    }

    if (error) {
      return <p>Error: {error}</p>
    }

    return (
      <Paper style={{ marginTop: '60px', display: 'flex', justifyContent: 'center' }}>
        <Table style={{ maxWidth: '700px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Quoted on date</TableCell>
              <TableCell align="right">Start Location</TableCell>
              <TableCell align="right">End Location</TableCell>
              <TableCell align="right">Pick up date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ cursor: 'pointer' }}>
            {quotes.map(quote => (
              <TableRow onClick={() => this.nextPath('/quotes/' + quote._id)} key={quote._id} id={quote._id}>
                <TableCell component="th" scope="row">
                  {formattedDate(quote.createdAt)}
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
}

export default withRouter(Quotes)
