import styled from 'styled-components'

const StyledContactImage = styled.img`
  width: 25vw;
  max-width: 40vh;

  @media only screen and (max-width: 1024px) {
    width: 40vw;
    max-width: none;
    min-width: 30rem;
    margin-bottom: 5rem;
  }
`

function ContactImage() {
  return <StyledContactImage src="avatar.svg" alt="avatar" className="avatar" />
}

export default ContactImage
