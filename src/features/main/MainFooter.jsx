import styled from 'styled-components'
import { LazyImage } from '../../components/Components'

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 10px;
  width: calc(100vw - 6rem);
  padding: 0 3rem;

  .middle-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: max(14px, 0.8vw);
  }

  @media only screen and (max-width: 1024px) {
    position: relative;
  }

  @media only screen and (max-width: 640px) {
    width: calc(100vw - 3rem);
    padding: 0 1.5rem;

    .middle-text {
      display: none;
    }
  }
`

const StyledUl = styled.ul`
  display: flex;
  gap: 8px;

  li {
    position: relative;
    width: 24px;
    height: 24px;

    a {
      position: absolute;
      height: 100%;

      img {
        height: auto;
        width: auto;
      }
    }
  }
`

function MainFooter() {
  return (
    <StyledFooter>
      <StyledUl>
        <li>
          <a href="https://github.com/KimHyunLo" target="blank">
            <LazyImage src="icons/github.svg" alt="github" loading="eager" />
          </a>
        </li>
        <li>
          <a href="mailto:leeas016@gmail.com">
            <LazyImage src="icons/email.svg" alt="email" loading="eager" />
          </a>
        </li>
        <li>
          <a
            href="https://perfect-plan.notion.site/c60c5c6ffd8843c6804e2de03ab68149?pvs=74"
            target="blank"
          >
            <LazyImage src="icons/blog.svg" alt="blog" loading="eager" />
          </a>
        </li>
      </StyledUl>
      <p className="middle-text">Coding for a living. Ordinary Front-end developer.</p>
    </StyledFooter>
  )
}

export default MainFooter
