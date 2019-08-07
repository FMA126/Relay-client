import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Drawer from '../Drawer/Drawer'
import Account from './Account'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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
    <Account props={this.props}/>
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
