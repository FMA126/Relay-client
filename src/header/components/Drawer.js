import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Home from '@material-ui/icons/Home'
import Info from '@material-ui/icons/Info'
import ViewList from '@material-ui/icons/ViewList'
import ContactMail from '@material-ui/icons/ContactMail'
import MoreVert from '@material-ui/icons/MoreVert'

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

  const iconIndex = (index) => {
    let icon
    switch (index) {
    case 0:
      icon = <Home />
      break
    case 1:
      icon = <Info />
      break
    case 2:
      icon = <ViewList />
      break
    case 3:
      icon = <ViewList />
      break
    case 4:
      icon = <ViewList />
      break
    case 5:
      icon = <ContactMail />
    }
    return icon
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
        {['Home', 'About', 'Front-end Skills', 'Back-end Skills', 'Portfolio', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
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
