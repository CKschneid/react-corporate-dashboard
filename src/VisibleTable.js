import React,{Component} from 'react';
import TableRow from './TableRow'


export default class VisibleTable extends Component {
    render() {
        const {issues, onDescriptionChange} = this.props
        return (
          <tbody>
            {
              issues.map( (issue, index) => {
                return(
                  <TableRow issue={issue}
                            key={index}
                            onDescriptionChange={onDescriptionChange}/>
                )
              })
            }
        </tbody>
        )
    }
}
