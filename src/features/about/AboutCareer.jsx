import Markettree from './Markettree'
import Ecclgo from './Ecclgo'
import styled from 'styled-components'

const StyledCareerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: min(10rem, 10vw);
`

function AboutCareer({ children }) {
  return (
    <div>
      {children}
      <StyledCareerList>
        <Markettree />
        <Ecclgo />
      </StyledCareerList>
    </div>
  )
}

export default AboutCareer
