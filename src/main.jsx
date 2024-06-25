import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SideMenuProvider } from './context/SideMenuContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'

import { Layout, Main, About, Projects, Contact, ErrorPage } from './routes/Routes'
import { getProjects } from './services/apiProjects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: { ErrorPage },
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
        path: '/projects',
        element: <Projects />,
        loader: getProjects,
        errorElement: <ErrorPage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SideMenuProvider>
        <RouterProvider router={router} />
      </SideMenuProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
