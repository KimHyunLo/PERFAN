import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Title from '../components/Title'
import Nav from '../components/Nav'
import styled from 'styled-components'

const StyledMain = styled.main`
  margin-top: 50vh;
`

function Layout() {
  return (
    <>
      <Header />
      <Title />
      <Nav />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  )
}

export default Layout
