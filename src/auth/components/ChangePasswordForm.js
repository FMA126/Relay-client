import React from 'react'
import { Link } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'

const PasswordForm = ({ state, handleSubmit, handleChange }) => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <FormControl>
          <InputLabel htmlFor="component-helper">Old password</InputLabel>
          <Input
            id="component-helper"
            name="oldPassword"
            value={state.oldPassword}
            onChange={handleChange}
            aria-describedby="component-helper-text"
            type="password"
            required
          />
          <FormHelperText id="component-helper-text"></FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="component-helper">New password</InputLabel>
          <Input
            id="component-helper"
            name="newPassword"
            value={state.newPassword}
            onChange={handleChange}
            aria-describedby="component-helper-text"
            type="password"
            required
          />
          <FormHelperText id="component-helper-text"></FormHelperText>
        </FormControl>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', margin: '20px 0' }}>
          <Button type="submit" variant="outlined" color="primary">
            Change password
          </Button>
          <Button variant="outlined" color="secondary">
            <Link to={'/qoutes'} style={{ textDecoration: 'none', color: 'inherit' }}>Cancel</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PasswordForm
