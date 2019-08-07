import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import { signUp, signIn } from '../api'
import messages from '../messages'
import SignUpForm from './SignUpForm'

import Paper from '@material-ui/core/Paper'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { enqueueSnackbar, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => enqueueSnackbar(messages.signUpSuccess, { variant: 'success' }))
      .then(() => history.push('/quotes'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        enqueueSnackbar(messages.signUpFailure, { variant: 'error' })
      })
  }

  render () {
    return (
      <Paper>
        <SignUpForm
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.onSignUp}
        />
      </Paper>
    )
  }
}

export default withSnackbar(withRouter(SignUp))
