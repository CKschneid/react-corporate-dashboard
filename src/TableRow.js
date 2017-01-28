import React, {Component} from 'react'
import formatRemarks from './utils/formatRemarks'

const TableRow = (props) => {
  const {issue, onDescriptionChange} = props
  const { issue_id, creation_date, created_by,
          status, description_short, description_long,
          ongoing_remarks, more_requested
        } = issue

  return (
    <tr>
      <td>{issue_id}</td>
      <td>{creation_date}</td>
      <td>{created_by}</td>
      <td>{status}</td>
      <td style={{textAlign: "left", maxWidth: "300px"}}>
        <p>{description_short}</p>
        <br/>
        <span onClick={()=> onDescriptionChange(issue_id)} style={{textDecoration: 'underline'}}>View Long Description</span>
        <p>{ more_requested ? description_long : ' '}</p>
      </td>
      <td style={{textAlign: "left"}}>
        <ul>{ formatRemarks(ongoing_remarks) }</ul>
      </td>
    </tr>
  )
}

export default TableRow
