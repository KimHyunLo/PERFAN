import styled from 'styled-components'
import ContactInfo from '../features/contact/ContactInfo'
import ContactImage from '../features/contact/ContactImage'

const StyledContact = styled.div`
  position: absolute;
  bottom: 5%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  padding: 0 3rem;

  @media only screen and (max-width: 1024px) {
    bottom: auto;
    flex-direction: column;
    align-items: center;
    gap: 7rem;
  }

  @media only screen and (max-width: 640px) {
    padding: 0 1.5rem;
  }
`

function Contact() {
  return (
    <StyledContact>
      <ContactInfo />
      <ContactImage />
    </StyledContact>
  )
}

export default Contact
