import styled from 'styled-components'
import { AboutIntroduction, AboutSkills } from '../features/Features'

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

function About() {
  return (
    <StyledAbout>
      <AboutIntroduction />
      <AboutSkills />
    </StyledAbout>
  )
}

export default About
