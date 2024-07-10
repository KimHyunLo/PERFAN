import styled from 'styled-components'
import { AboutIntroduction, AboutPersonalStatement, AboutSkills } from '../features/Features'

const StyledAbout = styled.div`
  background-color: var(--black);
  color: var(--white);

  &::before,
  &::after {
    content: '';
    display: block;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 20vw;
  }

  &::before {
    background-image: url(paperBackground1.jpeg);
  }

  &::after {
    background-image: url(paperBackground2.jpeg);
  }
`

function About() {
  return (
    <StyledAbout>
      <AboutIntroduction />
      <AboutSkills />
      <AboutPersonalStatement />
    </StyledAbout>
  )
}

export default About
