import React from 'react'

import { NavLink, Link } from 'react-router-dom'
import Navlink from './Navlink'
const Sidebar = ({ sidebarActive, togglesidebar}) => {
    const  user_management = [
        {
          linktext: 'Patrons',
          link : '/patrons'
        },
        
        {
          linktext: 'Add patron',
          link : '/add/patron'
        },
    
        {
          linktext: 'Fines',
          link : '/fines'
        },
    
      ]
    const  book_management = [
        {
          linktext: 'Catalogue',
          link : '/catalogue'
        },
        
        {
          linktext: 'Add Book',
          link : '/add/book'
        },
    
        {
          linktext: 'Issue book',
          link : '/issue'
        },
    
      ]

     
    

   const createNavlinks = ( navlist) => {

    const list = navlist.map((list_item, index) =>{
        return <NavLink to={ list_item.link} key={index}>
     <li className='nav-item' >
       { list_item.linktext }
     </li>
       </NavLink>
   })

   return list

   }


  return (
    <nav id="sidebar" className={ ` ${ sidebarActive ? 'active': '' } `}>
    <ul id="navigation">
      <h1 className="fs-5 text-uppercase d-flex justify-content-between"><Link to="/">WizBank Library</Link> <span className='close-btn'><i className='bi bi-x' onClick={ togglesidebar } ></i></span></h1>
      
        <Navlink  linktext={'Manage members'} linkdata={ createNavlinks(user_management)} />
        <Navlink  linktext={'Manage books'} linkdata={createNavlinks(book_management)} />
        <Navlink linktext='Manage authors' link='/select_book/author/' />
        <Navlink linktext='Issued book' link='/issued_book/' />

    </ul>
   </nav>
  )
}

export default Sidebar
