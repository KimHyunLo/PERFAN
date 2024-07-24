import ProjectList from './ProjectList'

function ProjectSection({ children }) {
  return (
    <div>
      {children}
      <ProjectList />
    </div>
  )
}

export default ProjectSection
