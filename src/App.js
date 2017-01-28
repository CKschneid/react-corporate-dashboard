import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import GeoViewContainer from './GeoViewContainer'
import VizViewContainer from './VizViewContainer'
import NavBarContainer from './NavBarContainer'
import TableViewContainer from './TableViewContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={NavBarContainer}>
          <IndexRedirect to="/geo" />
          <Route path="/geo" component={GeoViewContainer}/>
          <Route path="/viz" component={VizViewContainer}/>
          <Route path="/table" component={TableViewContainer}/>
        </Route>
      </Router>
    )
  }
}

export default App
