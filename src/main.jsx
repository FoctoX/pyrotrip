import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import CreateTrip from './create-trip'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/sonner'
import ViewTrip from './view-trip'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:"/create-trip",
    element:<CreateTrip/>
  },
  {
    path:'/view-trip',
    element:<ViewTrip/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
