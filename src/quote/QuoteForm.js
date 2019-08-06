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

let today = new Date()
let dd = today.getDate()

let mm = today.getMonth() + 1
const yyyy = today.getFullYear()
if (dd < 10) {
  dd = '0' + dd
}

if (mm < 10) {
  mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd

const QuoteForm = ({ quote, handleSubmit, handleChange, cancelPath }) => {
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <FormControl>
        <InputLabel htmlFor="component-helper">Pick up location</InputLabel>
        <Input
          id="component-helper"
          value={quote.pickUpLocation}
          name="pickUpLocation"
          onChange={handleChange}
          aria-describedby="component-helper-text"
          inputProps={{ pattern: '[0-9]{5}', maxLength: '5' }}
          type="text"
          required
        />
        <FormHelperText id="component-helper-text">Zip Code</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-helper">Drop off location</InputLabel>
        <Input
          id="component-helper"
          name="dropOffLocation"
          value={quote.dropOffLocation}
          onChange={handleChange}
          aria-describedby="component-helper-text"
          inputProps={{ pattern: '[0-9]{5}', maxLength: '5' }}
          type="text"
          required
        />
        <FormHelperText id="component-helper-text">Zip Code</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-helper"></InputLabel>
        <Input
          id="component-helper"
          type="date"
          name="pickUpDate"
          value={quote.pickUpDate}
          onChange={handleChange}
          aria-describedby="component-helper-text"
          inputProps={{ min: `${today}` }}
          required
        />
        <FormHelperText id="component-helper-text">Pick up date</FormHelperText>
      </FormControl>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
        <Button type="submit" variant="outlined" color="primary">
          Submit
        </Button>
        <Button variant="outlined" color="primary">
          <Link to={cancelPath} style={{ textDecoration: 'none', color: 'inherit' }}>Cancel</Link>
        </Button>
      </div>
    </form>
  )
}

export default QuoteForm
