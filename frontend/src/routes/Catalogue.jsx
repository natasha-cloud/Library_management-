import React from 'react'
import { useLoaderData , useNavigation, Link } from 'react-router-dom';

import BookCard from './../components/BookCard/BookCard';
import Alphabet from '../components/sort and filter/Alphabet';
import axios from 'axios'


const Catalogue = () => {
   const result = useLoaderData()
   console.log(result)

   const bookdivs = result.map(book => {
      return  <div key={book.id} className="col-6 col-sm-3 col-lg-2 ">
      <BookCard book={ book } />
       
  </div>
   })
 
  return (
   <div className="container-fluid">
    <div className='querydiv d-flex flex-wrap justify-content-between align-items-center mb-3'>
      <div className="header d-flex justify-content-between flex-grow-1">
        <h2>Catalogue</h2>
        <span className="bookcount align-self-center rounded-pill border text-dark border-dark-subtle fw-bold px-1">123</span>
      </div>
      <div className='filter row justify-content-lg-end align-items-center'>
         <div className="col-sm-4 my-2">
            <div className="input-group flex-nowrap mx-2">
                    <i className='bi bi-filter-right fw-bold input-group-text' id="search-icon-title"></i>
                    <input type="search" className="form-control border border-primary" placeholder='Search title..' aria-label='Search title' aria-describedby='search-icon-title'/>
            </div>
         </div>
         <div className="col-sm-4 my-2">
            <div className="input-group flex-nowrap mx-2">
                    <i className='bi bi-person-fill fw-bold input-group-text' id="search-icon-author"></i>
                    <input type="search" className="form-control border border-primary" placeholder='Search author..' aria-label='Search author' aria-describedby='search-icon-author'/>
            </div>
         </div>
         <div className="col-sm-4 my-2">
            <select name="" id="" className="form-select border border-primary" aria-label="Filter books">
            <option defaultValue=''> Filter books</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
            </select>
         </div>
      </div>
      <div className="alphabet-slider">
        
      </div>

   </div> {/*  End of querydiv */}
   <Alphabet/>

        <div className="row">
           {bookdivs}
   
        </div>
   </div>
  )
}

export default Catalogue


export const getbooks = async  () => {
   try{
      const response = await axios.get('api/books/')
      return response.data
   } catch(error ) {
      console.log(error)
   }
  

   return response
}