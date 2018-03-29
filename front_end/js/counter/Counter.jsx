import React, { Component } from 'react'
import ReactDom from 'react-dom'

import Add from './Add'
import Reduce from './Reduce'
import Header from './Header'
import Style from '../App.css'

export default class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      countNumber: 1,
      addType: true,
      history: [],
      isModalOpen: false
    }
  }
  getTime (){
    const currentTime = new Date()
    return (currentTime.getHours() + '時' + currentTime.getMinutes() + '分' + currentTime.getSeconds() + '秒' )
  }



  addCount (countNumber) {
    var {history} = this.state
    countNumber += 1
    this.setState({countNumber})
    const addWords = this.getTime() + '足した'
    history.push(addWords)
    this.setState(history)
   }
  reduceCount (countNumber) {
    var {history} = this.state
    countNumber -= 1
    this.setState({countNumber})
    const addWords = this.getTime() + '足した'
    history.push(addWords)
    this.setState(history)
   }

  changeToAdd () {
    this.setState({addType: true})
  }
  changeToReduce () {
    this.setState({addType: false})
  }
  changeModal () {
    let {isModalOpen} = this.state
    isModalOpen
      ? this.setState({ isModalOpen : false })
      : this.setState({ isModalOpen : true })
   }

  historyModal () {
    const {history} = this.state
    return (
      <div className='modal_wrapper' onClick={() => this.changeModal()}>
        <div className='modal_box'>
          <h2>履歴</h2>
          {
            history.map(history =>
              <div>{history}</div>
            )
          }
        </div>
      </div>
    )
  }


  render () {
    const {countNumber, addType, isModalOpen } = this.state
    const {user} = this.props
    console.log(this.props)
    console.log(this.state)
    const props = Object.assign(
      {...this.state},
      {addCount: this.addCount.bind(this)},
      {reduceCount: this.reduceCount.bind(this)},
      {changeToAdd: this.changeToAdd.bind(this)},
      {changeToReduce: this.changeToReduce.bind(this)}
    )
    return (
      <div>
        <div>count number: {countNumber}</div>
        <div>user name: {user.name}</div>
        <div>
          {
            addType ? <Add {...props}/> : <Reduce {...props} />
          }
        </div>
        <div>
          <button type='button' onClick={() => this.changeModal()}>
            履歴を表示
          </button>
          <button type='button' onClick={() => this.props.signOut()}>
            ログアウト
          </button>
        </div>
        <div>
           {
             isModalOpen
             ? this.historyModal()
             : null
           }
        </div>
      </div>
    )
  }
}
