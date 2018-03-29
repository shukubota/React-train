import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Reduce extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const countNumber = this.props.countNumber
    return (
      <div>
        <div>
          REDUCE
          <button type='button' onClick={() => this.props.reduceCount(countNumber)}>
            引く
          </button>
        </div>
        <div>
          <button type='button' onClick={() => this.props.changeToAdd()}>
            足し算ボタンを出現させる
          </button>
        </div>
      </div>
    )
  }
}
