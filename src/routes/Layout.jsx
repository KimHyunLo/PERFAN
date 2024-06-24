import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { Header, Title, Nav } from '../components/Components'
import ErrorPage from './ErrorPage'

const StyledMain = styled.main`
  margin-top: 55vh;

  @media only screen and (max-width: 1024px) {
    margin-top: 40vh;
  }

  @media only screen and (max-width: 640px) {
    margin-top: 27vh;
  }
`

function Layout() {
  const location = useLocation()
  let title = []

  switch (location.pathname) {
    case '/':
      title = ['Perfect', 'Plan']
      break
    case '/about':
      title = ['About', 'Me']
      break
    case '/projects':
      title = ['My', 'Projects']
      break
    case '/contact':
      title = ['Contact', 'Me']
      break
  }

  return (
    <Suspense fallback={<ErrorPage />}>
      <Header />
      <Title title={title} />
      <Nav />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </Suspense>
  )
}

export default Layout
