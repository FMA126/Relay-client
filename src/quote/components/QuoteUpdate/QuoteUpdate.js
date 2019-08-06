import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'

import Paper from '@material-ui/core/Paper'

import QuoteForm from '../../QuoteForm'
import { singleQuote, quoteUpdate } from '../../api'
import messages from '../../messages'

class QuoteUpdate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: {
        pickUpLocation: '',
        dropOffLocation: '',
        pickUpDate: ''
      },
      edited: false
    }
  }

  componentDidMount () {
    singleQuote(this.props.user, this.props.match.params.id)
      .then(res => {
        const dateObj = new Date(res.data.quote.pickUpDate)
        const formattedDate = dateObj.toISOString().substring(0, 10)
        this.setState({
          quote: {
            ...res.data.quote,
            pickUpDate: formattedDate
          }
        })
      })
      .catch(console.error)
  }

  handleChange = event => {
    // create object with just the updated field name and the updated
    // value => { title: 'My Mo' }
    const updatedField = {
      [event.target.name]: event.target.value
    }
    // combine the prev object with the quote object
    const editedQuote = Object.assign(this.state.quote, updatedField)
    // use setState to update the state with our combined object
    this.setState({ quote: editedQuote })
  }

  handleSubmit = event => {
    const { enqueueSnackbar } = this.props
    event.preventDefault()
    quoteUpdate(this.props.user, this.props.match.params.id, this.state.quote)
      .then(res => this.setState({ edited: true }))
      .then(() => enqueueSnackbar(messages.updateQuoteSuccess, { variant: 'success' }))
      .catch(() => enqueueSnackbar(messages.updateQuoteFailure, { variant: 'error' }))
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { quote, edited } = this.state
    // const quoteId = this.props.match.params.id

    if (edited) {
      return <Redirect to={{ pathname: '/' }} />
    }

    return (
      <Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <QuoteForm
          quote={quote}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/quotes/${this.props.match.params.id}`}
        />
      </Paper>
    )
  }
}

export default withSnackbar(withRouter(QuoteUpdate))
