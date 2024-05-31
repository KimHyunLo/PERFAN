import styled from 'styled-components'

const PersonalStatement = styled.div`
  width: 85%;
  margin: 200px auto 150px;
`

const StatementTitle = styled.div`
  font-size: 8vw;
  font-family: 'Bodoni Moda', sans-serif;
  line-height: 1;
  margin-bottom: 200px;

  .bottom-title {
    text-align: right;
  }
`

const StatementContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: ${(props) => (props.$align === 'right' ? 'right' : 'left')};

  &.top-statement {
    margin-bottom: 200px;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background-image: url(kid.svg);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 25vw;
      height: 25vw;
    }

    p {
      width: 40vw;
    }
  }

  &.bottom-statement {
    align-items: end;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-image: url(cat.svg);
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 25vw;
      height: 25vw;
    }

    p {
      width: 45vw;
    }
  }
`
function AboutPersonalStatement() {
  return (
    <PersonalStatement>
      <StatementTitle>
        <div>Fall In Love</div>
        <div className="bottom-title">With Coding</div>
      </StatementTitle>
      <StatementContent $align="left" className="top-statement">
        <p>
          나는 어릴 때부터 물건들을 정렬하고 깔끔하게 정리하는 것을 좋아했다. 아무리 어질러져 있고 더럽혀졌어도 정리하고 나면 깔끔해 질 것을 알기 때문에 청소를 하는 것도 마냥 싫진 않았다. 그러다
          동아리를 통해 코딩을 처음 접하게 되었다. 신기하게도 코딩을 처음 하면서 나에게 들었던 첫 이미지는 책장이었다.
        </p>
        <p>
          깔끔하게 작성된 코딩은 정리된 책장과 비슷하다. 질서 정연하게 배치된 책들을 보고 편안함을 느끼듯이 깔끔한 코딩도 개발자의 눈을 편안하게 만든다. 논리적인 알고리즘을 구축하고 배차된 순서도를
          통해 기능을 구현하는 매력에 나는 코딩에 빠지기 시작했다.
        </p>
      </StatementContent>
      <StatementContent $align="right" className="bottom-statement">
        <p>
          코딩을 배우면서 가장 마음에 들었던 것은 실시간 결과 화면이었다. 자신이 쓴 코딩의 결과를 바로바로 확인하고 수정할 수 있다는 점은 다른 작업과 확고한 차이를 보인다. 어떤 작업은 작업 중에
          기획안을 변경하거나 이미 만들어진 결과물을 수정하기 애매한 상황에 부닥치곤 하지만 코딩은 다르다. 결과 화면이 예상한 설계와 다르거나 마음에 들지 않았을 때 실시간으로 수정하면서 최상의
          결과물을 내기 적합한 환경을 가진 셈이다.
        </p>
        <p>
          코딩의 이런 특징을 가장 잘 살린 분야는 웹프로그래밍이라고 생각한다. 클라이언트로부터 즉각적인 피드백을 들을 수 있고, 프로젝트를 마친 후에도 정기적인 보수작업을 하면서 웹사이트의 사용성을
          높이는 것이 웹프로그래밍의 특징이다.
        </p>
      </StatementContent>
    </PersonalStatement>
  )
}

export default AboutPersonalStatement
