import styled from 'styled-components'
import LazyImage from '../../components/LazyImage.tsx'

const IntroTitle = styled.h2`
  margin-bottom: 2rem;
`

const StyledParagraphBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: max(550px, 45vw);

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`

const IntroImage = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 3vw;
  margin-top: -250px;

  .signature {
    height: auto;
    width: 20vw;
  }

  .portrait {
    height: auto;
    width: min(350px, 22vw);
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const IntroMobileImage = styled.div`
  display: none;

  @media only screen and (max-width: 1024px) {
    position: relative;
    display: block;
    height: 50vw;

    .signature,
    .portrait {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: auto;
    }

    .signature {
      width: 50vw;
      z-index: 1;
    }

    .portrait {
      width: 25vw;
    }
  }
`

function AboutContent() {
  return (
    <>
      <div>
        <IntroMobileImage>
          <LazyImage src="signature.png" alt="signature" className="signature" />
          <LazyImage src="portrait.png" alt="portrait" className="portrait" />
        </IntroMobileImage>
        <IntroTitle>개발자의 꿈을 찾아, 몽골에서 한국으로</IntroTitle>
        <StyledParagraphBox>
          <p>
            개발에 대한 <em>열정</em>으로 몽골에서 한국까지 오게 되었습니다. 고등학교 때부터
            개발자가 되겠다는 꿈을 키워왔지만, 몽골에서는 개발 역량이 충분하지 않다는 결론에
            이르렀습니다. 그래서 혼자 방과 후에 C언어를 공부하고, CS 관련 책을 독학하며{' '}
            <em>자기개발</em>에 힘썼습니다.
          </p>
          <p>
            이러한 노력의 결과로 한국으로 유학을 올 수 있었고, 개발자의 꿈에 한 걸음 더 다가설 수
            있었습니다. 부족한 개발 지식을 미리 공부한 덕분에 학교 프로젝트를 진행하면서 뒤처지지
            않을 수 있었고, 4년간 장학금을 유지하며 학업에 전념할 수 있었습니다.
          </p>
          <p>
            그 시절을 돌이켜보며, 지금까지도 퇴근 후 개인 학습으로 배운 내용을 실무에 적용하는 등의
            방법으로 <em>팀 코드 향상에 기여</em>하고 있습니다. 앞으로 더욱 실력을 쌓아 자랑스러운
            프론트엔드 팀의 리더가 되고 싶습니다.
          </p>
        </StyledParagraphBox>
      </div>
      <IntroImage>
        <LazyImage src="signature.png" alt="signature" className="signature" />
        <LazyImage src="portrait.png" alt="portrait" className="portrait" />
      </IntroImage>
    </>
  )
}

export default AboutContent
