import React from 'react'
import { Form } from 'react-router-dom'
import BookSelection from '../components/Selections/BookSelection'
import PatronSelection from '../components/Selections/PatronSelection'
import BookCopySelection from '../components/Selections/BookCopySelection'

const IssueBook = () => {
  return (
    <Form className='container-fluid'>
      <div className="row">
        <div className="col-md-6 my-2">
            <BookSelection/>
        </div>
        <div className="col-md-6 my-2">
            <BookCopySelection/>
        </div>
        <div className="col my-2">
            <PatronSelection/>
        </div>
      </div>
    </Form>
  )
}

export default IssueBook
