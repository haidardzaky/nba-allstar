import React, {Component} from "react"
import './Component.css'

import Player from "./Player"
import VoteCount from "./VoteCount"


export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increaseVote = this.increaseVote.bind(this)
  }

  increaseVote() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (<div className="card">
      <div className="image-player">
        <Player image={this.props.image} name={this.props.name}/>
      </div>
      <hr className="hr-profile"/>
      <div className="player-data">
        <i aria-hidden="true" class="user icon"></i>{this.props.name}
      </div>
      <div className="player-data">
        <i aria-hidden="true" class="home icon"></i>{this.props.team}
      </div>
      <div className="player-data">
        <i aria-hidden="true" class="resize vertical icon"></i>{this.props.number}
      </div>
      <div className="player-data">
        <i aria-hidden="true" class="star icon"></i>{this.props.star}
      </div>
      <div className="player-data">
        <i aria-hidden="true" class="trophy icon"></i>{this.props.trophy}
      </div>
      <hr className="hr-profile"/>
      <div className="vote">
        <button className="button-profile" onClick={this.increaseVote}>VOTE</button>
        <VoteCount count={this.state.count}/>
      </div>
    </div>)
  }
}
