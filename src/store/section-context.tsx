import { createContext, type ReactNode, useRef, RefObject } from 'react'

export type Section = {
  nav: string
  title: string[]
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
      { nav: 'main', title: ['Perfect', 'Plan'], ref: useRef<HTMLElement>(null) },
      { nav: 'about', title: ['About', 'Me'], ref: useRef<HTMLElement>(null) },
      { nav: 'projects', title: ['My', 'Projects'], ref: useRef<HTMLElement>(null) },
      { nav: 'contact', title: ['Contact', 'Me'], ref: useRef<HTMLElement>(null) },
    ],
    onNavClick: (ref) => {
      ref?.scrollIntoView()
    },
  }

  return <SectionsContext.Provider value={value}>{children}</SectionsContext.Provider>
}
