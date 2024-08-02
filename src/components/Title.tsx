import styled from 'styled-components'

const StyledTitle = styled.h1`
  position: absolute;
  top: 8vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  font-family: 'Bodoni Moda', sans-serif;
  word-spacing: 20px;
  letter-spacing: -10px;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    letter-spacing: -5px;
    word-spacing: 10px;
    margin-bottom: 10vh;
  }

  @media only screen and (max-width: 768px) {
    letter-spacing: -1px;
    word-spacing: 5px;
    margin-bottom: 5vh;
  }
`

const StyledSpan = styled.span`
  display: inline-block;

  &.green-text {
    color: var(--active);
  }
`

interface TitleProps {
  title: string[]
}

export default function Title({ title }: TitleProps) {
  return (
    <StyledTitle>
      {[...title[0]].map((letter, index) => (
        <StyledSpan key={index}>{letter}</StyledSpan>
      ))}
      &nbsp;
      {[...title[1]].map((letter, index) => (
        <StyledSpan key={index} className="green-text">
          {letter}
        </StyledSpan>
      ))}
    </StyledTitle>
  )
}
