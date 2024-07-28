import { useEffect, useRef, useState, type MouseEvent } from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 10px;
  z-index: 2;
`

interface StyledScrollbarProps {
  height: number
}

const StyledScrollbar = styled.div.attrs<StyledScrollbarProps>(({ height }) => ({
  style: {
    transform: `scale(1, ${height})`,
    opacity: height,
  },
}))<StyledScrollbarProps>`
  will-change: transform, opacity;
  height: 100%;
  width: 100%;
  background: linear-gradient(transparent, var(--active));
  transform-origin: top center;
`

type ScrollbarProps = {
  target: HTMLElement
}

function Scrollbar({ target }: ScrollbarProps) {
  const [scrollbarHeight, setScrollbarHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

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
        })
    },
    [target.scrollHeight],
  )

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const totalPageHeight = target.scrollHeight - window.innerHeight
    const newPageScroll = (e.clientY / containerRef.current!.offsetHeight) * totalPageHeight

    window.scrollTo({
      top: newPageScroll,
      behavior: 'smooth',
    })
  }

  return (
    <StyledLayout onClick={handleClick} ref={containerRef}>
      <StyledScrollbar height={scrollbarHeight} />
    </StyledLayout>
  )
}

export default Scrollbar
