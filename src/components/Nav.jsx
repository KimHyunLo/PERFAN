import { Link } from 'react-router-dom'

export default function Nav() {
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
