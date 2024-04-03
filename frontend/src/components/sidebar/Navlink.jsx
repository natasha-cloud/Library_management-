import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navlink = ({linktext, link='/', linkdata = []})=> {

const [isopen , setisopen] = useState(false)

  const openNav = () => {
    setisopen( o => !o )
  }



    if(linkdata.length > 1){
        return (
            <>
                <li  className='nav-item' onClick={ openNav }>
                    { linktext}
                    <i className={ `bi ${ isopen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                </li>
                    <ul className={`nav-accordion  ${ isopen ? 'show' : '' } ` }>
                        {linkdata}
                    </ul>
            </>
          )
    }

    return (
        <Link to={link}>
            <li className='nav-item' >{ linktext }</li>
        </Link>
    )
  
}

export default Navlink
