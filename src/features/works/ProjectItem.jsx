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
  background-image: ${(props) => (props.theme === 'green' ? 'url(greenBackground.png)' : 'url(whiteBackground.png)')};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 10px 10px 10px rgba(34, 34, 34, 0.5);
  margin: ${(props) => (props.theme === 'white' ? 'max(5vw, 5rem)' : '0')} auto 0;

  &:hover {
    background-image: ${(props) => (props.theme === 'green' ? 'url(greenHoverBackground.png)' : 'url(whiteHoverBackground.png)')};

    &::before {
      display: none;
    }

    .title {
      background-color: transparent;
      color: ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};

      &::before {
        width: 60%;
        height: 15%;
        border-bottom: 1px solid ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
      }

      &::before,
      &::after {
        background-color: transparent;
      }
    }

    .hidden-detail {
      display: block;
    }
  }

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
  font-size: max(3vw, 25px);
  line-height: 1.7;
  width: 80%;
  color: ${(props) => (props.theme === 'green' ? 'var(--active)' : 'var(--white)')};
  background-color: ${(props) => (props.theme === 'white' ? ' rgba(21, 71, 13, 0.4)' : 'rgba(238, 234, 228, 0.4)')};
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 85%;
    height: 20%;
    background-color: ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
    opacity: 0.5;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 90%;
    height: 25%;
    background-color: ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
    opacity: 0.2;
    z-index: -2;
  }
`

const HiddenDetail = styled.div`
  display: none;
  text-align: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: max(0.5vw, 1rem);

    li {
      color: ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
      font-size: max(0.85vw, 12px);
    }
  }

  button {
    height: 3rem;
    width: 10rem;
    font-size: max(0.85vw, 12px);
    background-color: ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
    color: ${(props) => (props.theme === 'green' ? 'var(--active)' : 'var(--white)')};
    border-radius: 25px;
    margin-top: max(2vw, 2rem);
  }
`

function ProjectItem({ project, theme, onMoreClick }) {
  return (
    <StyledProjectItem theme={theme}>
      <Title className="title" theme={theme}>
        {project.title}
      </Title>
      <HiddenDetail className="hidden-detail" theme={theme}>
        <ul>
          <li>-&nbsp;{project.period}&nbsp;-</li>
          {project.taskList.map((task) => (
            <li key={task.id}>{task.task}</li>
          ))}
        </ul>
        <button onClick={onMoreClick}>더보기</button>
      </HiddenDetail>
    </StyledProjectItem>
  )
}

export default ProjectItem
