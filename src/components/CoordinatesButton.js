// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {



  render() {
    let clickHandler = (event) => {
      let result = [event.clientX, event.clientY]
      this.props.onReceiveCoordinates(result)
    }
    return <button onClick={clickHandler} > Log Mouse Position</button>
  }
}
