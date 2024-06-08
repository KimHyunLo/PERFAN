import styled from 'styled-components'

const StyledProjectItem = styled.div`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24vw;
  height: 35vw;
  background-image: ${(props) => (props.theme === 'green' ? 'url(greenBackground.png)' : 'url(whiteBackground.png)')};
  border: 1px solid var(--active);
  border-radius: 1rem;
  margin-top: ${(props) => props.theme === 'white' && '5rem'};
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-image: ${(props) => (props.theme === 'white' ? 'url(greenBorder.png)' : 'url(whiteBorder.png)')};
    background-repeat: no-repeat;
    background-size: 26% 18%;
    background-position: top 2% right 2%;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-image: ${(props) => (props.theme === 'white' ? 'url(greenBorder.png)' : 'url(whiteBorder.png)')};
    background-repeat: no-repeat;
    background-size: 26% 18%;
    background-position: top 2% right 2%;
    transform: rotate(180deg);
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bodoni Moda', sans-serif;
  font-size: 4.5rem;
  line-height: 2;
  width: 100%;
  color: ${(props) => (props.theme === 'green' ? 'var(--active)' : 'var(--white)')};
  border-top: 1px solid ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
  border-bottom: 1px solid ${(props) => (props.theme === 'white' ? 'var(--active)' : 'var(--white)')};
  background-image: ${(props) => (props.theme === 'white' ? 'url(greenBackground.png)' : 'url(whiteBackground.png)')};

  &::before {
    content: '';
    position: absolute;
    display: block;
    height: 24vw;
    width: 35vw;
    background-image: ${(props) => (props.theme === 'white' ? 'url(greenBorder.png)' : 'url(whiteBorder.png)')};
    background-repeat: no-repeat;
    background-size: 18% 26%;
    background-position: top 2% right 2%;
    transform: rotate(-90deg);
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    height: 24vw;
    width: 35vw;
    background-image: ${(props) => (props.theme === 'white' ? 'url(greenBorder.png)' : 'url(whiteBorder.png)')};
    background-repeat: no-repeat;
    background-size: 18% 26%;
    background-position: top 2% right 2%;
    transform: rotate(90deg);
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
