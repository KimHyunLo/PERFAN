import styled from 'styled-components'

const Introduction = styled.div`
  position: relative;
  width: 85%;
  margin: 100px auto 50px;
`

const IntroHeader = styled.div`
  font-family: 'Bodoni Moda', sans-serif;
  line-height: 1;
  margin-bottom: 100px;

  .header1 {
    font-size: 8vw;
  }

  .header2 {
    font-size: 3.5vw;
  }

  @media only screen and (max-width: 1280px) {
    margin-bottom: 0;

    .header1 {
      font-size: 10vw;
    }

    .header2 {
      font-size: 4.5vw;
    }
  }
`

const IntroTitle = styled.div`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 5rem;

  @media only screen and (max-width: 1280px) {
    font-size: 3.5vw;
  }

  @media only screen and (max-width: 768px) {
    font-size: 4.5vw;
  }
`

const IntroContent = styled.p`
  max-width: 70vw;
  width: 650px;
  font-size: 1.8rem;

  @media only screen and (max-width: 1280px) {
    font-size: 2vw;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    font-size: 3vw;
  }
`

const IntroImage = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 50px;
  margin-top: -350px;

  .signature {
    width: 25vw;
    padding-bottom: 70px;
  }

  .portrait {
    width: 27vw;
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

function AboutIntroduction() {
  return (
    <Introduction>
      <div>
        <IntroHeader>
          <div className="header1">Not Letting Go,</div>
          <div className="header2">Delicate Developer</div>
        </IntroHeader>

        <IntroMobileImage>
          <img src="signature.svg" alt="signature" className="signature" loading="lazy" />
          <img src="portrait.png" alt="portrait" className="portrait" loading="lazy" />
        </IntroMobileImage>

        <IntroTitle>
          사소한 디테일도
          <br />
          놓치지 않는 섬세한 개발자
        </IntroTitle>

        <IntroContent>
          목표지향적이고 섬세한 성격으로 준비성이 다분하며 시간 관리를 철저히 하고 단계별 계획한 절차대로 코딩을 한다. 효율적인 코딩을 선호 하는 편이며 프로젝트의 보완할 부분을 생각하고 웹사이트의
          발전성을 주기적으로 고민한다. 자신의 부족함을 인지하고 공부를 게을리 하지 않으며 꾸준한 자기주도적학습을 가진다. 작은 디테일도 대충하지 않으며 맡은 일에 최선을 다하기 위해 노력한다.
        </IntroContent>
      </div>
      <IntroImage>
        <img src="signature.svg" alt="signature" className="signature" loading="lazy" />
        <img src="portrait.png" alt="portrait" className="portrait" loading="lazy" />
      </IntroImage>
    </Introduction>
  )
}

export default AboutIntroduction
