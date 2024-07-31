import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 3vh;
  left: 0;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    position: relative;
    bottom: auto;
    left: auto;
  }
`

const StyledParagraph = styled.p`
  text-align: center;
`

function MainFooter() {
  return (
    <StyledFooter>
      <StyledParagraph className="small-font">
        Coding for a living. Ordinary Front-end developer.
      </StyledParagraph>
    </StyledFooter>
  )
}

export default MainFooter
