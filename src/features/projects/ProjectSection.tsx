import { forwardRef, type ReactNode } from 'react'
import ProjectList from './ProjectList.tsx'
import styled from 'styled-components'

const StyledSection = styled.section`
  padding-top: 20vh;
`

interface ProjectSectionProps {
  children: ReactNode
}

const ProjectSection = forwardRef<HTMLElement, ProjectSectionProps>(function ProjectSection(
  { children },
  ref,
) {
  return (
    <StyledSection ref={ref}>
      {children}
      <ProjectList />
    </StyledSection>
  )
})

export default ProjectSection
