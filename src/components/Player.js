import React, { Component } from "react"
import './Component.css'

export default class Player extends Component {
  render() {
    return <img className="img-player" src={this.props.image} alt={this.props.name} />
  }
}
