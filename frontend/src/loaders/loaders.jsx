import axios from 'axios'
import { createRoutesFromChildren } from 'react-router-dom'

export const getbooks = async  ({ request }) => {

   const url = new URL(request.url)
      const q = url.searchParams.get('q')
      let books =[]

      const endpoint = q ? `/api/search/book/${q}/` : '/api/books/';


    try{
       const response = await axios.get(endpoint)
       books = response.data
       
    } catch(error ) {
       console.log(error)
    }
   
 
    return { books , q }
 }


 export const getbook = async ({params}) => {
     
     try{
        const url = `/api/book/${params.bookid}`
        const response = await axios.get(url)
    
        return response.data
    } catch(error){
        console.log(error)
    }

    return  response
 }



 export const getpatrons = async ({ request }) =>{

      const url = new URL(request.url)
      const q = url.searchParams.get('q')
      let patrons =[]

      const endpoint = q ? `/api/serach/patron/${q}/` : '/api/patrons/';

      try{
         const response = await axios.get(endpoint)
         patrons = response.data
         
       
      } catch (errors){
         console.log(errors)
      }
   
      
      

      return { patrons , q }
 }

 export const getauthors  = async ({ request }) => {

   const url = new URL(request.url)
   const q = url.searchParams.get('q')
   let  authors =[]

   const endpoint = q ? `/api/search/author/${q}/` : '/api/book_authors/';

   try{
       const response = await axios.get(endpoint)
       authors = response.data
   } catch(errors){
       console.log(errors)
   }


   return { authors, q }
}