import { type ReactNode } from 'react'
import styled from 'styled-components'
import ContactImage from './ContactImage.tsx'
import ContactInfo from './ContactInfo.tsx'

const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 90%;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 7rem;
  }
`

interface ContactSectionProps {
  children: ReactNode
}

function ContactSection({ children }: ContactSectionProps) {
  return (
    <div>
      {children}
      <StyledBox>
        <ContactInfo />
        <ContactImage />
      </StyledBox>
    </div>
  )
}

export default ContactSection
