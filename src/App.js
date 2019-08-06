import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import ButtonAppBar from './header/components/ButtonAppBar/ButtonAppBar'
import Home from './home/Home'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Quotes from './quote/components/Quotes/Quotes'
import Quote from './quote/components/Quote/Quote'
import QuoteCreate from './quote/components/QuoteCreate/QuoteCreate'
import QuoteUpdate from './quote/components/QuoteUpdate/QuoteUpdate'

import { SnackbarProvider } from 'notistack'

// <AuthenticatedRoute user={user} exact path='/quotes/:id' render={() => (
//   <Quote alert={this.alert} user={user} />
// )} />
// <AuthenticatedRoute user={user} exact path='/quotes/:id/quote-update' render={() => (
//   <QuoteUpdate alert={this.alert} user={user} />
// )} />

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render () {
    const { user } = this.state

    return (
      <SnackbarProvider maxSnack={3}>
        <ButtonAppBar user={user} />
        <main className="container">
          <Route path='/' render={() => (
            <Home alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/quotes' render={() => (
            <Quotes alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/quotes/:id' render={() => (
            <Quote alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/quote-create' render={() => (
            <QuoteCreate alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/quotes/:id/quote-update' render={() => (
            <QuoteUpdate alert={this.alert} user={user} />
          )} />
        </main>
      </SnackbarProvider>
    )
  }
}

export default App
