import styled from 'styled-components'

const StyledContactImage = styled.img`
  width: 25vw;
  max-width: 40vh;
`

function ContactImage() {
  return <StyledContactImage src="avatar.svg" alt="avatar" className="avatar" />
}

export default ContactImage
