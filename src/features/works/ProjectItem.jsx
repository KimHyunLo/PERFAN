import styled from 'styled-components'

const StyledProjectItem = styled.div`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24vw;
  height: 35vw;
  max-width: 450px;
  max-height: 650px;
  background-image: ${(props) => (props.theme === 'green' ? 'url(greenBackground.png)' : 'url(whiteBackground.png)')};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 10px 10px 10px rgba(34, 34, 34, 0.5);
  margin-top: ${(props) => props.theme === 'white' && '5rem'};
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    width: 95%;
    height: 95%;
    border: 1px solid ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
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

function ProjectItem({ project, theme }) {
  const title = project.title

  return (
    <StyledProjectItem theme={theme}>
      <Title theme={theme}>{title}</Title>
    </StyledProjectItem>
  )
}

export default ProjectItem
