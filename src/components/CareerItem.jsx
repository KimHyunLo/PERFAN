import styled from 'styled-components'

const StyledLayout = styled.li`
  display: flex;
  gap: 7vw;
  justify-content: center;

  @media only screen and (max-width: 1280px) {
    gap: 0;
  }
`

const StyledPeriod = styled.div`
  font-family: 'Bodoni Moda', sans-serif;
  font-size: 2.5vw;
  line-height: 1.3;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`

const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;

  @media only screen and (max-width: 1280px) {
    width: auto;
  }
`

const StyledTitle = styled.div`
  font-size: 2.5vw;
  word-break: keep-all;
  margin-bottom: 3rem;

  a {
    color: var(--active-difference);
    border-bottom: 1px solid var(--active-difference);
  }

  .hidden-title {
    display: none;
  }

  @media only screen and (max-width: 1280px) {
    font-size: max(3.5vw, 18px);

    .hidden-title {
      display: block;
      font-family: 'Bodoni Moda', sans-serif;
      font-size: max(1.8vw, 14px);
      line-height: 1.3;
      margin-bottom: 0.5rem;
    }
  }
`

const StyledParagraph = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;

  em {
    color: var(--active-difference);
  }

  @media only screen and (max-width: 1280px) {
    font-size: max(1.8vw, 14px);
  }
`

const StyledLsit = styled.ul`
  display: grid;
  grid-template-columns: 12% 1fr;
  grid-template-rows: repeat(${(props) => props.$row}, min-content);
  font-size: 1.8rem;
  row-gap: 1rem;

  :first-child {
    grid-row: 1 / -1;
  }

  &.margin-bottom {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 1280px) {
    grid-template-columns: max(10vw, 80px) 1fr;
    font-size: max(1.8vw, 14px);
  }
`

function CareerItem({ career }) {
  return (
    <StyledLayout>
      <StyledPeriod>
        {career.period[0]}
        <br />~ {career.period[1]}
      </StyledPeriod>
      <StyledFlexBox>
        <StyledTitle>
          <div className="hidden-title">
            ( {career.period[0]} ~ {career.period[1]} )
          </div>
          {career.title}{' '}
          <a href={career.companyLink} target="_blank">
            &apos;{career.companyName}&apos;
          </a>
        </StyledTitle>
        <StyledParagraph>
          {career.introduce} 등의 <em>{career.charge}</em> 업무를 진행했습니다.
        </StyledParagraph>
        <StyledLsit $row={career.techList.length} className="margin-bottom">
          <li>기술 스택:</li>
          {career.techList.map((tech) => (
            <li key={tech}>- {tech}</li>
          ))}
        </StyledLsit>
        <StyledLsit $row={career.chargeList.length}>
          <li>담당 업무:</li>
          {career.chargeList.map((charge) => (
            <li key={charge}>- {charge}</li>
          ))}
        </StyledLsit>
      </StyledFlexBox>
    </StyledLayout>
  )
}

export default CareerItem
