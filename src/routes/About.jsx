import styled from 'styled-components'
import { AboutExperience, AboutIntroduction, AboutSkills } from '../features/Features'
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

  @media only screen and (max-width: 1280px) {
    gap: 20vw;
  }
`

const StyledHeader = styled.div`
  font-family: 'Bodoni Moda', sans-serif;
  line-height: 1.2;
  margin-bottom: 10rem;

  h3 {
    margin-top: max(10px, 1.5vw);
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 1280px) {
    margin-bottom: 5rem;

    &.no-margin {
      margin: 0;
    }
  }
`

function About() {
  return (
    <StyledAbout>
      <ScrollButton />
      <StyledContentBox>
        <AboutIntroduction>
          <StyledHeader className="no-margin">
            <h2>One of a Kind,</h2>
            <h3>Henry. K</h3>
          </StyledHeader>
        </AboutIntroduction>
        <AboutExperience>
          <StyledHeader>
            <h2>Busy But Happy,</h2>
            <h3>Work-Life</h3>
          </StyledHeader>
        </AboutExperience>
        <AboutSkills>
          <StyledHeader>
            <h2>Certified Quality,</h2>
            <h3>Being Skilled</h3>
          </StyledHeader>
        </AboutSkills>
      </StyledContentBox>
    </StyledAbout>
  )
}

export default About
