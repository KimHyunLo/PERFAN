import { type ReactNode } from 'react'
import { Section } from '../store/section-context'
import Title from './Title'
import styled from 'styled-components'

const StyledSection = styled.section`
  position: relative;

  &:not(&:last-child) {
    margin-bottom: 20vh;
  }

  &#main,
  &#contact {
    height: 100vh;

    @media only screen and (max-width: 1024px) {
      height: auto;
    }
  }

  &#projects .content-box {
    display: flex;
    flex-direction: column;
    gap: min(100px, 10vw);
    width: max(70%, 900px);

    @media only screen and (max-width: 1024px) {
      width: 80%;
    }

    @media only screen and (max-width: 425px) {
      width: 95%;
    }
  }

  &#contact .content-box {
    display: flex;
    justify-content: space-between;
    align-items: end;

    @media only screen and (max-width: 1024px) {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      flex-direction: column;
      align-items: center;
      gap: 10vh;
      margin: 0 auto 10vh;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 20vh;
    margin-bottom: 0;

    &:first-child {
      margin-top: 10vh;
    }
  }
`

const StyledContentBox = styled.div`
  width: max(85%, 950px);
  padding-top: 60vh;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    width: 80%;
    padding-top: 0;
  }

  @media only screen and (max-width: 425px) {
    width: 95%;
  }
`

interface SectionBox {
  section: Section
  children: ReactNode
}

export default function SectionBox({ section, children }: SectionBox) {
  return (
    <StyledSection id={section.nav} ref={section.ref}>
      <Title title={section.title} />
      <StyledContentBox className="content-box">{children}</StyledContentBox>
    </StyledSection>
  )
}
