import { useEffect } from 'react'
import styled from 'styled-components'

import Header from '../components/Header.tsx'
import Scrollbar from '../components/Scrollbar.tsx'
import ScrollButton from '../components/ScrollButton.tsx'
import Nav from '../components/Nav.tsx'
import SectionBox from '../components/SectionBox.tsx'

import { useUpdateUser } from '../hooks/useUpdateUser.ts'
import { useCustomContext } from '../hooks/useCustomContext .ts'
import { SectionsContext } from '../store/section-context.tsx'

import MainContent from '../features/main/MainContent.tsx'
import ProjectList from '../features/projects/ProjectList.tsx'
import ContactSection from '../features/contact/ContactSection.tsx'
import AboutIntroduce from '../features/about/AboutIntroduce.tsx'

const StyledLayout = styled.div`
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
        <SectionBox section={sections[0]}>
          <MainContent />
        </SectionBox>
        <SectionBox section={sections[1]}>
          <AboutIntroduce />
        </SectionBox>
        <SectionBox section={sections[2]}>
          <ProjectList />
        </SectionBox>
        <SectionBox section={sections[3]}>
          <ContactSection />
        </SectionBox>
      </main>
    </StyledLayout>
  )
}

export default Layout
