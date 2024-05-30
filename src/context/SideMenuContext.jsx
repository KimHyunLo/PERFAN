import { createContext, useEffect, useState } from 'react'

const SideMenuContext = createContext()

function SideMenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleSideMenu() {
    setIsMenuOpen((isOpen) => !isOpen)
  }

  useEffect(
    function () {
      if (isMenuOpen) {
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        document.querySelector('body').style.overflow = 'auto'
      }

      return () => {
        document.querySelector('body').style.overflow = 'auto'
      }
    },
    [isMenuOpen],
  )

  return <SideMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, toggleSideMenu }}>{children}</SideMenuContext.Provider>
}

export { SideMenuProvider, SideMenuContext }
