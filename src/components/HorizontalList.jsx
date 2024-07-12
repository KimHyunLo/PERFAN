import styled from 'styled-components'

const StyledLayout = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 35rem 1fr;

  @media only screen and (max-width: 1280px) {
    grid-template-columns: none;
    row-gap: 2rem;
  }
`

const StyledTitle = styled.div`
  font-family: 'Bodoni Moda', sans-serif;
  font-size: 2.5vw;
  line-height: 1;

  @media only screen and (max-width: 1280px) {
    font-size: max(3.5vw, 18px);
  }
`

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2.5rem;

  @media only screen and (max-width: 1280px) {
    row-gap: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem 2rem;
  }
`

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;

  em {
    color: var(--active-difference);
  }

  @media only screen and (max-width: 1280px) {
    font-size: max(1.8vw, 14px);
  }
`

const StyledImage = styled.img`
  max-width: 4rem;
  max-height: 4.5rem;

  @media only screen and (max-width: 1280px) {
    max-width: 3rem;
    max-height: 3.5rem;
  }
`

function HorizontalList({ title, list }) {
  return (
    <StyledLayout>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {list.map((item) => (
          <StyledItem key={item.name}>
            <StyledImage src={item.src} alt={item.name} />
            <div>
              {item.name} <em>Lv.{item.level}</em>
            </div>
          </StyledItem>
        ))}
      </StyledList>
    </StyledLayout>
  )
}

export default HorizontalList
