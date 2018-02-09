import React, {Component} from 'react'
import "./Component.css"
import Profile from './Profile'

export default class Backcourt extends Component {
  render() {
    return (<div class="ui centered cards">
      <div class="card">
        <Profile image="/images/backcourt/kyrieirving.png" name="Kyrie Irving" team="Boston Celtics" number="191 cm" trophy="1x NBA Champion" star="5x NBA All-Star"/>
      </div>
      <div class="card">
        <Profile image="/images/backcourt/stephencurry.png" name="Stephen Curry" team="Golden State Warriors" number="190 cm" trophy="2x NBA Champions" star="5x NBA All-Star"/>
      </div>
      <div class="card">
        <Profile image="/images/backcourt/rickyrubio.png" name="Ricky Rubio" team="Utah Jazz" number="193 cm" trophy="-" star="-"/>
      </div>
      <div class="card">
        <Profile image="/images/backcourt/jamesharden.png" name="James Harden" team="Houston Rockets" number="196 cm" trophy="-" star="6x NBA All-Star"/>
      </div>
      <div class="card">
        <Profile image="/images/backcourt/isaiahthomas.png" name="Isaiah Thomas" team="Cleveland Cavaliers" number="175 cm" trophy="-" star="2x NBA All-Star"/>
      </div>
      <div class="card">
        <Profile image="/images/backcourt/tonyparker.png" name="Tony Parker" team="San Antonio Spurs" number="188 cm" trophy="4x NBA Champions" star="6x NBA All-Star"/>
      </div>
      <div class="card">
        <Profile image="/images/backcourt/dwyanewade.png" name="Dwyane Wade" team="Cleveland Cavaliers" number="194 cm" trophy="3x NBA Champions" star="12x NBA All-Star"/>
      </div>
      <div class="card">
        <Profile image="/images/backcourt/westbrook.png" name="Russell Westbrook" team="Oklahoma City Thunder" number="191 cm" trophy="-" star="7x NBA All-Star"/>
      </div>
    </div>)
  }
}
