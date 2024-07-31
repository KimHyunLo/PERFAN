import { type ReactNode } from 'react'
import styled from 'styled-components'
import ContactInfo from './ContactInfo.tsx'
import LazyImage from '../../components/LazyImage.tsx'

const StyledSection = styled.section`
  position: relative;
  height: 100vh;
`

const StyledTitleBox = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
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
    flex-direction: column;
    align-items: center;
    gap: 7rem;
  }
`

const StyledImage = styled(LazyImage)`
  height: auto;
  width: max(300px, 20vw);

  @media only screen and (max-width: 1024px) {
    width: max(300px, 30vw);
    margin-bottom: 5rem;
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
