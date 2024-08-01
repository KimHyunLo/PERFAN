import { useEffect } from 'react'
import styled from 'styled-components'

import Title from '../components/Title.tsx'
import Header from '../components/Header.tsx'
import Scrollbar from '../components/Scrollbar.tsx'
import ScrollButton from '../components/ScrollButton.tsx'
import Nav from '../components/Nav.tsx'

import MainSection from '../features/main/MainSection.tsx'
import AboutSection from '../features/about/AboutSection.tsx'
import ProjectSection from '../features/projects/ProjectSection.tsx'
import ContactSection from '../features/contact/ContactSection.tsx'

import { useUpdateUser } from '../hooks/useUpdateUser.ts'
import { useCustomContext } from '../hooks/useCustomContext .ts'
import { SectionsContext } from '../store/section-context.tsx'

const StyledLayout = styled.div`
  position: relative;
  width: calc(100% - 60px);
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: calc(100% - 30px);
  }
`

function Layout() {
  const { sections } = useCustomContext(SectionsContext)
  const { updateUser } = useUpdateUser()

  useEffect(() => {
    if (window.location.href === 'https://perfan.vercel.app/') updateUser()
  }, [updateUser])

  return (
    <StyledLayout>
      <Header />
      <Nav />
      <Scrollbar target={document.body} />
      <ScrollButton />
      <main>
        <MainSection ref={sections[0].ref}>
          <Title title={sections[0].title} />
        </MainSection>
        <AboutSection ref={sections[1].ref}>
          <Title title={sections[1].title} />
        </AboutSection>
        <ProjectSection ref={sections[2].ref}>
          <Title title={sections[2].title} />
        </ProjectSection>
        <ContactSection ref={sections[3].ref}>
          <Title title={sections[3].title} />
        </ContactSection>
      </main>
    </StyledLayout>
  )
}

export default Layout
