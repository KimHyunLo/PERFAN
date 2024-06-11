import { useEffect, useState } from 'react'

export function useToggleBodyScroll() {
  const [isScrollable, setIsScrollable] = useState(false)

  useEffect(
    function () {
      if (isScrollable) {
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        document.querySelector('body').style.overflow = 'auto'
      }

      return () => (document.querySelector('body').style.overflow = 'auto')
    },
    [isScrollable],
  )

  return [isScrollable, setIsScrollable]
}
