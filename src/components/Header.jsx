import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeaderLayout = styled.div`
  position: relative;
  margin: 26px 30px 0 30px;
`

const HeaderTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  font-weight: 500;
`

const HeaderEm = styled.em`
  font-style: normal;
  color: var(--active);
  font-family: 'Now', sans-serif;
  font-weight: 700;
`

const HeaderSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;

  &.left-item::before {
    content: '';
    background-image: url(megaphone.svg);
    background-position: center;
    background-repeat: no-repeat;
    width: 34px;
    height: 34px;
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
        <HeaderItem>portfolio</HeaderItem>
      </HeaderSide>
    </StyledHeaderLayout>
  )
}
