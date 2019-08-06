import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { withSnackbar } from 'notistack'

import Paper from '@material-ui/core/Paper'

import QuoteForm from '../../QuoteForm'
import { quoteCreate } from '../../api'
import messages from '../../messages'

class QuoteCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quote: {
        pickUpLocation: '',
        dropOffLocation: '',
        pickUpDate: ''
      },
      createdQuote: false
    }
  }

  handleChange = event => {
    // create an object with updated field
    const updatedField = {
      [event.target.name]: event.target.value
    }
    // use object to create updated state Object
    const editedQuote = Object.assign(this.state.quote, updatedField)
    // finally setState with updates object
    this.setState({ quote: editedQuote })
  }

  handleSubmit = event => {
    const { enqueueSnackbar } = this.props
    event.preventDefault()
    quoteCreate(this.props.user, this.state.quote)
      .then(res => this.setState({
        createdQuote: true
      }))
      .then(() => enqueueSnackbar(messages.createQuoteSuccess, { variant: 'success' }))
      .catch(() => enqueueSnackbar(messages.createQuoteFailure, { variant: 'error' }))
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { quote, createdQuote } = this.state

    if (createdQuote) {
      return <Redirect to={{ pathname: '/quotes' }} />
    }

    return (
      <Paper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <QuoteForm
          quote={quote}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/quotes"
        />
      </Paper>
    )
  }
}

export default withSnackbar(QuoteCreate)
