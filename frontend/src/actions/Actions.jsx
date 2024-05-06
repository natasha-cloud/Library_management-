import { redirect } from 'react-router-dom'
import axios from 'axios'


const createBook = async (data) => {
    try{
       const response =  await axios.post('/api/add/book/', data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
       }
         
       )
       return redirect('/select_book/author')
    } catch (error){
        console.log(error)
    }

    
     
}

const createPatron = async (data) => {
    try{
       const response =  await axios.post('/api/add/patron/', data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
       })
        console.log(response)
        return response.data
    } catch (error){
        console.log(error)
    }
     
}

const createAuthor = async (data) => {
    try{
       const response =  await axios.post('/api/create/book/author/', data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
       })
        console.log(response)
        return response.data
    } catch (error){
        console.log(error)
    }
     
}



export const createBookAction = async ({request}) =>{
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const errors = createBook(data)
    if(errors){
        return errors
    }
    return redirect('/add/book')

}

export const createPatronAction = async ({request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const response_data = createPatron(data)
    
}

export const createAuthorAction = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const response_data = createAuthor(data)
    return redirect('/select_book/author')
}

const issuebook =   async (data) => {
    try{
        await axios.post('/api/issue/book/', data)
        return {success : {message: 'Issue recorded successfully'} }
    } catch (error){
       return error
    }
     
}

export const createBookIssue = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const response_data = await issuebook(data)
    return  response_data 
}


