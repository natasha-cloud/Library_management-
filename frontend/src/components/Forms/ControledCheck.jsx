const ControledCheck = ({genre, togglecheck , checked }) => {
  return (
    <
      div className="form-check col-6 my-2" key={genre.id}>
    <input type="checkbox" className="form-check-input"    id={ `check_${ genre.id}` }  checked={checked} onChange={()=>togglecheck(genre.id)} />
    <label htmlFor={ `check_${ genre.id}`} className='form-check-label'  >{ genre.name}</label>
</div>
  )
}

export default ControledCheck
