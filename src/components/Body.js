import React, {Component} from 'react'
import "./Component.css"
import {Button} from 'semantic-ui-react'

import Backcourt from './Backcourt'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class Body extends Component {
  render() {
    return (<Router>
      <div>
        <h3 className="upper-word">Choose your favorite players !</h3>
        <div className="button-body">
          <Button color="inverted blue">
            <Link to="/backcourt">Backcourt</Link>
          </Button>
          <Button color="inverted red">Frontcourt</Button>
        </div>
        <br/>
        <Route path="/backcourt" component={Backcourt}/>

      </div>

    </Router>)
  }
}
