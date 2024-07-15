import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 10px;
  mix-blend-mode: difference;
  z-index: 2;
`

const StyledScrollbar = styled.div.attrs((props) => ({
  style: {
    transform: `scale(1, ${props.$height})`,
    opacity: props.$height,
  },
}))`
  will-change: transform, opacity;
  height: 100%;
  width: 100%;
  background: linear-gradient(transparent, var(--active-difference));
  transform-origin: top center;
`

function Scrollbar({ target }) {
  const [scrollbarHeight, setScrollbarHeight] = useState(0)
  const containerRef = useRef(null)

  useEffect(
    function () {
      function handleScroll() {
        const totalPageHeight = target.scrollHeight - window.innerHeight
        const newProgressHeight = window.scrollY / totalPageHeight

        setScrollbarHeight(newProgressHeight)
      }

      window.addEventListener('scroll', handleScroll, {
        capture: true,
        passive: true,
      })

      return () =>
        window.removeEventListener('scroll', handleScroll, {
          capture: true,
          passive: true,
        })
    },
    [target.scrollHeight],
  )

  function handleClick(e) {
    const totalPageHeight = target.scrollHeight - window.innerHeight
    const newPageScroll = (e.clientY / containerRef.current.offsetHeight) * totalPageHeight

    window.scrollTo({
      top: newPageScroll,
      behavior: 'smooth',
    })
  }

  return (
    <StyledLayout onClick={handleClick} ref={containerRef}>
      <StyledScrollbar $height={scrollbarHeight} />
    </StyledLayout>
  )
}

export default Scrollbar
