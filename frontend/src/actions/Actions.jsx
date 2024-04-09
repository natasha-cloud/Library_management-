import { redirect } from 'react-router-dom'
import axios from 'axios'


const createBook = async (data) => {
    try{
       const response =  await axios.post('/api/add/book/', data, {
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

export const createBookAction = async ({request}) =>{
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const response_data = createBook(data)
   
    return redirect('/add/book')
}

export const createPatronAction = async ({request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const response_data = createPatron(data)
    
}
