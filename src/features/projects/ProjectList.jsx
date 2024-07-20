import styled from 'styled-components'
import NoljangWeb from './NoljangWeb'
import NoljangApp from './NoljangApp'

const StyledLayout = styled.div`
  width: 80%;
  margin: 10rem auto;

  @media only screen and (max-width: 1024px) {
    width: 85%;
    margin: 3rem auto 5rem;
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
