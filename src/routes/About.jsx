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

const StyledButtonBox = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  mix-blend-mode: difference;
  z-index: 1;
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

  .header1 {
    font-size: 7vw;
  }

  .header2 {
    font-size: 3.5vw;
  }

  @media only screen and (max-width: 1280px) {
    margin-bottom: 5rem;

    &.no-margin {
      margin: 0;
    }

    .header1 {
      font-size: max(9vw, 32px);
    }

    .header2 {
      font-size: max(4.5vw, 22px);
    }
  }
`

function About() {
  return (
    <StyledAbout>
      <StyledButtonBox>
        <ScrollButton />
      </StyledButtonBox>
      <StyledContentBox>
        <AboutIntroduction>
          <StyledHeader className="no-margin">
            <div className="header1">Not Letting Go,</div>
            <div className="header2">Delicate Developer</div>
          </StyledHeader>
        </AboutIntroduction>
        <AboutExperience>
          <StyledHeader>
            <div className="header1">Busy But Happy,</div>
            <div className="header2">Work-Life</div>
          </StyledHeader>
        </AboutExperience>
        <AboutSkills>
          <StyledHeader>
            <div className="header1">Certified Quality,</div>
            <div className="header2">Being Skilled</div>
          </StyledHeader>
        </AboutSkills>
      </StyledContentBox>
    </StyledAbout>
  )
}

export default About
