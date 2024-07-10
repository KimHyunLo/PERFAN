import styled from 'styled-components'

const StyledLayout = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 35rem 1fr;

  @media only screen and (max-width: 1280px) {
    grid-template-columns: none;
    row-gap: 3rem;
  }
`

const StyledTitle = styled.div`
  font-family: 'Bodoni Moda', sans-serif;
  font-size: 5rem;
  line-height: 1;

  @media only screen and (max-width: 1280px) {
    font-size: 6vw;
  }
`

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2.5rem;

  @media only screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
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
`

const StyledImage = styled.img`
  max-width: 4rem;
  max-height: 4.5rem;
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
