import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import AuthProvider from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <div className='max-w-screen-xl m-auto'>
            <AuthProvider>
               <RouterProvider router={router}></RouterProvider>
            </AuthProvider>
          </div>
  </React.StrictMode>,
)
