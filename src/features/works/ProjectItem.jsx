import styled from 'styled-components'

const StyledProjectItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 24vw;
  height: 35vw;
  max-width: 450px;
  max-height: 650px;
  background-image: ${(props) => (props.theme === 'green' ? 'url(greenBackground.png)' : 'url(whiteBackground.png)')};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 10px 10px 10px rgba(34, 34, 34, 0.5);
  margin: ${(props) => (props.theme === 'white' ? '5rem' : '0')} auto 0;

  &::before {
    content: '';
    position: absolute;
    width: 95%;
    height: 95%;
    border: 1px solid ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
  }

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
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bodoni Moda', sans-serif;
  font-size: 3vw;
  line-height: 1.7;
  width: 80%;
  color: ${(props) => (props.theme === 'green' ? 'var(--active)' : 'var(--white)')};
  background-color: ${(props) => (props.theme === 'white' ? ' rgba(21, 71, 13, 0.3)' : 'rgba(238, 234, 228, 0.3)')};
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
    gap: 1rem;

    li {
      color: ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
    }
  }

  button {
    height: 3rem;
    width: 10rem;
    background-color: ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
    color: ${(props) => (props.theme === 'green' ? 'var(--active)' : 'var(--white)')};
    border-radius: 25px;
    margin-top: 2rem;
  }
`

const Task = styled.li``

function ProjectItem({ project, theme }) {
  return (
    <StyledProjectItem theme={theme}>
      <Title className="title" theme={theme}>
        {project.title}
      </Title>
      <HiddenDetail className="hidden-detail" theme={theme}>
        <ul>
          <li>-&nbsp;{project.period}&nbsp;-</li>
          {project.taskList.map((task) => (
            <Task key={task.id}>{task.task}</Task>
          ))}
        </ul>
        <button>더보기</button>
      </HiddenDetail>
    </StyledProjectItem>
  )
}

export default ProjectItem
