import { createContext } from 'react'
import { useToggleBodyScroll } from '../hooks/useToggleBodyScroll'

const SideMenuContext = createContext()

function SideMenuProvider({ children }) {
  const { isScrollable: isMenuOpen, setIsScrollable } = useToggleBodyScroll()

  function toggleSideMenu() {
    setIsScrollable((is) => !is)
  }

  return (
    <SideMenuContext.Provider value={{ isMenuOpen, toggleSideMenu }}>
      {children}
    </SideMenuContext.Provider>
  )
}

export { SideMenuProvider, SideMenuContext }
