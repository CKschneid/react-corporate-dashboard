import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'


const  TableHead = ({onFilterClick}) => {
  return (
    <thead>
        <tr>
          <th>
            Issue ID
          </th>
          <th>
              Date Initialized
              <FontAwesome className='fa-arrow'
                           name='chevron-up'
                           size="lg"
                           onClick={() => onFilterClick('creation_date', 'ascending')}
                           />
              <FontAwesome className='fa-arrow'
                           name='chevron-down'
                           size="lg"
                           onClick={() => onFilterClick('creation_date', 'descending')}
                           />
          </th>
          <th>
              Created By
              <FontAwesome className='fa-arrow'
                           name='chevron-up'
                           size='lg'
                           onClick={() => onFilterClick('created_by', 'ascending')}
                           />
              <FontAwesome className='fa-arrow'
                           name='chevron-down'
                           size='lg'
                           onClick={() => onFilterClick('created_by', 'descending')}
                           />
          </th>
          <th>
              Status
              <FontAwesome className='fa-arrow'
                           name='chevron-up'
                           size='lg'
                           onClick={() => onFilterClick('status', 'ascending')}
                           />
              <FontAwesome className='fa-arrow'
                           name='chevron-down'
                           size='lg'
                           onClick={() => onFilterClick('status', 'descending')}
                           />
          </th>
          <th>
              Short Description
          </th>
          <th>
              Remarks
          </th>
        </tr>
    </thead>
  )
}

export default TableHead
