import { type ReactNode } from 'react'
import MainContent from './MainContent.tsx'

interface MainSectionProps {
  children: ReactNode
}

function MainSection({ children }: MainSectionProps) {
  return (
    <section>
      {children}
      <MainContent />
    </section>
  )
}

export default MainSection
