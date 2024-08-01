import styled from 'styled-components'
import NoljangWeb from './NoljangWeb.tsx'
import NoljangApp from './NoljangApp.tsx'

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: min(10rem, 10vw);
`

function ProjectList() {
  return (
    <>
      <StyledProjectList>
        <NoljangWeb />
        <NoljangApp />
      </StyledProjectList>
    </>
  )
}

export default ProjectList
