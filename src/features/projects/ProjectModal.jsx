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

  .title-item {
    color: var(--active);
  }

  .link {
    width: fit-content;
  }

  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 0;

    .title-item:not(&:first-child) {
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
          <div className="title-item">서비스 링크</div>
          <a href={project.link} target="_blank" className="link">
            🔗 {project.link}
          </a>
          <div className="title-item">개발 기간</div>
          <div>{project.period}</div>
          <div className="title-item">기술 스텍</div>
          <TechList>
            {project.techList.map((tech) => (
              <li key={tech.id} className={tech.priority === 1 ? 'top-priority' : ''}>
                {tech.name}
              </li>
            ))}
          </TechList>
          <div className="title-item">담당 업무</div>
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
