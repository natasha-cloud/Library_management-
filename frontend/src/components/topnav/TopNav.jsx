import React from 'react'

const TopNav = ({ togglesidebar  }) => {
  return (
    <nav id="topbar" className='d-flex justify-content-between py-3 mb-3' >
    <div className="d-flex">
        <span className="menu-icon btn border-0 py-0">
            <i className='bi bi-list  me-3 fs-3' onClick={ togglesidebar } ></i>
        </span>
      <div className="input-group flex-nowrap mx-2">
              <i className='bi bi-search fw-bold input-group-text' id="search-icon-menu"></i>
              <input type="search" className="form-control" placeholder='Search book..' aria-label='Search' aria-describedby='search-icon-menu'/>
      </div>
       
    </div>
      <div className="d-flex">
        <i className="bi bi-bell-fill me-2"></i>
        <i className="bi bi-gear-fill  mx-2"></i>
      </div>
    </nav>
  )
}

export default TopNav
