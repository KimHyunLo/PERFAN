import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
`

const StyledLink = styled(NavLink)`
  &.active .path {
    color: var(--active);
    border-bottom: 1px solid var(--active);
  }

  .number {
    font-size: 10px;
    color: var(--gray);
  }

  .path {
    font-weight: 500;
    margin-top: 8px;
    line-height: 1.2;
  }
`

export default function Nav() {
  return (
    <StyledNav>
      <StyledUl>
        <li>
          <StyledLink to="/">
            <div className="number">01</div>
            <div className="path">main</div>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/about">
            <div className="number">02</div>
            <div className="path">about</div>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/works">
            <div className="number">03</div>
            <div className="path">works</div>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">
            <div className="number">04</div>
            <div className="path">contact</div>
          </StyledLink>
        </li>
        <li>
          <div className="path">ⓒ 2024.</div>
        </li>
      </StyledUl>
    </StyledNav>
  )
}
