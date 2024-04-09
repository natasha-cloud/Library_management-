import React, { useState } from 'react'

const ControledCheck = ({genre}) => {

    const [is_checked, setis_Checked] = useState(false)
    const handlecheck = () => setis_Checked((c) => !c)
    
  return (
    <
      div className="form-check col-6 my-2" key={genre.id}>
    <input type="checkbox" className="form-check-input"   name='genres' value={genre.url} id={ `check_${ genre.id}` }  checked={is_checked}  onChange={handlecheck} />
    <label htmlFor={ `check_${ genre.id}`} className='form-check-label'  >{ genre.name}</label>
</div>
  )
}

export default ControledCheck
