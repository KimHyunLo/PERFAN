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
  padding: 0 30px;

  @media only screen and (max-width: 640px) {
    padding: 0 15px;
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
