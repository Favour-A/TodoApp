import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/Login'
import ToDo from './pages/ToDo'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
 const router = createBrowserRouter([
  
   { path: '/',
     element: <LoginPage/>},
     { path: '/to-do',
      element: <ToDo/>},
      {
        path: '/*',
        element: 'NotFound'
      }

      
])
     
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
