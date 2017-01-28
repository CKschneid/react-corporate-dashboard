import React, {Component} from 'react'
import {Link} from 'react-router'

class NavBarContainer extends Component{
  constructor(props){
  	super(props)
  	this.state = {}
  }
  render(){
    return(
      <div>
        <div className="nav-holder">
          <Link to="/geo" activeStyle={{ color: 'red' }}>
            <span className="nav-link"> Personnel Distribution </span>
          </Link>
          <Link to="/viz" activeStyle={{ color: 'red' }}>
            <span className="nav-link"> Key Metrics </span>
          </Link>
          <Link to="/table" activeStyle={{ color: 'red' }}>
            <span className="nav-link"> Ticket Tracker</span>
          </Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default NavBarContainer
