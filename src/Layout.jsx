import styled from 'styled-components'

import Title from './components/Title'
import Header from './components/Header'
import Scrollbar from './components/Scrollbar'
import ScrollButton from './components/ScrollButton'

import MainSection from './features/main/MainSection'
import AboutSection from './features/about/AboutSection'
import ProjectSection from './features/projects/ProjectSection'
import ContactSection from './features/contact/ContactSection'

import { useUpdateUser } from './hooks/useUpdateUser'

const StyledLayout = styled.div`
  width: calc(100% - 6rem);
  margin: 15vh auto 10vh;

  @media only screen and (max-width: 640px) {
    width: calc(100% - 3rem);
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
  const { updateUser, isUpdating } = useUpdateUser()

  if (window.location.href === 'https://perfan.vercel.app/') updateUser()

  if (isUpdating) return

  return (
    <StyledLayout>
      <Header />
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
