import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Title from '../components/Title'
import Nav from '../components/Nav'
import Scrollbar from '../components/Scrollbar'

const StyledMain = styled.main`
  padding-top: 55vh;

  @media only screen and (max-width: 1024px) {
    padding-top: 40vh;
  }

  @media only screen and (max-width: 640px) {
    padding-top: 27vh;
  }
`

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
    <>
      <Header />
      <Title title={title} />
      <Nav />
      <Scrollbar target={document.body} />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  )
}

export default Layout
