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
        name: '',
        email: '',
        password: ''
      },
      isSignIn: false
    }
  }
  signIn (userData) {
    let {user, isSignIn} = this.state
    isSignIn = true
    user.name = userData.name
    user.email = userData.email
    user.password = userData.password
    this.setState({isSignIn})
    this.setState({user})
  }
  signOut () {
    let {user, isSignIn} = this.state
    user.name = ''
    user.email = ''
    user.password = ''
    isSignIn = false
    this.setState({user})
    this.setState({isSignIn})
  }



  render () {
    const { user, isSignIn } = this.state
    const props = Object.assign(
      {...this.state},
      {signIn: this.signIn.bind(this)},
      {signOut: this.signOut.bind(this)}
    )
    console.log(this.state)
    return (
      <div>
        {
          isSignIn
          ? <Counter {...props} />
          : <Signin {...props} />
        }
      </div>
    )
  }
}
