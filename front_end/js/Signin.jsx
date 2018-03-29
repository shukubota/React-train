import React, { Component } from 'react'
import ReactDom from 'react-dom'
import request from 'superagent'
const END_POINT = 'http://localhost:8080'

export default class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        email:'',
        password:''
      }
    }
  }

  componentDidMount () {
    console.log(this.props)
    let {user} = this.props
    this.setState({user})
  }

  handleChange(property, element) {
    let {user} = this.state
    user[property] = element.target.value
    this.setState({user})
  }

  handleSubmit(e) {
    e.preventDefault()
    const url = END_POINT + `/api/users/signin`
    const data = this.state
    console.log(data)
    request
      .post(url)
      .set('Content-Type', 'application/json')
      .send(data)
      .then((res) => {
        console.log(res.body)
        this.props.signIn(res.body.user)
      })
      .catch((err) => {
        console.log(err)
      })
    }

  render () {
    const {user} = this.state
    console.log(user)
    return (
      <div>
        <h1>サインイン</h1>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <input value={user.email} type='email' placeholder='メール' onChange={this.handleChange.bind(this, 'email')}/>
              <input value={user.password} type='password' placeholder='パスワード' onChange={this.handleChange.bind(this, 'password')}/>
              <input value='ログイン' type='submit' />
            </div>
          </form>
        </div>
        <div>test@kmail.com: aaaaa</div>
      </div>
    )
  }

}
