import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'

import Navlink from '../components/sidebar/Navlink'

const Home = () => {

 const  ManageMembers_dd = [
    {
      linktext: 'Members',
      link : '/members'
    },
    
    {
      linktext: 'Add members',
      link : '/add/members'
    },

    {
      linktext: 'Fines',
      link : '/fines'
    },

  ]


  const managemembers_list = ManageMembers_dd.map((list_item, index) =>{
    <li key={index}>
      <Link to={ list_item.link}>
      { list_item.linktext }
      </Link>
    </li>
  })
  
  return (
    <div id="main">
     <nav id="sidebar">
      <ul id="navigation">
        <h1 className="fs-5 text-uppercase"><Link to="/">WizBank Library</Link></h1>
        {/* <li className='nav-item' onClick={ openNav }>
         
            Manage members <i className='bi bi-chevron-down'></i>
          </li>
          <ul className={`nav-accordion  ${ isopen ? '' : 'show' } ` }>
            <li className='nav-item'>Members</li>
            <li className='nav-item'>Add member</li>
          </ul> */}

          <Navlink hasdropdown={true} link={'/'} linktext={'Manage members'} greeting='How are you' />
        <li className='nav-item'>Manage books</li>
        <li className='nav-item'>Issue book</li>
        <li className='nav-item'>Issued books</li>
      </ul>
     </nav>
    </div>
  )
}

export default Home
