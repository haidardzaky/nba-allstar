import React, {Component} from 'react'
import "./Component.css"
import {Button} from 'semantic-ui-react'

import Backcourt from './Backcourt'
import Frontcourt from './Frontcourt'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class Body extends Component {
  render() {
    return (<Router>
      <div>
        <h3 className="upper-word">Choose your favorite players !</h3>
        <div className="button-body">
          <Link to="/backcourt">
            <Button color="inverted blue">
              Backcourt
            </Button>
          </Link>
          <Link to="/frontcourt">
            <Button color="inverted red">
              Frontcourt
            </Button>
          </Link>
        </div>
        <br/>
        <Route path="/backcourt" component={Backcourt}/>
        <Route path="/frontcourt" component={Frontcourt}/>

      </div>

    </Router>)
  }
}
