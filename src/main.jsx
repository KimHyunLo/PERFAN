import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import ErrorPage from './routes/ErrorPage'
import Layout from './routes/Layout'
import About from './routes/About'
import Works from './routes/Works'
import Contact from './routes/Contact'
import Main from './routes/Main'
import { SideMenuProvider } from './context/SideMenuContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/works',
        element: <Works />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SideMenuProvider>
      <RouterProvider router={router} />
    </SideMenuProvider>
  </React.StrictMode>,
)
