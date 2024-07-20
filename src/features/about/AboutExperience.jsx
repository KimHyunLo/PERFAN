import { styled } from 'styled-components'
import { careerList } from '../../data/contants'
import CareerItem from '../../components/CareerItem'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7rem;

  @media only screen and (max-width: 1280px) {
    gap: 3.5rem;
  }
`

const StyledChargeList = styled.ul`
  display: grid;
  grid-template-columns: 12% 1fr;
  grid-template-rows: repeat(${(props) => props.$row}, min-content);
  row-gap: 1rem;

  :first-child {
    grid-row: 1 / -1;
  }

  &.tech {
    margin-bottom: 2rem;

    em {
      color: var(--gray);
    }
  }

  &.charge {
    em {
      color: var(--active-difference);
    }
  }

  @media only screen and (max-width: 1280px) {
    grid-template-columns: max(10vw, 80px) 1fr;
  }
`

function AboutExperience({ children }) {
  return (
    <div>
      {children}
      <StyledList>
        {careerList.map((career, index) => (
          <CareerItem key={career.companyName} career={career}>
            {index === 0 && (
              <>
                <StyledChargeList className="tech">
                  <li>기술 스택 :</li>
                  <li>
                    Javascript, Dart <em>|</em> Vue, Flutter <em>|</em> VueX, Nuxt, Riverpod
                  </li>
                </StyledChargeList>
                <StyledChargeList className="charge" $row={2}>
                  <li>담당 업무 :</li>
                  <li>
                    웹뷰 기반 플러터 앱 개발, 운영, 유지보수
                    <ul>
                      <li>
                        한국조폐공사와 협업하여 지역사랑상품권을 이용하는 신규 결제 수단 착페이를
                        추가 → 잠재적 지역상품권을 소지한 사용자의 매출을 지난달 대비{' '}
                        <em>총매출 10% 증가</em>
                      </li>
                    </ul>
                  </li>
                  <li>프로젝트 최적화 개발</li>
                </StyledChargeList>
              </>
            )}
          </CareerItem>
        ))}
      </StyledList>
    </div>
  )
}

export default AboutExperience

{
  /* <StyledLsit $row={career.techList.length} className="margin-bottom">
          <li>기술 스택:</li>
          {career.techList.map((tech) => (
            <li key={tech}>- {tech}</li>
          ))}
        </StyledLsit> */
}
