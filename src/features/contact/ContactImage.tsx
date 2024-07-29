import styled from 'styled-components'
import LazyImage from '../../components/LazyImage.tsx'

const StyledImage = styled(LazyImage)`
  height: auto;
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
  return <StyledImage src="avatar.png" alt="avatar" className="avatar" />
}

export default ContactImage
