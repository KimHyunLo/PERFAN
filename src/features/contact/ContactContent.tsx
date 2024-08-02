import styled from 'styled-components'
import ContactInfo from './ContactInfo.tsx'
import LazyImage from '../../components/LazyImage.tsx'

const StyledImage = styled(LazyImage)`
  height: auto;
  width: max(300px, 20vw);

  @media only screen and (max-width: 1024px) {
    width: min(350px, 70vw);
  }
`

export default function ContactContent() {
  return (
    <>
      <ContactInfo />
      <StyledImage src="avatar.png" alt="avatar" className="avatar" />
    </>
  )
}
