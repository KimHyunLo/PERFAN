import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3rem;
`

const StyledLink = styled(NavLink)`
  &.active .path {
    color: var(--active);
  }

  .number {
    font-size: 1.2rem;
    color: var(--gray);
  }

  .path {
    margin-top: 10px;
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
          <StyledLink to="/projects">
            <div className="number">03</div>
            <div className="path">projects</div>
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
