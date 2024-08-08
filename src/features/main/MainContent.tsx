import styled from 'styled-components'
import LazyImage from '../../components/LazyImage.tsx'

const MobileMain = styled.div`
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block;
    text-align: center;
  }
`

const PcMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const StyledParagraphBox = styled.div`
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
    width: 35px;
    margin: 0 auto 20px;
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 auto 10vh;

    p {
      width: min(450px, 80vw);
      text-align: center;
      word-break: keep-all;
    }
  }
`

const StyledAvatarImage = styled(LazyImage)`
  height: auto;
  width: max(300px, 20vw);

  @media only screen and (max-width: 1024px) {
    width: min(350px, 70vw);
  }
`

const StyledParagraph = styled.p`
  margin-top: 3vh;
  text-align: center;
`

function MainContent() {
  return (
    <>
      <MobileMain>
        <StyledParagraphBox>
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
        </StyledParagraphBox>
        <StyledAvatarImage src="avatar.png" alt="avatar" loading="eager" fetchPriority="high" />
      </MobileMain>
      <PcMain>
        <StyledParagraphBox>
          <p>
            제 포트폴리오에 오신 것을 환영합니다.
            <br />
            저는 무색이지만 특색있고, 소심하지만 소신있는 사람입니다. 제 매력이 당신에게
            전달되었으면 좋겠습니다.
          </p>
        </StyledParagraphBox>
        <StyledAvatarImage src="avatar.png" alt="avatar" loading="eager" fetchPriority="high" />
        <StyledParagraphBox>
          <p>
            완벽한 계획을 세우는 것을 좋아합니다.
            <br />
            계획을 세우면서 완벽에 가까워져도 완전히 완벽해질 수는 없다는 점이 불완벽한 저와
            어울린다고 생각합니다.
          </p>
        </StyledParagraphBox>
      </PcMain>
      <StyledParagraph className="small-font">
        Coding for a living. Ordinary Front-end developer.
      </StyledParagraph>
    </>
  )
}

export default MainContent
