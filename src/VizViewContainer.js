import React, {Component} from 'react'
import {VictoryLine, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory'
import axios from 'axios'

class VizViewContainer extends Component{
  constructor(props){
  	super(props)
  	this.state = {

    }
    axios.get('keyMetrics.json')
          .then( response => this.setState(response.data))
  }
  render(){
    return(
      <div style={{width: '80%', margin: 'auto'}}>
        <h1 style={{color: 'red'}}>Current Issues {this.state.openIssues}</h1>
        <div style={{width: "100%"}}>
          <h1>Number of Paying Customers</h1>
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine data={this.state.payingCustomers}
                       x="month"
                       y="customers"
                       style={{
                                data: {opacity: 0.7},
                                labels: {fontSize: 12},
                                parent: {border: "1px solid #ccc"}
                              }}
                       domain={{y: [0, 1800]}}
              />
            </VictoryChart>
        </div>
        <div style={{width: "100%"}}>
        <h1>Newly Reported Issues</h1>
          <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
              <VictoryAxis
                tickValues={[
                             "JAN", "FEB", "MAR",
                             "APR", "MAY", "JUN",
                             "JUL", "AUG", "SEP",
                             "OCT", "NOV", "DEC"
                           ]}
                 style={{
                       ticks: {stroke: "grey"},
                       tickLabels: {fontSize: 8, padding: 5}
                     }}
              />
              <VictoryAxis dependentAxis />
              <VictoryBar data={this.state.issuesByMonth}
                          x={0} y={1}
              />
          </VictoryChart>
        </div>
      </div>
    )
  }
}

export default VizViewContainer
