import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Drawer from '../Drawer/Drawer'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SvgIcon from '@material-ui/core/SvgIcon'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBackground: {
    backgroundColor: grey[900]
  },
  iconColor: {
    color: 'rgb(255, 255, 255)'
  },
  loginLink: {
    textDecoration: 'none',
    color: '#000000'
  }
}))

const unauthenticatedOptions = (
  <React.Fragment>
    <Button color="inherit"><Link style={{ textDecoration: 'none', color: '#ffffff' }} to="/sign-in">Login</Link></Button>
  </React.Fragment>
)

const authenticatedOptions = (
  <React.Fragment>
    <IconButton
      style={{ color: '#ffffff' }}>
      <SvgIcon>
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/>
      </SvgIcon>
    </IconButton>
    <Drawer />
  </React.Fragment>
)

function ButtonAppBar ({ user }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBackground} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Relay
          </Typography>
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(ButtonAppBar)
