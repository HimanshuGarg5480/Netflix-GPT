import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browser from './Browser'

const Body = () => {
    const reactRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browser',
            element:<Browser/>
        }
    ])
  return (
    <RouterProvider router={reactRouter}/>
  )
}

export default Body