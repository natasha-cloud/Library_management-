import React, {useState } from 'react'

const ErrorAlert = ({message, showError }) => {

  const [error_is_shown, setError_is_shown] = useState(false)

  return (
    <div key={message} className={ `alert alert-danger alert-dismissible ${ showError ? '' : 'd-none' }` } role="alert">
       <div>{message}</div>
       <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default ErrorAlert
