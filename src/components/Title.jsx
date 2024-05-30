import styled from 'styled-components'

const StyledTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  font-family: 'Bodoni Moda', sans-serif;
  font-size: 15vw;

  em {
    color: var(--active);
  }

  @media only screen and (max-width: 640px) {
    top: 15%;
  }
`

export default function Title({ title }) {
  return (
    <StyledTitle>
      {title[0]} <em>{title[1]}</em>
    </StyledTitle>
  )
}
