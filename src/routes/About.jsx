import styled from 'styled-components'
import ScrollButton from '../components/ScrollButton'
import AboutIntroduce from '../features/about/AboutIntroduce'
import AboutCareer from '../features/about/AboutCareer'

const StyledAbout = styled.div`
  position: relative;
  width: 80%;
  margin: 10rem auto;

  @media only screen and (max-width: 1024px) {
    width: 85%;
    margin: 3rem auto 5rem;
  }
`

const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: min(15rem, 15vw);
`

const StyledHeader = styled.h2`
  font-family: 'Bodoni Moda', sans-serif;
  margin-bottom: 5rem;

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
        <AboutIntroduce>
          <StyledHeader className="no-margin">Introduce</StyledHeader>
        </AboutIntroduce>
        <AboutCareer>
          <StyledHeader>Career</StyledHeader>
        </AboutCareer>
      </StyledContentBox>
    </StyledAbout>
  )
}

export default About
