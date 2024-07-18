import styled from 'styled-components'

const StyledLayout = styled.ul``

const StyledMain = styled.div`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 10px;

  div {
    width: fit-content;
    font-weight: bold;
    background-color: rgba(21, 71, 13, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    width: 6px;
    height: 6px;
    background-color: var(--active);
    border-radius: 25px;
  }
`

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-left: 3rem;

  li {
    display: flex;
    align-items: center;
    height: 30px;
    width: fit-content;
    background-color: var(--active);
    color: var(--white);
    border-radius: 25px;
    font-weight: 300;
    padding: 0 1rem;
  }
`

function KeywordList({ main, children }) {
  return (
    <StyledLayout>
      <StyledMain>
        <div>{main}</div>
      </StyledMain>
      <StyledList>{children}</StyledList>
    </StyledLayout>
  )
}

export default KeywordList
