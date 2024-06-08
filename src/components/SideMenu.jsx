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
  gap: 40px;
  background-color: var(--black);
  padding: 0 3rem;
  z-index: 1;

  @media only screen and (max-width: 640px) {
    padding: 0 1.5rem;
  }
`

const StyledItem = styled.div`
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 30px;
  cursor: pointer;

  &.active {
    color: var(--active-difference);
  }

  .path {
    font-family: 'Bodoni Moda', sans-serif;
    text-transform: capitalize;
    font-size: 70px;
    line-height: 1;
  }

  @media only screen and (max-width: 640px) {
    .number {
      font-size: 12px;
    }

    .path {
      font-size: 40px;
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
        <StyledItem className={`${pathname === '/' ? 'active' : ''}`} onClick={() => handleClick('/')}>
          <div className="number">01</div>
          <div className="path">main</div>
        </StyledItem>
      </li>
      <li>
        <StyledItem className={`${pathname === '/about' ? 'active' : ''}`} onClick={() => handleClick('/about')}>
          <div className="number">02</div>
          <div className="path">about</div>
        </StyledItem>
      </li>
      <li>
        <StyledItem className={`${pathname === '/works' ? 'active' : ''}`} onClick={() => handleClick('/works')}>
          <div className="number">03</div>
          <div className="path">works</div>
        </StyledItem>
      </li>
      <li>
        <StyledItem className={`${pathname === '/contact' ? 'active' : ''}`} onClick={() => handleClick('/contact')}>
          <div className="number">04</div>
          <div className="path">contact</div>
        </StyledItem>
      </li>
    </StyledMenu>,
    document.body,
  )
}

export default SideMenu
