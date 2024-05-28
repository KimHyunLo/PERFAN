import styled from 'styled-components'

const StyledTitle = styled.div`
  text-align: center;
  font-family: 'Bodoni Moda', sans-serif;
  font-size: 280px;
  line-height: 1;
  margin-top: 150px;
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
