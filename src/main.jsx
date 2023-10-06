import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProvider from './Providers/AuthProvider'

// Live Link : https://651ed242c7102304b28e82b9--cool-semifreddo-be4aa1.netlify.app/
// Local Link : https://github.com/RajobAli/newsreactapp


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </React.StrictMode>,
)
