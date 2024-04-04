import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { register } from 'swiper/element/bundle'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  Home  from './routes/Home.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Catalogue, { getbooks } from './routes/Catalogue.jsx'
import BookDetail from './routes/BookDetail.jsx'

// Register swiper globally
register()

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'catalogue/',
        element: <Catalogue/>, 
        loader: getbooks
     }, 
      {
        path: 'book/:bookid',
        element: <BookDetail/>
     }, 
    ]
    
  },

 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
