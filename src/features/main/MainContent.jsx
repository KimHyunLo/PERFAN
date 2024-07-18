import styled from 'styled-components'
import { LazyImage } from '../../components/Components'

const StyledMainContent = styled.div`
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translate(-50%, -50%);
  width: max(80%, 1000px);

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
    max-width: 350px;
    min-width: 300px;
    width: 20vw;
    height: auto;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const StyledParagraph = styled.p`
  max-width: 280px;
  min-width: 200px;
  font-size: 1.4rem;
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
    margin: 0 auto 35px;
  }
`

function MainContent() {
  return (
    <StyledMainContent>
      <MobileMain>
        <div className="middle-text">
          <p>
            안녕하세요! 제 포트폴리오에 오신 것을 환영합니다.
            <br />
            저는 단아하지만 우아하고, 무색이지만 특색있으며, 소심하지만 소신있는 사람입니다. 제
            매력이 당신에게 전달되었으면 좋겠습니다.
          </p>
          <p>
            제 인생 테마는 &quot;중립적으로 살아가기&quot;입니다.
            <br />
            남들의 의견에 휘둘리지 않고, 오로지 나만의 시각으로 판단을 내리는 것이 제가 중립을
            지키는 방법입니다. 편견 없이 바라보는 모습이 가장 나다운 모습이라고 할 수 있겠습니다.
          </p>
        </div>
        <LazyImage src="avatar.png" alt="avatar" className="avatar" loading="eager" />
      </MobileMain>
      <PcMain>
        <StyledParagraph>
          안녕하세요! 제 포트폴리오에 오신 것을 환영합니다.
          <br />
          저는 단아하지만 우아하고, 무색이지만 특색있으며, 소심하지만 소신있는 사람입니다. 제 매력이
          당신에게 전달되었으면 좋겠습니다.
        </StyledParagraph>
        <LazyImage src="avatar.png" alt="avatar" className="avatar" loading="eager" />
        <StyledParagraph>
          제 인생 테마는 &quot;중립적으로 살아가기&quot;입니다.
          <br />
          남들의 의견에 휘둘리지 않고, 오로지 나만의 시각으로 판단을 내리는 것이 제가 중립을 지키는
          방법입니다. 편견 없이 바라보는 모습이 가장 나다운 모습이라고 할 수 있겠습니다.
        </StyledParagraph>
      </PcMain>
    </StyledMainContent>
  )
}

export default MainContent
