import styled from 'styled-components'
import ContactInfo from './ContactInfo.tsx'
import LazyImage from '../../components/LazyImage.tsx'

const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  @media only screen and (max-width: 1024px) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    flex-direction: column;
    align-items: center;
    gap: 10vh;
    margin: 0 auto 10vh;
  }
`

const StyledImage = styled(LazyImage)`
  height: auto;
  width: max(300px, 20vw);

  @media only screen and (max-width: 1024px) {
    width: min(350px, 70vw);
  }
`

export default function ContactSection() {
  return (
    <StyledBox>
      <ContactInfo />
      <StyledImage src="avatar.png" alt="avatar" className="avatar" />
    </StyledBox>
  )
}
