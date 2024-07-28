import styled from 'styled-components'
import NoljangWeb from './NoljangWeb.tsx'
import NoljangApp from './NoljangApp.tsx'

const StyledLayout = styled.div`
  width: 80%;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    width: 85%;
  }
`

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: min(10rem, 10vw);
`

function ProjectList() {
  return (
    <StyledLayout>
      <StyledProjectList>
        <NoljangWeb />
        <NoljangApp />
      </StyledProjectList>
    </StyledLayout>
  )
}

export default ProjectList
