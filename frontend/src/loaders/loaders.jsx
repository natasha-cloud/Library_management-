import axios from 'axios'
import { createRoutesFromChildren } from 'react-router-dom'

export const getbooks = async  () => {
    try{
       const response = await axios.get('/api/books/')
       return response.data
    } catch(error ) {
       console.log(error)
    }
   
 
    return response
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

 const fetchpetrons = async (q) => {
   const endpoint = q ? `/api/serach/patron/${q}/` : '/api/patrons/';
   console.log(endpoint)

   try{
      const response = await axios.get(endpoint)
      console.log(response)
      return  response.data
    
   } catch (errors){
      console.log(errors)
   }

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