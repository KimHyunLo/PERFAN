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
    font-size: 9vw;
  }

  .header2 {
    font-size: 3vw;
  }
`

const IntroTitle = styled.div`
  font-size: 2.5vw;
  margin-bottom: 50px;
`

const IntroContent = styled.p`
  font-size: 18px;
  line-height: 1.5;
`

const IntroImage = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 100px;
  margin-top: -250px;

  .signature {
    width: 25vw;
    padding-bottom: 150px;
  }

  .portrait {
    width: 27vw;
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
        <IntroTitle>
          사소한 디테일도
          <br />
          놓치지 않는 섬세한 개발자
        </IntroTitle>
        <IntroContent>
          목표지향적이고 섬세한 성격으로 준비성이 다분하며
          <br />
          시간 관리를 철저히 하고 단계별 계획한 절차대로 코딩을 한다.
          <br /> 효율적인 코딩을 선호 하는 편이며 프로젝트의 보완할 부분을 생각하고
          <br /> 웹사이트의 발전성을 주기적으로 고민한다. <br />
          자신의 부족함을 인지하고 공부를 게을리 하지 않으며 꾸준한 자기주도적학습을
          <br /> 가진다. 작은 디테일도 대충하지 않으며 맡은 일에 최선을 다하기 위해 노력한다.
        </IntroContent>
      </div>
      <IntroImage>
        <img src="signature.svg" alt="signature" className="signature" />
        <img src="portrait.png" alt="portrait" className="portrait" />
      </IntroImage>
    </Introduction>
  )
}

export default AboutIntroduction
