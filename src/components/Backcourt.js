import React, {Component} from 'react'
import "./Component.css"
import Profile from './Profile'

export default class Backcourt extends Component {
  render() {
    return (<div class="ui centered cards">
      <div class="ui card">
        <Profile image="/images/kyrieirving.png" name="Kyrie Irving" team="Boston Celtics" number="191 cm" trophy="1x NBA Champion" star="5x NBA All-Star"/>
      </div>
    </div>)
  }
}
