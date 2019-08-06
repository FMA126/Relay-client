import React from 'react'
import Home from '@material-ui/icons/Home'
import Info from '@material-ui/icons/Info'
import ViewList from '@material-ui/icons/ViewList'
import ContactMail from '@material-ui/icons/ContactMail'

export const iconIndex = (index) => {
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

export const listItemLink = (index) => {
  let link
  switch (index) {
  case 0:
    link = '/'
    break
  case 1:
    link = '/about'
    break
  case 2:
    link = '/quotes'
    break
  case 3:
    link = '/quote-create'
    break
  case 4:
    link = '/change-password'
    break
  case 5:
    link = '/sign-out'
  }
  return link
}
