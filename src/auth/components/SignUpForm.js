import React from 'react'
import { Link } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles'
// import FilledInput from '@material-ui/core/FilledInput'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import OutlinedInput from '@material-ui/core/OutlinedInput'

const SignUpForm = ({ state, handleSubmit, handleChange }) => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <FormControl>
          <InputLabel htmlFor="component-helper">Email</InputLabel>
          <Input
            id="component-helper"
            value={state.email}
            name="email"
            onChange={handleChange}
            aria-describedby="component-helper-text"
            type="email"
            required
          />
          <FormHelperText id="component-helper-text">Welcome back!</FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="component-helper">Password</InputLabel>
          <Input
            id="component-helper"
            name="password"
            value={state.password}
            onChange={handleChange}
            aria-describedby="component-helper-text"
            type="password"
            required
          />
          <FormHelperText id="component-helper-text"></FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="component-helper">Password</InputLabel>
          <Input
            id="component-helper"
            name="passwordConfirmation"
            value={state.passwordConfirmation}
            onChange={handleChange}
            aria-describedby="component-helper-text"
            type="password"
            required
          />
          <FormHelperText id="component-helper-text"></FormHelperText>
        </FormControl>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', margin: '20px 0' }}>
          <Button type="submit" variant="outlined" color="primary">
            Sign up
          </Button>
          <Link to={'/sign-in'} style={{ textDecoration: 'none', marginTop: '20px' }}>Already a member? Sign in here.</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
