import styled from 'styled-components'
import ProjectItem from './ProjectItem'

const projectList = [
  { id: 0, title: 'Noljang Web' },
  { id: 1, title: 'Noljang App' },
  { id: 2, title: 'Noljang Web' },
  { id: 3, title: 'Noljang App' },
]

const StyledProjectList = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 10rem;
  padding: 5rem 3rem;

  &::-webkit-scrollbar {
    display: none;
  }
`

function ProjectList() {
  return (
    <StyledProjectList>
      {projectList.map((project, index) => (
        <ProjectItem key={project.id} project={project} theme={index % 2 === 0 ? 'green' : 'white'} />
      ))}
    </StyledProjectList>
  )
}

export default ProjectList
