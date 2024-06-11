import { createContext } from 'react'
import { useToggleBodyScroll } from '../hooks/useToggleBodyScroll'

const SideMenuContext = createContext()

function SideMenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useToggleBodyScroll()

  function toggleSideMenu() {
    setIsMenuOpen((isOpen) => !isOpen)
  }

  return <SideMenuContext.Provider value={{ isMenuOpen, toggleSideMenu }}>{children}</SideMenuContext.Provider>
}

export { SideMenuProvider, SideMenuContext }
