import React, {Component} from 'react'
const formatRemarks = (remarks) => {
  return(
    remarks.map( (remark, index) => {
      return (
        <li key={index}>
          <div>
            date logged: {remark.date_logged}<br/>
            remark by: {remark.remark_by}<br/>
            remark: {remark.remark}
          </div>
        </li>
      )
    })
  )
}

export default formatRemarks
