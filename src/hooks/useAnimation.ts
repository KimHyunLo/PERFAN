import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useAnimation() {
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {})
}
