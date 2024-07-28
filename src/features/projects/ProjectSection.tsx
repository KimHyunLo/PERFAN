import { type ReactNode } from 'react'
import ProjectList from './ProjectList.tsx'

interface ProjectSectionProps {
  children: ReactNode
}

function ProjectSection({ children }: ProjectSectionProps) {
  return (
    <div>
      {children}
      <ProjectList />
    </div>
  )
}

export default ProjectSection
