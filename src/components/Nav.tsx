import styled from 'styled-components'
import { useCustomContext } from '../hooks/useCustomContext '
import { SectionsContext } from '../store/section-context'
import { useState } from 'react'

const StyledNav = styled.nav`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  z-index: 1;

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
  width: 80px;
`

const StyledButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
  margin: 0 auto;
  z-index: 1;

  .number {
    color: var(--gray);
    margin-bottom: 15px;
    align-self: start;
  }

  &.text {
    cursor: default;
  }

  &:hover {
    .sans span,
    .serif span {
      transform: translateY(-0.9vw);
    }
  }
`

const StyledTitleBox = styled.div<{ $index: number }>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100vw;
  height: 0;
  background-color: var(--black);
  transition: all 0.5s;
  overflow: hidden;

  &.on${(props) => props.$index} {
    height: 25vh;

    .title span {
      transform: translateY(0);
    }
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-family: 'Bodoni Moda', sans-serif;
    font-size: max(45px, 13vw);
    word-spacing: 2rem;
    text-align: center;
    letter-spacing: -10px;
    line-height: 1;
    color: var(--dark-gray);

    span {
      transform: translateY(25vh);

      &:nth-child(1) {
        text-transform: uppercase;
      }
    }
  }
`

const StyledLinkBox = styled.div`
  height: 0.9vw;
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
  const { sections, onNavClick } = useCustomContext(SectionsContext)
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [title, setTitle] = useState<number>(0)

  function handleClick(index: number) {
    onNavClick(sections[index].ref.current)
  }

  function handleMoustEnter(index: number) {
    setIsSelected(true)
    setTitle(index)
  }

  function handleMoustLeave() {
    setIsSelected(false)
  }

  return (
    <StyledNav>
      <StyledList>
        {sections.map((section, sectionIndex) => (
          <StyledListItem key={section.nav}>
            <StyledTitleBox className={`${isSelected && `on${sectionIndex}`}`} $index={title}>
              <div className="title">
                {[...section.nav].map((letter, index) => (
                  <StyledLetterSpan key={index} $delay={index}>
                    {letter}
                  </StyledLetterSpan>
                ))}
              </div>
            </StyledTitleBox>
            <StyledButton
              onClick={() => handleClick(sectionIndex)}
              onMouseEnter={() => handleMoustEnter(sectionIndex)}
              onMouseLeave={handleMoustLeave}
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
          <StyledButton className="text">
            <StyledLinkBox>ⓒ 2024.</StyledLinkBox>
          </StyledButton>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  )
}
