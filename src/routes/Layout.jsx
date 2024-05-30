import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
import Title from '../components/Title'
import Nav from '../components/Nav'

const StyledMain = styled.main`
  margin-top: 55vh;

  @media only screen and (max-width: 1024px) {
    margin-top: 40vh;
  }

  @media only screen and (max-width: 640px) {
    margin-top: 24vh;
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
    case '/works':
      title = ['My', 'Works']
      break
    case '/contact':
      title = ['Contact', 'Me']
      break
  }

  return (
    <>
      <Header />
      <Title title={title} />
      <Nav />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  )
}

export default Layout
