import React, { Component } from 'react'

export class Greet extends Component {
  render() {
    return (
      <div><center><h1>welcome to class {this.props.name}{this.props.id}</h1></center></div>
    )
  }
}

export default Greet