import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Click from './components/Click'
import Love from './components/Love'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Click />
    },
    {
      path: "/love",
      element: <Love />
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App