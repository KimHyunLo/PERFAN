import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeaderLayout = styled.div`
  position: fixed;
  top: 26px;
  padding: 0 30px;
  width: 100%;
  mix-blend-mode: difference;
  z-index: 1;

  @media only screen and (max-width: 640px) {
    top: 18px;
    padding: 0 15px;
  }
`

const HeaderTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  font-weight: 500;

  a {
    color: var(--black-difference);
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`

const HeaderEm = styled.em`
  font-style: normal;
  color: var(--active-difference);
  font-family: 'Now', sans-serif;
  font-weight: 700;
`

const HeaderSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderItem = styled.div`
  font-size: 14px;
  color: var(--black-difference);

  &.left-item {
    display: flex;
    align-items: center;
    gap: 7px;

    &::before {
      content: '';
      background-image: url(megaphone.svg);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 30px;
      height: 30px;
    }
  }

  @media only screen and (max-width: 1024px) {
    &.right-item {
      font-size: 0;
      cursor: pointer;

      &::before {
        content: '';
        display: block;
        background-image: url(menu.svg);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 30px;
        height: 20px;
      }
    }
  }
`

export default function Header() {
  return (
    <StyledHeaderLayout>
      <HeaderTitle>
        <Link>
          PERF<HeaderEm>AN</HeaderEm>
        </Link>
      </HeaderTitle>
      <HeaderSide>
        <HeaderItem className="left-item">Highflier Developer</HeaderItem>
        <HeaderItem className="right-item">portfolio</HeaderItem>
      </HeaderSide>
    </StyledHeaderLayout>
  )
}
