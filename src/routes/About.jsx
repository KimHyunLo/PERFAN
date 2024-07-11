import styled from 'styled-components'
import { AboutIntroduction, AboutSkills } from '../features/Features'
import { ScrollButton } from '../components/Components'

const StyledAbout = styled.div`
  position: relative;
  background-color: var(--black);
  color: var(--white);
  padding: 25vw 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 20vw;
    width: 100%;
  }

  &::before {
    top: 0;
    background-image: url(paperBackground1.jpeg);
  }

  &::after {
    bottom: 0;
    background-image: url(paperBackground2.jpeg);
  }
`

const StyledButtonBox = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  mix-blend-mode: difference;
  z-index: 1;
`

function About() {
  return (
    <StyledAbout>
      <StyledButtonBox>
        <ScrollButton />
      </StyledButtonBox>
      <AboutIntroduction />
      <AboutSkills />
    </StyledAbout>
  )
}

export default About
