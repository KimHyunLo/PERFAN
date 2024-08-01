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
        {sections.map((section) => (
          <SectionBox section={section} key={section.nav}>
            {section.content}
          </SectionBox>
        ))}
      </main>
    </StyledLayout>
  )
}

export default Layout
