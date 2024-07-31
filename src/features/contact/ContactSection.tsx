import { type ReactNode } from 'react'
import styled from 'styled-components'
import ContactInfo from './ContactInfo.tsx'
import LazyImage from '../../components/LazyImage.tsx'

const StyledSection = styled.section`
  position: relative;
  height: 100vh;

  @media only screen and (max-width: 1024px) {
    height: auto;
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

const StyledBox = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 90%;

  @media only screen and (max-width: 1024px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    flex-direction: column;
    align-items: center;
    gap: 10vh;
    margin: 0 auto 5vh;
  }
`

const StyledImage = styled(LazyImage)`
  height: auto;
  width: max(300px, 20vw);

  @media only screen and (max-width: 1024px) {
    width: min(350px, 70vw);
  }
`

interface ContactSectionProps {
  children: ReactNode
}

function ContactSection({ children }: ContactSectionProps) {
  return (
    <StyledSection>
      <StyledTitleBox>{children}</StyledTitleBox>
      <StyledBox>
        <ContactInfo />
        <StyledImage src="avatar.png" alt="avatar" className="avatar" />
      </StyledBox>
    </StyledSection>
  )
}

export default ContactSection
