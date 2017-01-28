// creation_date, created_by, status
const mapToVisibleIssues = (issues, sortBy, sortDirection) => {
  return (
      issues.sort((a,b) => {
        let aComparator = a[sortBy].toUpperCase()
        let bComparator = b[sortBy].toUpperCase()

        if(aComparator < bComparator){
          if(sortDirection == 'ascending'){
            return -1
          }
          else {
            return 1
          }
        }
        if(aComparator > bComparator){
          if(sortDirection == 'ascending'){
            return 1
          }
          else {
            return -1
          }
        }
        return 0
      })
  )
}

export default mapToVisibleIssues
