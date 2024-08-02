import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useAnimation() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    sectionTitleFadeIn()
    sectionContentFadeIn()
    headerFadeIn()
  })

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
        duration: 0.1,
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
    '<1',
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

function sectionTitleFadeIn() {
  gsap.utils.toArray('section').forEach((section) => {
    const timeline = gsap.timeline()

    ScrollTrigger.create({
      animation: timeline,
      trigger: section as HTMLElement,
      start: '0% 70%',
      end: '0% 0%',
      onLeaveBack: () => timeline.reverse(0),
    })

    gsap.utils.toArray((section as HTMLElement).querySelector('h1')).forEach((heading) => {
      gsap.utils.toArray((heading as HTMLElement).querySelectorAll('span')).forEach((letter) => {
        timeline.fromTo(
          letter as HTMLElement,
          {
            y: -250,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          '<0.05',
        )
      })
    })
  })
}

function sectionContentFadeIn() {
  gsap.utils.toArray('section').forEach((section) => {
    const timeline = gsap.timeline()

    ScrollTrigger.create({
      animation: timeline,
      trigger: section as HTMLElement,
      start: '0% 60%',
      end: '0% 0%',
      onLeaveBack: () => timeline.reverse(0),
    })

    gsap.utils
      .toArray((section as HTMLElement).querySelectorAll('.content-box > *'))
      .forEach((box) => {
        timeline.fromTo(
          box as HTMLElement,
          {
            opacity: 0,
            y: -50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          '<0.5',
        )
      })
  })
}

function headerFadeIn() {
  gsap.fromTo(
    'header',
    {
      opacity: 0,
      y: -50,
    },
    {
      opacity: 1,
      y: 0,
      delay: 1,
    },
  )
}
