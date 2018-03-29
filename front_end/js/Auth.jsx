import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Counter from './counter/Counter'
import Signin from './Signin'
import Style from './App.css'

export default class Auth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      },
      isSignIn: false
    }
  }

  render () {
    const { user, isSignIn } = this.state
    console.log(user)
    return (
      <div>
        <Signin user={user} />
      </div>
    )
  }
}
