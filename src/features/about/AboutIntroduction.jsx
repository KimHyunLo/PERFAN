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

        <IntroTitle>
          사소한 디테일도 놓치지 않는 <br />
          섬세한 개발자
        </IntroTitle>

        <IntroContent>
          목표지향적이고 섬세한 성격으로 <em>준비성</em>이 다분하며 시간 관리를 철저히 하고 단계별
          계획한 절차대로 코딩을 한다. <em>효율적인</em> 코딩을 선호 하는 편이며 프로젝트의 보완할
          부분을 생각하고 웹사이트의 발전성을 주기적으로 고민한다. 자신의 부족함을 인지하고 공부를
          게을리 하지 않으며 꾸준한 <em>자기주도적 학습</em>을 가진다. 작은 디테일도 대충하지 않으며
          맡은 일에 최선을 다하기 위해 노력한다.
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
