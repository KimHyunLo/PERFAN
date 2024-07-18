import styled from 'styled-components'
import { ContactInfo, ContactImage } from '../features/Features'

const StyledContact = styled.div`
  position: absolute;
  bottom: 5%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: calc(100vw - 6rem);
  padding: 0 3rem;

  @media only screen and (max-width: 1024px) {
    bottom: auto;
    flex-direction: column;
    align-items: center;
    gap: 7rem;
  }

  @media only screen and (max-width: 640px) {
    width: 100vw;
    padding: 0;
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
