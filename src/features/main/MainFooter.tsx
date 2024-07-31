import styled from 'styled-components'
import LazyImage from '../../components/LazyImage'

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 1%;
  left: 0;
  width: 100%;
`

const StyledParagraph = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: max(12px, 0.7vw);
`

const StyledList = styled.ul`
  display: flex;
  gap: 8px;
`

const StyledImage = styled(LazyImage)`
  width: max(25px, 1.3vw);
  height: max(25px, 1.3vw);
`

function MainFooter() {
  return (
    <StyledFooter>
      <StyledList>
        <li>
          <a href="https://github.com/KimHyunLo" target="blank">
            <StyledImage src="icons/github.svg" alt="github" loading="eager" />
          </a>
        </li>
        <li>
          <a href="mailto:leeas016@gmail.com">
            <StyledImage src="icons/email.svg" alt="email" loading="eager" />
          </a>
        </li>
        <li>
          <a
            href="https://perfect-plan.notion.site/c60c5c6ffd8843c6804e2de03ab68149?pvs=74"
            target="blank"
          >
            <StyledImage src="icons/blog.svg" alt="blog" loading="eager" />
          </a>
        </li>
      </StyledList>
      <StyledParagraph>Coding for a living. Ordinary Front-end developer.</StyledParagraph>
    </StyledFooter>
  )
}

export default MainFooter
