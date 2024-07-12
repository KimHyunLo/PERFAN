import styled from 'styled-components'
import { HorizontalList } from '../../components/Components'
import { appProgramming, cooperation, languages, webProgramming } from '../../data/contants'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  width: 85%;
  margin: 0 auto;

  @media only screen and (max-width: 1280px) {
    gap: 3.5rem;
    width: auto;
  }
`

function AboutSkills({ children }) {
  return (
    <div>
      {children}
      <StyledList>
        <HorizontalList title="Language" list={languages} />
        <HorizontalList title="Web Tech" list={webProgramming} />
        <HorizontalList title="App Tech" list={appProgramming} />
        <HorizontalList title="Cooperation" list={cooperation} />
      </StyledList>
    </div>
  )
}

export default AboutSkills
