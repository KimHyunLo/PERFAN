import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SideMenuContext } from '../context/SideMenuContext'
import { useCustomContext } from '../hooks/useCustomContext'

import { SideMenu } from './Components'

const StyledHeaderLayout = styled.div`
  position: fixed;
  top: 26px;
  padding: 0 3rem;
  width: calc(100vw - 6rem);
  mix-blend-mode: difference;
  z-index: 2;

  @media only screen and (max-width: 640px) {
    top: 18px;
    padding: 0 1.5rem;
    width: calc(100% - 3rem);
  }
`

const HeaderTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Bodoni Moda', sans-serif;
  font-size: max(25px, 1.3vw);

  a {
    color: var(--black-difference);
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`

const HeaderEm = styled.em`
  font-family: 'Now', sans-serif;
  color: var(--active-difference);
`

const HeaderSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderItem = styled.div`
  font-size: max(12px, 0.8vw);
  font-weight: 200;
  color: var(--black-difference);

  &.left-item {
    display: flex;
    align-items: center;
    gap: 7px;

    &::before {
      content: '';
      background-image: url(/icons/megaphone.svg);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: max(30px, 1.5vw);
      height: max(30px, 1.5vw);
    }
  }

  @media only screen and (max-width: 1024px) {
    &.right-item {
      font-size: 0;
      cursor: pointer;

      &::before {
        content: '';
        display: block;
        background-image: url(/icons/menu.svg);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 30px;
        height: 20px;
      }

      &.close-btn::before {
        background-image: url(/icons/close.svg);
      }
    }
  }
`

export default function Header() {
  const { isMenuOpen, toggleSideMenu } = useCustomContext(SideMenuContext)

  return (
    <StyledHeaderLayout>
      <HeaderTitle>
        <Link>
          PERF<HeaderEm>AN</HeaderEm>
        </Link>
      </HeaderTitle>
      <HeaderSide>
        <HeaderItem className="left-item">Highflier Developer</HeaderItem>
        <HeaderItem
          className={`right-item ${isMenuOpen ? 'close-btn' : ''}`}
          onClick={toggleSideMenu}
        >
          portfolio
        </HeaderItem>
      </HeaderSide>
      {isMenuOpen && <SideMenu />}
    </StyledHeaderLayout>
  )
}
