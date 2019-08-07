import React from 'react'
import Home from '@material-ui/icons/Home'
import ViewList from '@material-ui/icons/ViewList'

export const iconIndex = (index) => {
  let icon
  switch (index) {
  case 0:
    icon = <Home />
    break
  case 1:
    icon = <ViewList />
    break
  case 2:
    icon = <ViewList />
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
    link = '/quotes'
    break
  case 2:
    link = '/quote-create'
  }
  return link
}
