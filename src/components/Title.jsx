import styled from 'styled-components'

const StyledTitle = styled.h1`
  text-align: center;
  font-family: 'Bodoni Moda', sans-serif;
  word-spacing: 2rem;
  margin-bottom: 15vh;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 10vh;
  }

  @media only screen and (max-width: 640px) {
    margin-bottom: 5vh;
  }
`

const StyledHighlightTitle = styled.span`
  color: var(--active);
`

export default function Title({ title }) {
  return (
    <StyledTitle>
      {title[0]} <StyledHighlightTitle>{title[1]}</StyledHighlightTitle>
    </StyledTitle>
  )
}
