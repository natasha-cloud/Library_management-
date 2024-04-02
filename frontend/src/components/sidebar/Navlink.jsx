import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navlink = ({ hasdropdown, linktext, link })=> {

const [isopen , setisopen] = useState(false)

  const openNav = () => {
    setisopen( o => !o )
  }

    if(hasdropdown){
        return (
            <>
                <li  className='nav-item' onClick={ openNav }>
                    { linktext}
                    <i className='bi bi-chevron-down'></i>
                </li>
                    <ul className={`nav-accordion  ${ isopen ? '' : 'show' } ` }>
                        <Link to={link}>
                        <li className='nav-item'>Add members</li>
                        </Link>
                    </ul>
            </>
          )
    }

    return (
        <li>

        </li>
    )
  
}

export default Navlink
