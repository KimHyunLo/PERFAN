import styled from 'styled-components'

const StyledTitle = styled.h1`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  font-family: 'Bodoni Moda', sans-serif;
  letter-spacing: -1rem;
  word-spacing: 2rem;

  em {
    color: var(--active);
  }

  @media only screen and (max-width: 1024px) {
    letter-spacing: -0.5rem;
  }

  @media only screen and (max-width: 640px) {
    top: 18%;
    letter-spacing: -0.2rem;
  }
`

export default function Title({ title }) {
  return (
    <StyledTitle>
      {title[0]} <em>{title[1]}</em>
    </StyledTitle>
  )
}
