import styled from 'styled-components'
import { LazyImage } from '../../components/Components'

const HeaderBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max(15vw, 10rem);
  background-image: url(modalBackground.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: max(5vw, 20px);
  font-family: 'Bodoni Moda', sans-serif;
  color: var(--white);

  .close-button {
    position: absolute;
    bottom: calc(max(3vw, 35px) * -0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: max(3vw, 35px);
    height: max(3vw, 35px);
    background-color: var(--active-difference);
    border-radius: 50px;
    z-index: 1;

    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-47%, -50%);
      width: 40%;
      height: auto;
      mix-blend-mode: difference;
    }
  }

  @media only screen and (max-width: 640px) {
    height: 30vw;
    font-size: 8vw;
  }
`

const ContentBox = styled.div`
  height: calc(100% - max(15vw, 10rem));
  padding: max(3vw, 3rem) 7vw;
  overflow: auto;

  .introduction {
    font-size: clamp(12px, 1vw, 18px);
    margin-bottom: 1.5vw;
  }

  @media only screen and (max-width: 640px) {
    height: calc(100% - 30vw);

    .introduction {
      margin-bottom: 3vw;
    }
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
  margin-bottom: 1.5vw;

  ul {
    padding-left: 1.5rem;
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
    <>
      <HeaderBox>
        <div>{project.title}</div>
        <button className="close-button" onClick={onCloseClick}>
          <LazyImage src="/icons/close.svg" alt="close" className="icon" />
        </button>
      </HeaderBox>
      <ContentBox>
        <p className="introduction">{project.introduction}</p>
        <GridBox>
          <GridItem className="title-item">서비스 링크</GridItem>
          <GridItem className="project-link">
            {project.links.map((link) => (
              <a href={link} target="_blank" key={link} className="link">
                🔗 {cutLinkShort(link)}
              </a>
            ))}
          </GridItem>
          <GridItem className="title-item">개발 기간</GridItem>
          <GridItem>{project.period}</GridItem>
          <GridItem className="title-item">기술 스텍</GridItem>
          <TechList>
            {project.techList.map((tech) => (
              <li key={tech.id} className={tech.priority === 1 ? 'top-priority' : ''}>
                {tech.name}
              </li>
            ))}
          </TechList>
          <GridItem className="title-item">담당 업무</GridItem>
          <ChargeList>
            {project.chargeList.map((charge) => (
              <ChargeItem key={charge.mainCharge}>
                {charge.mainCharge}
                <ul>
                  {charge.subCharge.map((subCharge) => (
                    <li key={subCharge}>{subCharge}</li>
                  ))}
                </ul>
              </ChargeItem>
            ))}
          </ChargeList>
        </GridBox>
      </ContentBox>
    </>
  )
}

export default ProjectModal
