import { Link, Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <Header />
      <Title />
      <Nav />
      <Outlet />
    </div>
  )
}

function Header() {
  return <div>HEADER</div>
}

function Title() {
  return (
    <div>
      <span>Perfect</span>
      <em>Plan</em>
    </div>
  )
}

function Nav() {
  return (
    <ul>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/works">works</Link>
      </li>
      <li>
        <Link to="/script">script</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
    </ul>
  )
}

export default Root
