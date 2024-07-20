import styled from 'styled-components'
import { AboutExperience, AboutIntroduction } from '../features/Features'
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

  @media only screen and (max-width: 640px) {
    padding: 30vw 0;
  }
`

const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  gap: 20rem;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    gap: 20vw;
  }
`

const StyledHeader = styled.h2`
  font-family: 'Bodoni Moda', sans-serif;
  line-height: 1.2;
  margin-bottom: 10rem;

  &::after {
    content: '.';
  }

  @media only screen and (max-width: 1024px) {
    margin-bottom: 0;

    &:not(.no-margin) {
      margin-bottom: 3rem;
    }
  }
`

function About() {
  return (
    <StyledAbout>
      <ScrollButton />
      <StyledContentBox>
        <AboutIntroduction>
          <StyledHeader className="no-margin">Introduce</StyledHeader>
        </AboutIntroduction>
        <AboutExperience>
          <StyledHeader>Career</StyledHeader>
        </AboutExperience>
      </StyledContentBox>
    </StyledAbout>
  )
}

export default About
