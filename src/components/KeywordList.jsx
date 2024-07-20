import styled from 'styled-components'

const StyledMain = styled.div`
  margin-bottom: 10px;

  div {
    width: fit-content;
    font-weight: bold;
    background-color: rgba(21, 71, 13, 0.15);
  }
`

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 10px;

  li {
    display: flex;
    align-items: center;
    width: fit-content;
    background-color: var(--active);
    color: var(--white);
    border-radius: 25px;
    font-weight: 300;
    padding: 0.5rem 1.5rem;
  }
`

function KeywordList({ main, children }) {
  return (
    <ul>
      <StyledMain>
        <div>{main}</div>
      </StyledMain>
      <StyledList>{children}</StyledList>
    </ul>
  )
}

export default KeywordList
