// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {



  render() {
    const clickHandler = (event) => {
      event.persist()
      setTimeout(() => {
        this.props.onDelayedClick(event)
      }, this.props.delay)
    }

    return <button onClick={clickHandler} >Delayed button</button>
  }
}
