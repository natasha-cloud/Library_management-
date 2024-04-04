import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1>Page Not Found</h1>
        <Link to='/'> Back to home</Link>
    </div>
  )
}

export default ErrorPage
