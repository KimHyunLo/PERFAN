import { forwardRef, type ReactNode } from 'react'
import AboutIntroduce from './AboutIntroduce'
import AboutCareer from './AboutCareer'
import styled from 'styled-components'

const StyledSection = styled.section`
  padding-top: 20vh;
`

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: min(15rem, 15vw);
  width: 80%;
  margin: 0 auto;
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

interface AboutSectionProps {
  children: ReactNode
}

const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(function AboutSection(
  { children },
  ref,
) {
  return (
    <StyledSection ref={ref}>
      {children}
      <StyledBox>
        <AboutIntroduce>
          <StyledHeader className="no-margin">Introduce</StyledHeader>
        </AboutIntroduce>
        <AboutCareer>
          <StyledHeader>Career</StyledHeader>
        </AboutCareer>
      </StyledBox>
    </StyledSection>
  )
})

export default AboutSection
