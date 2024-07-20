import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { SideMenuContext } from '../context/SideMenuContext'
import { useCustomContext } from '../hooks/useCustomContext'

const StyledMenu = styled.ul`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 4rem;
  background-color: var(--black);
  padding: 0 3rem;
  z-index: 1;

  @media only screen and (max-width: 640px) {
    padding: 0 1.5rem;
  }
`

const StyledLink = styled.div`
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;

  &.active {
    color: var(--active-difference);
  }

  .path {
    font-family: 'Bodoni Moda', sans-serif;
    text-transform: capitalize;
    line-height: 1;
  }

  @media only screen and (max-width: 640px) {
    .number {
      font-size: 12px;
    }
  }
`

function SideMenu() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { toggleSideMenu } = useCustomContext(SideMenuContext)

  function handleClick(path) {
    navigate(path)
    toggleSideMenu()
  }

  return createPortal(
    <StyledMenu>
      <li>
        <StyledLink
          className={`${pathname === '/' ? 'active' : ''}`}
          onClick={() => handleClick('/')}
        >
          <div className="number">01</div>
          <h2 className="path">main</h2>
        </StyledLink>
      </li>
      <li>
        <StyledLink
          className={`${pathname === '/about' ? 'active' : ''}`}
          onClick={() => handleClick('/about')}
        >
          <div className="number">02</div>
          <h2 className="path">about</h2>
        </StyledLink>
      </li>
      <li>
        <StyledLink
          className={`${pathname === '/projects' ? 'active' : ''}`}
          onClick={() => handleClick('/projects')}
        >
          <div className="number">03</div>
          <h2 className="path">projects</h2>
        </StyledLink>
      </li>
      <li>
        <StyledLink
          className={`${pathname === '/contact' ? 'active' : ''}`}
          onClick={() => handleClick('/contact')}
        >
          <div className="number">04</div>
          <h2 className="path">contact</h2>
        </StyledLink>
      </li>
    </StyledMenu>,
    document.body,
  )
}

export default SideMenu
