import { createContext } from 'react'
import { useToggleBodyScroll } from '../hooks/useToggleBodyScroll'

const SideMenuContext = createContext()

function SideMenuProvider({ children }) {
  const { isScrollable, setIsScrollable } = useToggleBodyScroll()

  function toggleSideMenu() {
    setIsScrollable((is) => !is)
  }

  return (
    <SideMenuContext.Provider value={{ isScrollable, toggleSideMenu }}>
      {children}
    </SideMenuContext.Provider>
  )
}

export { SideMenuProvider, SideMenuContext }
