import styled from 'styled-components'

const StyledTitle = styled.h1`
  text-align: center;
  font-family: 'Bodoni Moda', sans-serif;
  word-spacing: 2rem;
  letter-spacing: -10px;
  margin-bottom: 15vh;

  @media only screen and (max-width: 1024px) {
    letter-spacing: -5px;
    margin-bottom: 10vh;
  }

  @media only screen and (max-width: 768px) {
    letter-spacing: -1px;
    margin-bottom: 5vh;
  }
`

const StyledEm = styled.em`
  color: var(--active);
  font-weight: normal;
`

interface TitleProps {
  title: string[]
}

export default function Title({ title }: TitleProps) {
  return (
    <StyledTitle>
      {title[0]} <StyledEm>{title[1]}</StyledEm>
    </StyledTitle>
  )
}
