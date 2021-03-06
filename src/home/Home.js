import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}))

function getSteps () {
  return ['Sign up', 'Create new quote', 'View quote list']
}

function getStepContent (step) {
  switch (step) {
  case 0:
    return 'Sign up to view and create new quotes'
  case 1:
    return 'Enter the your moving information'
  case 2:
    return 'See prices from Uhaul, Budget, and Penske'
  default:
    return 'Unknown step'
  }
}

export default function Home () {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  function handleNext () {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  function handleBack () {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  function handleReset () {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <h1>Compare Rental Truck Prices</h1>
      <h3>Getting started</h3>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} variant="contained" color="primary" className={classes.button}>
            <Link to="/sign-up" style={{ textDecoration: 'none', color: 'inherit' }}>Start</Link>
          </Button>
        </Paper>
      )}
    </div>
  )
}
