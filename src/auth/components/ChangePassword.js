import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withSnackbar } from 'notistack'
import { changePassword } from '../api'
import messages from '../messages'
import PasswordForm from './ChangePasswordForm'

import Paper from '@material-ui/core/Paper'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { enqueueSnackbar, history, user } = this.props

    changePassword(this.state, user)
      .then(() => enqueueSnackbar(messages.changePasswordSuccess, { variant: 'success' }))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        enqueueSnackbar(messages.changePasswordFailure, { variant: 'error' })
      })
  }

  render () {
    return (
      <Paper>
        <PasswordForm
          state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.onSignIn}
        />
      </Paper>
    )
  }
}

export default withSnackbar(withRouter(ChangePassword))
