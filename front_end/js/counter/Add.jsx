import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Add extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const countNumber = this.props.countNumber
    var history = this.props.history
    return (
      <div>
        <div>
          ADD
          <button type='button' onClick={() => this.props.addCount(countNumber)}>
            足す
          </button>
        </div>
        <div>
          <button type='button' onClick={() => this.props.changeToReduce()}>
            引き算ボタンを出現させる
          </button>
        </div>
      </div>
    )
  }
}
