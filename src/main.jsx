import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import ErrorPage from './ErrorPage'
import Layout from './routes/Layout'
import About from './routes/About'
import Works from './routes/Works'
import Script from './routes/Script'
import Contact from './routes/Contact'
import Main from './routes/Main'

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
        path: '/script',
        element: <Script />,
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
