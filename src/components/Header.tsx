import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 1;
  padding: 3vh 0;
`

const StyledTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Bodoni Moda', sans-serif;
  font-size: max(25px, 1.3vw);

  @media only screen and (max-width: 640px) {
    display: none;
  }
`

const StyledEm = styled.em`
  font-family: 'Now', sans-serif;
  color: var(--active);
`

const StyledSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  @media only screen and (max-width: 768px) {
    padding: 0 15px;
  }
`

const StyledSideItem = styled.div`
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
  return (
    <StyledHeader>
      <StyledTitle>
        PERF<StyledEm>AN</StyledEm>
      </StyledTitle>
      <StyledSide>
        <StyledSideItem className="left-item small-font">Highflier Developer</StyledSideItem>
        <StyledSideItem className="small-font">Henry's Portfolio</StyledSideItem>
      </StyledSide>
    </StyledHeader>
  )
}
