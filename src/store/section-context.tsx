import { createContext, type ReactNode, useRef, RefObject } from 'react'
import MainContent from '../features/main/MainContent'
import AboutContent from '../features/about/AboutContent'
import ProjectsContent from '../features/projects/ProjectsContent'
import ContactContent from '../features/contact/ContactContent'
import SkillsContent from '../features/skills/SkillsContent'

export type Section = {
  nav: string
  title: string[]
  content: JSX.Element
  ref: RefObject<HTMLElement>
}

type SectionsState = {
  sections: Section[]
}

type SectionsContextValue = SectionsState & {
  onNavClick: (ref: HTMLElement | null) => void
}

export const SectionsContext = createContext<SectionsContextValue | null>(null)

type SectionsContextProviderProps = {
  children: ReactNode
}

export default function SectionsContextProvider({ children }: SectionsContextProviderProps) {
  const value: SectionsContextValue = {
    sections: [
      {
        nav: 'main',
        title: ['Perfect', 'Plan'],
        ref: useRef<HTMLElement>(null),
        content: <MainContent />,
      },
      {
        nav: 'about',
        title: ['About', 'Me'],
        ref: useRef<HTMLElement>(null),
        content: <AboutContent />,
      },
      {
        nav: 'skills',
        title: ['My', 'Skills'],
        ref: useRef<HTMLElement>(null),
        content: <SkillsContent />,
      },
      {
        nav: 'projects',
        title: ['My', 'Projects'],
        ref: useRef<HTMLElement>(null),
        content: <ProjectsContent />,
      },
      {
        nav: 'contact',
        title: ['Contact', 'Me'],
        ref: useRef<HTMLElement>(null),
        content: <ContactContent />,
      },
    ],
    onNavClick: (ref) => {
      ref?.scrollIntoView()
    },
  }

  return <SectionsContext.Provider value={value}>{children}</SectionsContext.Provider>
}
