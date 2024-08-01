import styled from 'styled-components'
import NoljangWeb from './NoljangWeb.tsx'
import NoljangApp from './NoljangApp.tsx'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: min(10rem, 10vw);
`

function ProjectsContent() {
  return (
    <StyledList>
      <NoljangWeb />
      <NoljangApp />
    </StyledList>
  )
}

export default ProjectsContent
