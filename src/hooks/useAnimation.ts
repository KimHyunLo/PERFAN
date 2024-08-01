import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useAnimation() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  return {
    navTransition,
    navItemHover,
  }
}

function navItemHover(index: number) {
  const timeline = gsap.timeline()

  timeline.fromTo(
    `.title-box${index}`,
    {
      height: 0,
      duration: 0.5,
    },
    {
      height: '25vh',
      duration: 0.5,
    },
  )

  gsap.utils.toArray(`.title-box${index} .title span`).forEach((selector) => {
    timeline.fromTo(
      selector as HTMLElement,
      {
        y: '25vh',
      },
      {
        y: 0,
        duration: 0.05,
      },
      '<',
    )
  })

  return timeline
}

function navTransition(index: number) {
  const timeline = gsap.timeline({ reversed: true })

  timeline.to(`.title-box${index}`, {
    height: '100vh',
    duration: 0.7,
    ease: 'power4.in',
  })

  timeline.to(
    `.title-box${index} .title span`,
    {
      y: '0',
      color: 'var(--white)',
      duration: 0.5,
    },
    '<',
  )

  timeline.to(
    `.title-box${index}`,
    {
      y: '-200%',
      duration: 1,
      ease: 'power4.in',
    },
    '>1',
  )

  gsap.utils.toArray(`.title-box${index} .title span`).forEach((selector) => {
    timeline.to(
      selector as HTMLElement,
      {
        y: '-10vh',
        opacity: 0,
        duration: 0.05,
        ease: 'power3.in',
      },
      '<',
    )
  })

  timeline.set(
    `.title-box${index}`,
    {
      height: 0,
      y: 0,
      transition: 'none',
    },
    '<2',
  )

  timeline.set(
    `.title-box${index} .title span`,
    {
      y: '25vh',
      color: 'var(--dark-gray)',
      opacity: 1,
    },
    '<',
  )

  return timeline.play()
}
