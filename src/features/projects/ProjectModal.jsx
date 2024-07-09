import styled from 'styled-components'
import { LazyImage } from '../../components/Components'

const ContentBox = styled.div`
  height: 100%;
  padding: max(3vw, 3rem) 7vw;
  overflow: auto;

  @media only screen and (max-width: 640px) {
    height: calc(100% - 30vw);
  }
`

const HeaderBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: max(5vw, 20px);
  font-family: 'Bodoni Moda', sans-serif;
  color: var(--active);
  margin-bottom: max(5vw, 30px);
  line-height: 1;

  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 160%;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(
      to right,
      transparent 0%,
      var(--active) 10%,
      var(--active) 90%,
      transparent 100%
    );
    border-image-slice: 1;
  }

  @media only screen and (max-width: 640px) {
    font-size: 8vw;
  }
`

const CloseButton = styled.button`
  position: absolute;
  bottom: calc(max(3vw, 35px) * -0.5);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: max(3vw, 35px);
  height: max(3vw, 35px);
  background-color: var(--active);
  border-radius: 50px;
  z-index: 1;

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-47%, -50%);
    width: 40%;
    height: auto;
  }
`

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  row-gap: 1.5vw;
  font-size: clamp(12px, 1vw, 18px);
  min-width: 0;
  min-height: 0;

  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 0;
  }
`

const GridItem = styled.div`
  min-width: 0;

  &.title-item {
    color: var(--active);
  }

  &.project-link {
    display: flex;
    flex-direction: column;

    .link {
      white-space: nowrap;
    }
  }

  @media only screen and (max-width: 640px) {
    &.title-item:not(&:first-child) {
      margin-top: 1.5rem;
    }
  }
`

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li:not(li:last-child) {
    border-right: 1px solid var(--gray);
    padding-right: 0.7rem;
    margin-right: 0.7rem;
  }

  .top-priority {
    color: var(--active);
    font-weight: 600;
  }
`

const TechItem = styled.li`
  span:not(span:last-child)::after {
    content: ',';
    margin-right: 4px;
  }
`

const ChargeList = styled.ul`
  line-height: 1.5;

  li {
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '';
      position: absolute;
      top: 0.9rem;
      left: 0;
      width: 5px;
      height: 5px;
      background-color: var(--active);
      border-radius: 25px;
    }
  }
`

const ChargeItem = styled.li`
  &:not(&:last-child) {
    margin-bottom: 1.5vw;
  }

  .main-charge {
    background-color: rgba(21, 71, 13, 0.2);
    font-weight: bold;
  }

  ul {
    padding-left: 1.5rem;

    li {
      word-break: keep-all;
      white-space: pre-wrap;

      &::before {
        background-color: var(--white);
        border: 1px solid var(--active);
      }

      &:not(&:last-child) {
        margin-bottom: 5px;
      }
    }
  }
`

const OrderItem = styled.li`
  &::before {
    content: ${(props) => '"' + props.number + '."'}!important;
    top: 0 !important;
    background-color: transparent !important;
    border: none !important;
  }
`

function ProjectModal({ project, onCloseClick }) {
  function cutLinkShort(link) {
    if (link.includes('.com')) {
      return link.split('.com')[0] + '.com'
    } else if (link.includes('.co.kr')) {
      return link.split('.co.kr')[0] + '.co.kr'
    }
  }

  return (
    <ContentBox>
      <CloseButton onClick={onCloseClick}>
        <LazyImage src="/icons/close.svg" alt="close" className="icon" />
      </CloseButton>
      <HeaderBox>
        <div>{project.title}</div>
      </HeaderBox>
      <GridBox>
        <GridItem className="title-item">개발 기간</GridItem>
        <GridItem>{project.period}</GridItem>
        <GridItem className="title-item">역할</GridItem>
        <GridItem>{project.role}</GridItem>
        <GridItem className="title-item">프로젝트 소개</GridItem>
        <GridItem>{project.introduction}</GridItem>
        <GridItem className="title-item">서비스 링크</GridItem>
        <GridItem className="project-link">
          {project.links.map((link) => (
            <a href={link} target="_blank" key={link} className="link">
              🔗 {cutLinkShort(link)}
            </a>
          ))}
        </GridItem>
        <GridItem className="title-item">기술 스택</GridItem>
        <TechList>
          <TechItem>
            {project.languages.map((language) => (
              <span key={language.name} className={language.isMostUsed ? 'top-priority' : ''}>
                {language.name}
              </span>
            ))}
          </TechItem>
          <TechItem>
            {project.libraries.map((library) => (
              <span key={library.name} className={library.isMostUsed ? 'top-priority' : ''}>
                {library.name}
              </span>
            ))}
          </TechItem>
          <TechItem>
            {project.frameworks.map((framework) => (
              <span key={framework.name} className={framework.isMostUsed ? 'top-priority' : ''}>
                {framework.name}
              </span>
            ))}
          </TechItem>
        </TechList>
        <GridItem className="title-item">담당 업무</GridItem>
        <ChargeList>
          {project.chargeList.map((charge) => (
            <ChargeItem key={charge.mainCharge}>
              <span className="main-charge">{charge.mainCharge}</span>
              <ul>
                {charge.subCharge.map((subCharge) => {
                  if (subCharge.includes('\n')) {
                    const charges = subCharge.split('\n')

                    return (
                      <li key={subCharge}>
                        {charges.shift()}
                        <ul>
                          {charges.map((orderCharge, index) => (
                            <OrderItem key={orderCharge} number={index + 1}>
                              {orderCharge}
                            </OrderItem>
                          ))}
                        </ul>
                      </li>
                    )
                  } else {
                    return <li key={subCharge}>{subCharge}</li>
                  }
                })}
              </ul>
            </ChargeItem>
          ))}
        </ChargeList>
      </GridBox>
    </ContentBox>
  )
}

export default ProjectModal
