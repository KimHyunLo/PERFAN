import styled from 'styled-components'
import { LazyImage } from '../../components/Components'

const StyledMainContent = styled.div`
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translate(-50%, -50%);
  width: max(80%, 950px);

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
  display: flex;
  justify-content: space-between;
  align-items: start;

  .avatar {
    min-width: 300px;
    width: max(350px, 20vw);
    height: auto;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const StyledParagraph = styled.p`
  max-width: max(280px, 18vw);
  min-width: 200px;
  text-align: center;
  word-break: keep-all;

  &::before {
    content: '';
    display: block;
    background-image: url(/icons/star.svg);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: max(35px, 2.5vw);
    margin: 0 auto 3.5rem;
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
            저는 완벽한 계획을 세우는 것을 좋아합니다.
            <br />
            계획을 세우면서 완벽에 가까워져도 완전히 완벽해질 수는 없기 때문에 불완벽한 저와
            어울린다고 생각합니다.
          </p>
        </div>
        <LazyImage src="avatar.png" alt="avatar" className="avatar" loading="eager" />
      </MobileMain>
      <PcMain>
        <StyledParagraph>
          제 포트폴리오에 오신 것을 환영합니다.
          <br />
          저는 무색이지만 특색있고, 소심하지만 소신있는 사람입니다. 제 매력이 당신에게 전달되었으면
          좋겠습니다.
        </StyledParagraph>
        <LazyImage src="avatar.png" alt="avatar" className="avatar" loading="eager" />
        <StyledParagraph>
          저는 완벽한 계획을 세우는 것을 좋아합니다.
          <br />
          계획을 세우면서 완벽에 가까워져도 완전히 완벽해질 수는 없기 때문에 불완벽한 저와
          어울린다고 생각합니다.
        </StyledParagraph>
      </PcMain>
    </StyledMainContent>
  )
}

export default MainContent
