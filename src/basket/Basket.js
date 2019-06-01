import React, { Component } from 'react'

class Basket extends Component {
  constructor () {
    super()

    this.state = {
      items: [],
      open: true
    }
  }

  render () {
    return (
      <h1>Here is your Basket!</h1>
    )
  }
}

export default Basket
