import styled from 'styled-components'
import { LazyImage } from '../../components/Components'

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
  max-width: 255px;
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
            의외로 감성적이라 놀라셨나요?
            <br />
            단아하지만 우아하고, 무색이지만 특색있는, 소심하지만 소신있는 그것이 저입니다. 저의
            매력이 당신에게 닿았으면 좋겠네요.
          </p>
          <p>
            제 인생 테마는 &quot;중립적으로 살자&quot;입니다.
            <br />
            남들에게 휘둘리지 않고, 나의 시선으로 판단을 내리는 것이 제가 중립을 택하는 방법입니다.
            편견없는 모습이 가장 나답다고 할 수 있겠네요.
          </p>
        </div>
        <LazyImage src="avatar.png" alt="avatar" className="avatar" loading="eager" />
      </MobileMain>
      <PcMain>
        <StyledParagraph>
          의외로 감성적이라 놀라셨나요?
          <br />
          단아하지만 우아하고, 무색이지만 특색있는, 소심하지만 소신있는 그것이 저입니다. 저의 매력이
          당신에게 닿았으면 좋겠네요.
        </StyledParagraph>
        <LazyImage src="avatar.png" alt="avatar" className="avatar" loading="eager" />
        <StyledParagraph>
          제 인생 테마는 &quot;중립적으로 살자&quot;입니다.
          <br />
          남들에게 휘둘리지 않고, 나의 시선으로 판단을 내리는 것이 제가 중립을 택하는 방법입니다.
          편견없는 모습이 가장 나답다고 할 수 있겠네요.
        </StyledParagraph>
      </PcMain>
    </StyledMainContent>
  )
}

export default MainContent
