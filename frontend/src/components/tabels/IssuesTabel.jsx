import React from 'react'

const IssuesTabel = ({issues}) => {
  console.log(issues)

  const table_data = issues.map((issue) => {
    // const is_overdue = true && issue.is_book_overdue.toLowerCase() === 'true'
    // ToDO: Use the post save signal of the model to define the is_book_overdue field.
    return <tr key={issue.id}>
      <td>{issue.patron.full_name}</td>
      <td>{ issue.patron.id}</td>
      <td>{ issue.book.title}</td>
      <td><img src={issue.book.image} alt={issue.book.title} className="img-fluid rounded-circle" style={{ width: "50px", height: "50px" }} /></td>
      <td>{issue.book_copy.ISBN}</td>
      <td>{issue.check_out_date}</td>
      <td>{issue.return_date}</td>
      <td>{issue.check_in_date}</td>
      <td>{is_overdue ? <i className="bi bi-check-circle-fill check"></i> : <i className="bi bi-x-circle-fill x-cross"></i> }</td>
      <td>{is_overdue ? issue.fine : '----'}</td>
    </tr>
  })
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover my-3">
      <thead className='table-dark'>
        <tr>
          <th>Patron</th>
          <th>ID</th>
          <th>Book</th>
          <th>Image</th>
          <th>Book Copy</th>
          <th>Date borrowed</th>
          <th>Return date</th>
          <th>Checkin date</th>
          <th>Is overdue</th>
          <th>Fine</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {table_data}
      </tbody>
    </table>
    </div>
  )
}

export default IssuesTabel
