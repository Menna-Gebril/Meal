import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.scss'
import Home from "./components/Home/Home.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MealDetails from './components/MealDetails/MealDetails.jsx'
import LayOut from './components/LayOut/LayOut.jsx'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "",
        element: <LayOut />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/meal/:id",
            element: <MealDetails />
          }
        ]
      }

    ]
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
