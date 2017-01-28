import React, {Component} from 'react'
import axios from 'axios'
import FontAwesome from 'react-fontawesome'
import TableHead from './TableHead'
import VisibleTable from './VisibleTable'
import mapToVisibleIssues from './utils/mapToVisibleIssues'

class TableViewContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      sortBy: "creation_date",
      sortDirection: "descending",
      issues: []
    }
    this.onFilterClick = this.onFilterClick.bind(this)
    this.onDescriptionChange = this.onDescriptionChange.bind(this)
    axios.get('issuesDatabase.json')
          .then(response => this.setState({issues: response.data.issues}))

  }

  onFilterClick(filter, direction){
    console.log('filter click event', filter, direction)
    this.setState({
      sortBy: filter,
      sortDirection: direction
    })
  }
  onDescriptionChange(issue_id){
    this.setState({
         ...this.state,
         issues: this.state.issues.map( issue => {
           if(issue.issue_id !== issue_id){
             return issue
           }
           return ({
             ...issue,
             more_requested: !issue.more_requested
           })
         }

         )}
    )
  }
render(){
    const {issues, sortBy, sortDirection} = this.state
    return (
        <div style={{width: '90%', margin: '25px auto'}}>
          <table style={{width:"100%", textAlign: "center"}}>
            <TableHead onFilterClick={this.onFilterClick}/>
            <VisibleTable issues={mapToVisibleIssues(issues, sortBy, sortDirection)}
                          onDescriptionChange={this.onDescriptionChange}
            />
          </table>
        </div>
    )
  }
}

export default TableViewContainer
