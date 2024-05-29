import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
import Title from '../components/Title'
import Nav from '../components/Nav'

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
