import styled from 'styled-components'
import LazyImage from '../../components/LazyImage.tsx'

const StyledMainContent = styled.div`
  width: max(80%, 950px);
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
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
      background-image: url(/icons/star.svg);
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
        text-align: center;
        word-break: keep-all;
      }
    }

    .avatar {
      max-width: 400px;
      width: 80vw;
      margin-bottom: 3rem;
      height: auto;
    }
  }

  @media only screen and (max-width: 640px) {
    &::before {
      height: 25px;
      margin: 0 auto 3rem;
    }

    .middle-text {
      margin-bottom: 70px;
    }
  }
`

const PcMain = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max(1000px, 80%);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .avatar {
    width: max(300px, 20vw);
    height: auto;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const StyledParagraph = styled.p`
  max-width: max(250px, 18vw);
  text-align: center;
  word-break: keep-all;

  &::before {
    content: '';
    display: block;
    background-image: url(/icons/star.svg);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 35px;
    margin: 0 auto 20px;
  }
`

function MainContent() {
  return (
    <StyledMainContent>
      <MobileMain>
        <div className="middle-text">
          <p>
            제 포트폴리오에 오신 것을 환영합니다.
            <br />
            저는 무색이지만 특색있고, 소심하지만 소신있는 사람입니다. 제 매력이 당신에게
            전달되었으면 좋겠습니다.
          </p>
          <p>
            완벽한 계획을 세우는 것을 좋아합니다.
            <br />
            계획을 세우면서 완벽에 가까워져도 완전히 완벽해질 수는 없기 때문에 불완벽한 저와
            어울린다고 생각합니다.
          </p>
        </div>
        <LazyImage src="avatar.png" alt="avatar" className="avatar" />
      </MobileMain>
      <PcMain>
        <StyledParagraph>
          제 포트폴리오에 오신 것을 환영합니다.
          <br />
          저는 무색이지만 특색있고, 소심하지만 소신있는 사람입니다. 제 매력이 당신에게 전달되었으면
          좋겠습니다.
        </StyledParagraph>
        <LazyImage src="avatar.png" alt="avatar" className="avatar" />
        <StyledParagraph>
          완벽한 계획을 세우는 것을 좋아합니다.
          <br />
          계획을 세우면서 완벽에 가까워져도 완전히 완벽해질 수는 없다는 점이 불완벽한 저와
          어울린다고 생각합니다.
        </StyledParagraph>
      </PcMain>
    </StyledMainContent>
  )
}

export default MainContent
