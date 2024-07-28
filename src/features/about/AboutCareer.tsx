import { type ReactNode } from 'react'
import styled from 'styled-components'
import MarketTree from './MarketTree.tsx'
import Ecclgo from './Ecclgo.tsx'

const StyledCareerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: min(10rem, 10vw);
`

interface AboutCareer {
  children: ReactNode
}

function AboutCareer({ children }: AboutCareer) {
  return (
    <div>
      {children}
      <StyledCareerList>
        <MarketTree />
        <Ecclgo />
      </StyledCareerList>
    </div>
  )
}

export default AboutCareer
