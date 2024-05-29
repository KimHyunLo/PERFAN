import styled from 'styled-components'

const StyledMain = styled.div`
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  .avatar {
    max-width: 350px;
    width: 20vw;
  }
`

const StyledParagraph = styled.p`
  max-width: 255px;
  min-width: 200px;
  width: 20vw;
  font-size: 14px;
  text-align: center;
  word-break: keep-all;

  &::before {
    content: '';
    display: block;
    background-image: url(star.svg);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 35px;
    margin: 0 auto 35px;
  }
`

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 30px;

  .middle-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
  }
`

const StyledUl = styled.ul`
  display: flex;
  gap: 10px;

  li {
    position: relative;
    width: 24px;
    height: 24px;

    a {
      position: absolute;
    }
  }
`

function Main() {
  return (
    <>
      <StyledMain>
        <StyledParagraph>Perfect Plan은 기획, 설계부터 레이아웃, 디자인, 구성요소 설정까지 디테일한 계획을 따라 만들어진 포트폴리오입니다.</StyledParagraph>
        <img src="avatar.svg" alt="avatar" className="avatar" />
        <StyledParagraph>웹 디자인/설계 등의 요소에 흥미가 많으며 프로젝트를 할 때 개발 뿐만 아니라 다른 분야에도 관심을 가지는 편입니다.</StyledParagraph>
      </StyledMain>
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
    </>
  )
}

export default Main
