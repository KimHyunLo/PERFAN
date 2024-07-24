import styled from 'styled-components'
import ContactImage from './ContactImage'
import ContactInfo from './ContactInfo'

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

function ContactSection({ children }) {
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
