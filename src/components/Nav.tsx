import styled from 'styled-components'
import { useState } from 'react'
import { useCustomContext } from '../hooks/useCustomContext '
import { SectionsContext } from '../store/section-context'
import { useScroll } from '../hooks/useScroll'
import { useAnimation } from '../hooks/useAnimation'

const StyledNav = styled.nav`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  z-index: 9999;
  transition: all 0.5s;

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`

const StyledListItem = styled.li`
  width: max(80px, 5vw);
`

const StyledButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  transition: all 0.2s;
  z-index: 1;

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }

  &.text {
    cursor: default;
  }

  .number {
    color: var(--gray);
    align-self: start;
  }

  &:hover {
    .sans span,
    .serif span {
      transform: translateY(min(-15px, -0.9vw));
    }
  }
`

const StyledTitleBox = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100vw;
  height: 0;
  background-color: var(--black);
  overflow: hidden;
`

const StyledTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Bodoni Moda', sans-serif;
  font-size: max(45px, 10vw);
  text-align: center;
  letter-spacing: -5px;
  color: var(--dark-gray);

  span {
    transform: translateY(25vh);
    cursor: default;

    &:nth-child(1) {
      text-transform: uppercase;
    }
  }
`

const StyledLinkBox = styled.div`
  height: max(15px, 0.9vw);
  line-height: 1;
  overflow: hidden;

  .serif {
    font-family: 'Bodoni Moda', sans-serif;
    color: var(--white);
  }
`

const StyledLetterSpan = styled.span<{ $delay: number }>`
  display: inline-block;
  transition: all 0.5s;
  ${({ $delay }) => `transition-delay: ${$delay / 50}s`}
`

export default function Nav() {
  const { isNavHidden, setLastScrollY } = useScroll()
  const { navTransition, navItemHover } = useAnimation()
  const { sections, onNavClick } = useCustomContext(SectionsContext)
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  // 메뉴 버튼 클릭
  function handleClick(index: number) {
    setIsButtonClicked(true)
    navTransition(index)
    document.body.style.overflow = 'hidden'

    setTimeout(() => {
      onNavClick(sections[index].ref.current)
      setLastScrollY(window.scrollY)
    }, 1700)

    setTimeout(() => {
      setIsButtonClicked(false)
      document.body.style.overflow = 'unset'
    }, 3000)
  }

  function handleMoustEnter(index: number) {
    if (!isButtonClicked) {
      navItemHover(index).play()
    }
  }

  function handleMoustLeave(index: number) {
    if (!isButtonClicked) {
      navItemHover(index).reverse(0)
    }
  }

  return (
    <StyledNav className={`${isNavHidden ? 'hidden' : ''}`}>
      <StyledList>
        {sections.map((section, sectionIndex) => (
          <StyledListItem key={section.nav}>
            <StyledTitleBox className={`title-box${sectionIndex}`}>
              <StyledTitle className="title">
                {[...section.nav].map((letter, index) => (
                  <StyledLetterSpan key={index} $delay={index}>
                    {letter}
                  </StyledLetterSpan>
                ))}
              </StyledTitle>
            </StyledTitleBox>
            <StyledButton
              className={`${isButtonClicked ? 'hidden' : ''}`}
              onClick={() => handleClick(sectionIndex)}
              onMouseEnter={() => handleMoustEnter(sectionIndex)}
              onMouseLeave={() => handleMoustLeave(sectionIndex)}
            >
              <div className="number small-font">0{sectionIndex + 1}</div>
              <StyledLinkBox>
                <div className="sans">
                  {[...section.nav].map((letter, index) => (
                    <StyledLetterSpan key={index} $delay={index}>
                      {letter}
                    </StyledLetterSpan>
                  ))}
                </div>
                <div className="serif">
                  {[...section.nav].map((letter, index) => (
                    <StyledLetterSpan key={index} $delay={index}>
                      {letter}
                    </StyledLetterSpan>
                  ))}
                </div>
              </StyledLinkBox>
            </StyledButton>
          </StyledListItem>
        ))}
        <StyledListItem>
          <StyledButton className={`text ${isButtonClicked ? 'hidden' : ''}`}>
            <StyledLinkBox>ⓒ 2024.</StyledLinkBox>
          </StyledButton>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  )
}
