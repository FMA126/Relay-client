import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export default function Account () {
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick (event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose () {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        style={{ color: '#ffffff' }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <SvgIcon>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/>
        </SvgIcon>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/change-password" style={{ textDecoration: 'none', color: 'inherit' }}>Change password</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/sign-out" style={{ textDecoration: 'none', color: 'inherit' }}>Sign out</Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
