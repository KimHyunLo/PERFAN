import styled from 'styled-components'
import { LazyImage } from '../../components/Components'

const IntroTitle = styled.div`
  font-size: 2.5vw;
  line-height: 1.2;
  margin-bottom: 5rem;

  @media only screen and (max-width: 1280px) {
    font-size: max(3.5vw, 18px);
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 7vw;
  }
`

const IntroContent = styled.p`
  max-width: 70vw;
  width: 650px;
  font-size: 1.8rem;

  em {
    color: var(--active-difference);
  }

  @media only screen and (max-width: 1280px) {
    font-size: max(1.8vw, 14px);
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    max-width: none;
  }
`

const IntroImage = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 50px;
  margin-top: -250px;

  .signature {
    height: auto;
    width: 20vw;
  }

  .portrait {
    height: auto;
    width: 20vw;
  }

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`

const IntroMobileImage = styled.div`
  display: none;

  @media only screen and (max-width: 1280px) {
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

function AboutIntroduction({ children }) {
  return (
    <div>
      <div>
        {children}

        <IntroMobileImage>
          <LazyImage src="signature.png" alt="signature" className="signature" loading="eager" />
          <LazyImage src="portrait.png" alt="portrait" className="portrait" />
        </IntroMobileImage>

        <IntroTitle>앞으로가 기대 되는 남다른 개발자</IntroTitle>

        <IntroContent>
          개발에 대한 <em>열정</em>으로 몽골에서 한국까지 왔습니다. 고등학교 때부터 개발자란 직업을
          갖기 위해 꿈을 키우던 중, 몽골이 개발적 역량이 떨어지기 때문에 제 꿈을 이어 나가기엔
          어렵다고 결론을 내리게 되었습니다. 한국으로 유학 오기 위해서 혼자 방과후에 C언어 공부를
          하거나, CS 책을 독학하는 등의 <em>자기개발</em>을 꾸준히 했었습니다. 이런 저의 노력을 높이
          산 결과 한국으로 유학을 올 수 있었고, 그 시절을 추억하면서 지금까지도 퇴근 후 개인학습으로
          배운 내용을 실무에 적용하는 등 <em>팀 코드에 기여</em>하고 있습니다.
        </IntroContent>
      </div>
      <IntroImage>
        <LazyImage src="signature.png" alt="signature" className="signature" />
        <LazyImage src="portrait.png" alt="portrait" className="portrait" />
      </IntroImage>
    </div>
  )
}

export default AboutIntroduction
