import styled from 'styled-components'
import AboutIntroduction from '../features/about/AboutIntroduction'
import AboutPersonalStatement from '../features/about/AboutPersonalStatement'

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
    background-image: url(paper-background1.png);
  }

  &::after {
    background-image: url(paper-background2.png);
  }
`

function About() {
  return (
    <StyledAbout>
      <AboutIntroduction />
      <AboutPersonalStatement />
    </StyledAbout>
  )
}

export default About
