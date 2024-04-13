import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { register } from 'swiper/element/bundle'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root.jsx'
import  Home  from './routes/Home.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Catalogue from './routes/Catalogue.jsx'
import BookDetail from './routes/BookDetail.jsx'

import { getbooks, getbook, getpatrons, getauthors } from './loaders/loaders.jsx'
import BookAddition from './routes/BookAddition.jsx'
import { createBookAction, createPatronAction, createAuthorAction } from './actions/Actions.jsx'
import Patrons from './routes/Patrons.jsx'
import PatronAddition from './routes/PatronAddition.jsx'
import AuthorSelection from './routes/AuthorSelection.jsx'

// Register swiper globally
register()

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element:<Home/>},
      {
        path: '/patrons',
        element: <Patrons/>, 
        loader: getpatrons,
     }, 
     {
      path: '/add/patron',
      element: <PatronAddition/>,
      action: createPatronAction,
      }, 
      {
        path: '/catalogue',
        element: <Catalogue/>, 
        loader: getbooks
     }, 
      {
        path: '/book/:bookid/',
        element: <BookDetail/>,
        loader: getbook
     }, 
      {
        path: '/add/book',
        element: <BookAddition/>,
        action: createBookAction
     }, 
      {
        path: '/select_book/author',
        element: <AuthorSelection/>,
        loader: getauthors,
        action: createAuthorAction,
     }, 
    ]
    
  },

 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
