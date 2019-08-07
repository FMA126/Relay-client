import React, { Component } from 'react'
import { Redirect, withRouter, Link } from 'react-router-dom'
import { withSnackbar } from 'notistack'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'

import { singleQuote, quoteDelete } from '../../api'
import messages from '../../messages'

class Quote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: null,
      error: null,
      deleted: false
    }
  }

  async componentDidMount () {
    try {
      const response = await singleQuote(this.props.user, this.props.match.params.id)
      const options = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
      }
      const dateObj = new Date(response.data.quote.pickUpDate)
      const dateObj2 = new Date(response.data.quote.createdAt)
      const formattedDate = dateObj.toLocaleDateString(undefined, options)
      const formattedDate2 = dateObj2.toLocaleDateString(undefined, options)
      this.setState({ quote: { ...response.data.quote, pickUpDate: formattedDate, createdAt: formattedDate2 }, loaded: true })
    } catch (err) {
      console.error(err)
      this.setState({ error: err.message })
    }
  }

  destroy = () => {
    // can also do axios.delete(`${apiUrl}/quotes/${this.props.match.params.id}`)
    const { enqueueSnackbar } = this.props
    quoteDelete(this.props.user, this.props.match.params.id)
      .then(() => this.setState({ deleted: true }))
      .then(() => enqueueSnackbar(messages.deleteQuoteSuccess, { variant: 'success' }))
      .catch(err => this.setState({ error: err.message }))
  }

  render () {
    const { quote, error, deleted } = this.state
    const ownerButtons = (
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
        <Button variant="outlined" color="primary">
          <Link to={`/quotes/${this.props.match.params.id}/quote-update`} style={{ textDecoration: 'none', color: 'inherit' }}>Update this quote</Link>
        </Button>
        <Button onClick={this.destroy} variant="outlined" color="secondary">
          Delete this quote
        </Button>
        <Button variant="outlined" color="default">
          <Link to={'/quotes'} style={{ textDecoration: 'none', color: 'inherit' }}>Back to list</Link>
        </Button>
      </div>
    )

    if (deleted) {
      // custom object in Redirect. 'state' can be named something else
      return <Redirect to='/quotes' />
    }
    if (error) {
      return <p>ERROR: {error}</p>
    }
    if (!quote) {
      return <p>Loading...</p>
    }

    return (
      <Paper style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Table style={{ maxWidth: '700px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell align="right">10-12&#39; Truck</TableCell>
              <TableCell align="right">15-16&#39; Truck</TableCell>
              <TableCell align="right">20&#39; Truck</TableCell>
              <TableCell align="right">26&#39; Truck</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ cursor: 'pointer' }}>
            <TableRow>
              <TableCell component="th" scope="row">Uhaul</TableCell>
              <TableCell align="right">
                {quote.prices[0] ? quote.prices[0].uhaul ? quote.prices[0].uhaul.tenFootTruck : 'no price info' : 'no price info'}
              </TableCell>
              <TableCell align="right">
                {quote.prices[0] ? quote.prices[0].uhaul ? quote.prices[0].uhaul.fifteenFootTruck : 'no price info' : 'no price info'}
              </TableCell>
              <TableCell align="right">
                {quote.prices[0] ? quote.prices[0].uhaul ? quote.prices[0].uhaul.twentyFootTruck : 'no price info' : 'no price info'}
              </TableCell>
              <TableCell align="right">
                {quote.prices[0] ? quote.prices[0].uhaul ? quote.prices[0].uhaul.twentySixFootTruck : 'no price info' : 'no price info'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Budget</TableCell>
              <TableCell align="right">
                {quote.prices[1] ? quote.prices[1].budget ? quote.prices[1].budget.twelveFootTruck : 'no price info' : 'no price info'}
              </TableCell>
              <TableCell align="right">
                {quote.prices[1] ? quote.prices[1].budget ? quote.prices[1].budget.sixteenFootTruck : 'no price info' : 'no price info'}
              </TableCell>
              <TableCell align="right">
                NA
              </TableCell>
              <TableCell align="right">
                {quote.prices[1] ? quote.prices[1].budget ? quote.prices[1].budget.twentySixFootTruck : 'no price info' : 'no price info'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Penske</TableCell>
              <TableCell align="right">
                {quote.prices[2] ? quote.prices[2].penske ? quote.prices[2].penske.twelveFootTruck : 'no price info' : 'no price info'}
              </TableCell>
              <TableCell align="right">
                {quote.prices[2] ? quote.prices[2].penske ? quote.prices[2].penske.sixteenFootTruck : 'no price info' : 'no price info'}
              </TableCell>
              <TableCell align="right">
                {quote.prices[2] ? quote.prices[2].penske ? quote.prices[2].penske.twentyTwoFootTruck : 'no price info' : 'no price info'}
              </TableCell>
              <TableCell align="right">
                {quote.prices[2] ? quote.prices[2].penske ? quote.prices[2].penske.twentySixFootTruck : 'no price info' : 'no price info'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {ownerButtons}
      </Paper>
    )
  }
}

export default withSnackbar(withRouter(Quote))
