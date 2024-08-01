import { type ReactNode } from 'react'
import { Section } from '../store/section-context'
import Title from './Title'
import styled from 'styled-components'

const StyledSection = styled.section`
  position: relative;

  &.main,
  &.contact {
    height: 100vh;

    @media only screen and (max-width: 1024px) {
      height: auto;
    }
  }
`

const StyledContentBox = styled.div`
  width: max(85%, 950px);
  padding-top: 60vh;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    width: 90%;
    padding-top: 0;
  }
`

interface SectionBox {
  section: Section
  children: ReactNode
}

export default function SectionBox({ section, children }: SectionBox) {
  return (
    <StyledSection className={section.nav} ref={section.ref}>
      <Title title={section.title} />
      <StyledContentBox>{children}</StyledContentBox>
    </StyledSection>
  )
}
