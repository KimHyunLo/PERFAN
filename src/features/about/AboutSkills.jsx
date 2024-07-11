import styled from 'styled-components'
import { HorizontalList } from '../../components/Components'
import { appProgramming, cooperation, languages, webProgramming } from '../../data/contants'

const StyledLayout = styled.div`
  width: 85%;
  margin: 20rem auto 0;

  @media only screen and (max-width: 1280px) {
    margin: 15vw auto 0;
  }
`

const StyledTitle = styled.h2`
  font-size: 6vw;
  font-family: 'Bodoni Moda', sans-serif;
  text-align: center;
  margin-bottom: 5vw;

  @media only screen and (max-width: 1280px) {
    font-size: 10vw;
  }
`

const StyledListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;

  @media only screen and (max-width: 1280px) {
    gap: 5rem;
  }
`

function AboutSkills() {
  return (
    <StyledLayout>
      <StyledTitle>My Skills</StyledTitle>
      <StyledListBox>
        <HorizontalList title="Language" list={languages} />
        <HorizontalList title="Web Tech" list={webProgramming} />
        <HorizontalList title="App Tech" list={appProgramming} />
        <HorizontalList title="Cooperation" list={cooperation} />
      </StyledListBox>
    </StyledLayout>
  )
}

export default AboutSkills
