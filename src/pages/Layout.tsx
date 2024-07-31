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

const StyledLayout = styled.div`
  position: relative;
  width: calc(100% - 60px);
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    width: calc(100% - 30px);
  }
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30vh;

  @media only screen and (max-width: 1024px) {
    gap: 15vh;
  }
`

function Layout() {
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
      <StyledMain>
        <MainSection>
          <Title title={['Perfect', 'Plan']} />
        </MainSection>
        <AboutSection>
          <Title title={['About', 'Me']} />
        </AboutSection>
        <ProjectSection>
          <Title title={['My', 'Projects']} />
        </ProjectSection>
        <ContactSection>
          <Title title={['Contact', 'Me']} />
        </ContactSection>
      </StyledMain>
    </StyledLayout>
  )
}

export default Layout
