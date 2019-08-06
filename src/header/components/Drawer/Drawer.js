import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MoreVert from '@material-ui/icons/MoreVert'

import { iconIndex, listItemLink } from './helpers'

const useStyles = makeStyles({
  list: {
    width: 250
  },
  vertButton: {
    color: 'rgb(255, 255, 255)',
    minWidth: '48px'
  }
})

export default function Header () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false
  })

  const toggleSwipeableDrawer = (side, open) => event => {
    setState({ ...state, [side]: open })
  }

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleSwipeableDrawer(side, false)}
      onKeyDown={toggleSwipeableDrawer(side, false)}
    >
      <List>
        {['Home', 'About', 'Quote List', 'New Quote', 'Change Password', 'Sign Out'].map((text, index) => (
          <ListItem button component={Link} to={listItemLink(index)} key={text}>
            <ListItemIcon>{iconIndex(index)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <Button className={classes.vertButton} onClick={toggleSwipeableDrawer('right', true)}>
        <MoreVert />
      </Button>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="right"
        open={state.right}
        onOpen={toggleSwipeableDrawer('right', true)}
        onClose={toggleSwipeableDrawer('right', false)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  )
}
