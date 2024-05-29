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
`

const StyledEm = styled.em`
  font-style: normal;
  color: var(--active);
`

export default function Title() {
  return (
    <StyledTitle>
      Perfect <StyledEm>Plan</StyledEm>
    </StyledTitle>
  )
}
