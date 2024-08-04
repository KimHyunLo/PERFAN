import { useEffect, useState } from 'react'

export function useScroll() {
  const [isNavHidden, setIsNavHidden] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  useEffect(() => {
    function handleScroll(e: Event) {
      const window = e.currentTarget as Window
      setLastScrollY(window.scrollY)

      if (
        lastScrollY >= window.scrollY ||
        window.scrollY >= document.body.scrollHeight - window.innerHeight - 10
      ) {
        setIsNavHidden(false)
      } else if (lastScrollY < window.scrollY) {
        setIsNavHidden(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return { isNavHidden, setIsNavHidden, lastScrollY, setLastScrollY }
}
