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
      <span
        style={{
          fontFamily: 'Bodoni Moda',
          fontSize: 100,
        }}
      >
        Perfect{' '}
      </span>
      <span
        style={{
          fontFamily: 'Bodoni Moda',
          fontSize: 100,
          color: `var(--active)`,
        }}
      >
        Plan
      </span>
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
