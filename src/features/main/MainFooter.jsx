import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding: 0 30px;

  .middle-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
  }

  @media only screen and (max-width: 1024px) {
    position: relative;
  }

  @media only screen and (max-width: 640px) {
    padding: 0 15px;

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
    }
  }
`

function MainFooter() {
  return (
    <StyledFooter>
      <StyledUl>
        <li>
          <a href="mailto:leeas016@gmail.com">
            <img src="email.svg" alt="email" />
          </a>
        </li>
        <li>
          <a href="https://github.com/KimHyunLo" target="blank">
            <img src="github.svg" alt="github" />
          </a>
        </li>
      </StyledUl>
      <p className="middle-text">Coding for a living. Ordinary Front-end developer.</p>
    </StyledFooter>
  )
}

export default MainFooter
