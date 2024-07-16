import styled from 'styled-components'

const StyledProjectItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: max(2.5vw, 3rem);
  height: calc(((100vw - 3rem) / 3.3) * 1.15);
  width: 83%;
  background-image: ${(props) =>
    props.theme === 'green' ? 'url(greenHoverBackground.jpeg)' : 'url(whiteHoverBackground.jpeg)'};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 10px 10px 10px rgba(34, 34, 34, 0.5);
  margin: ${(props) => (props.theme === 'white' ? 'max(3vw, 5rem)' : '0')} auto 0;

  @media only screen and (max-width: 1024px) {
    height: calc(((100vw - 3rem) / 2.3) * 1.15);
  }

  @media only screen and (max-width: 640px) {
    height: calc(((100vw - 3rem) / 1.15) * 1.15);
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bodoni Moda', sans-serif;
  font-size: 3vw;
  line-height: 1.7;
  text-align: center;
  width: 80%;
  color: ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};

  &::before {
    content: '';
    position: absolute;
    width: 60%;
    height: 15%;
    border-bottom: 1px solid
      ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
  }

  @media only screen and (max-width: 1024px) {
    font-size: 4vw;
  }

  @media only screen and (max-width: 640px) {
    font-size: 8vw;
  }
`

const ProjectDetail = styled.div`
  text-align: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: max(0.5vw, 1rem);
    font-size: 1.8rem;

    li {
      color: ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
    }

    @media only screen and (max-width: 1280px) {
      font-size: max(1.4vw, 14px);
    }
  }

  button {
    height: 3.5rem;
    width: 12rem;
    font-size: 1.8rem;
    background-color: ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
    color: ${(props) => (props.theme === 'green' ? 'var(--active)' : 'var(--white)')};
    border-radius: 25px;
    margin-top: max(2vw, 2rem);

    @media only screen and (max-width: 1280px) {
      font-size: max(1.4vw, 14px);
    }
  }
`

function ProjectItem({ project, theme, onMoreClick }) {
  return (
    <StyledProjectItem theme={theme}>
      <Title className="title" theme={theme}>
        {project.title}
      </Title>
      <ProjectDetail theme={theme}>
        <ul>
          <li>-&nbsp;{project.period}&nbsp;-</li>
          {project.chargeList.map((charge) => (
            <li key={charge}>{charge}</li>
          ))}
        </ul>
        <button onClick={onMoreClick}>더보기</button>
      </ProjectDetail>
    </StyledProjectItem>
  )
}

export default ProjectItem
