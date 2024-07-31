import { type ReactNode } from 'react'
import MainContent from './MainContent.tsx'
import styled from 'styled-components'
import MainFooter from './MainFooter.tsx'

const StyledSection = styled.section`
  position: relative;
  height: 100vh;

  @media only screen and (max-width: 1024px) {
    height: auto;
    margin-top: min(20vh, 30vw);
  }
`

const StyledTitleBox = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  @media only screen and (max-width: 1024px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
  }
`

interface MainSectionProps {
  children: ReactNode
}

function MainSection({ children }: MainSectionProps) {
  return (
    <StyledSection>
      <StyledTitleBox>{children}</StyledTitleBox>
      <MainContent />
      <MainFooter />
    </StyledSection>
  )
}

export default MainSection
