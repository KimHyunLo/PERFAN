import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Title from '../components/Title'
import Nav from '../components/Nav'

function Layout() {
  return (
    <>
      <Header />
      <Title />
      <Nav />
      <Outlet />
    </>
  )
}

export default Layout
