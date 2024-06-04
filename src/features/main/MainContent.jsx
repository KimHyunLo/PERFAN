import styled from 'styled-components'

const StyledMainContent = styled.div`
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translate(-50%, -50%);
  width: 80%;

  @media only screen and (max-width: 1024px) {
    position: relative;
    left: auto;
    top: auto;
    transform: none;
    width: 100%;
  }
`

const MobileMain = styled.div`
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block;
    text-align: center;

    &::before {
      content: '';
      display: block;
      background-image: url(star.svg);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      height: 35px;
      margin: 0 auto 50px;
    }

    .middle-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-bottom: 100px;

      p {
        max-width: 400px;
        width: 80vw;
        font-size: 14px;
        text-align: center;
        word-break: keep-all;
      }
    }

    .avatar {
      max-width: 400px;
      width: 80vw;
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 640px) {
    &::before {
      height: 25px;
      margin: 0 auto 30px;
    }

    .middle-text {
      margin-bottom: 70px;
    }
  }
`

const PcMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  .avatar {
    max-width: 350px;
    min-width: 300px;
    width: 20vw;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
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

function MainContent() {
  return (
    <StyledMainContent>
      <MobileMain>
        <div className="middle-text">
          <p>Perfect Plan은 기획, 설계부터 레이아웃, 디자인, 구성요소 설정까지 디테일한 계획을 따라 만들어진 포트폴리오입니다.</p>
          <p>웹 디자인/설계 등의 요소에 흥미가 많으며 프로젝트를 할 때 개발 뿐만 아니라 다른 분야에도 관심을 가지는 편입니다.</p>
        </div>
        <img src="avatar.svg" alt="avatar" className="avatar" />
      </MobileMain>
      <PcMain>
        <StyledParagraph>Perfect Plan은 기획, 설계부터 레이아웃, 디자인, 구성요소 설정까지 디테일한 계획을 따라 만들어진 포트폴리오입니다.</StyledParagraph>
        <img src="avatar.svg" alt="avatar" className="avatar" />
        <StyledParagraph>웹 디자인/설계 등의 요소에 흥미가 많으며 프로젝트를 할 때 개발 뿐만 아니라 다른 분야에도 관심을 가지는 편입니다.</StyledParagraph>
      </PcMain>
    </StyledMainContent>
  )
}

export default MainContent