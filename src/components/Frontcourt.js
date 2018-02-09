import React, {Component} from 'react'
import "./Component.css"
import Profile from './Profile'

export default class Frontcourt extends Component {
  render() {
    return (<div class="ui centered cards">
      <div class="card">
        <Profile image="/images/frontcourt/kevindurant.png" name="Kevin Durant" team="Golden State Warriors" number="206 cm" trophy="1x NBA Champion" star="9x NBA All-Star"/>
      </div>
      <div class="card">
        <Profile image="/images/frontcourt/lebronjames.png" name="Lebron James" team="Cleveland Cavaliers" number="203 cm" trophy="4x NBA Champion" star="14x NBA All-Star"/>
      </div>
    </div>)
  }
}
