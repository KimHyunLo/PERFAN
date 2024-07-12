import { styled } from 'styled-components'
import { CareerItem } from '../../components/Components'
import { careerList } from '../../data/contants'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7rem;

  @media only screen and (max-width: 1280px) {
    gap: 3.5rem;
  }
`

function AboutExperience({ children }) {
  return (
    <div>
      {children}
      <StyledList>
        {careerList.map((career) => (
          <CareerItem key={career.companyName} career={career} />
        ))}
      </StyledList>
    </div>
  )
}

export default AboutExperience
