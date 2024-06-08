import styled from 'styled-components'
import ProjectItem from './ProjectItem'

const projectList = [
  {
    id: 0,
    title: 'Noljang Web',
    period: '23/03~23/11',
    taskList: [
      {
        id: 0,
        task: 'UX&UI 개선',
      },
      {
        id: 1,
        task: 'API 호출 프로세스 간편화',
      },
      {
        id: 2,
        task: '서비스 인지도 개선',
      },
      {
        id: 3,
        task: '프로젝트 문서화',
      },
    ],
  },
  {
    id: 1,
    title: 'Noljang App',
    period: '23/03~23/11',
    taskList: [
      {
        id: 0,
        task: 'UX&UI 개선',
      },
      {
        id: 1,
        task: 'API 호출 프로세스 간편화',
      },
      {
        id: 2,
        task: '서비스 인지도 개선',
      },
      {
        id: 3,
        task: '프로젝트 문서화',
      },
    ],
  },
  {
    id: 2,
    title: 'Noljang Web',
    period: '23/03~23/11',
    taskList: [
      {
        id: 0,
        task: 'UX&UI 개선',
      },
      {
        id: 1,
        task: 'API 호출 프로세스 간편화',
      },
      {
        id: 2,
        task: '서비스 인지도 개선',
      },
      {
        id: 3,
        task: '프로젝트 문서화',
      },
    ],
  },
  {
    id: 3,
    title: 'Noljang App',
    period: '23/03~23/11',
    taskList: [
      {
        id: 0,
        task: 'UX&UI 개선',
      },
      {
        id: 1,
        task: 'API 호출 프로세스 간편화',
      },
      {
        id: 2,
        task: '서비스 인지도 개선',
      },
      {
        id: 3,
        task: '프로젝트 문서화',
      },
    ],
  },
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
