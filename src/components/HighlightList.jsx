import styled from 'styled-components'

const StyledMain = styled.div`
  background-color: rgba(21, 71, 13, 0.15);
  width: fit-content;
  font-weight: bold;
`

const StyledSubList = styled.ul`
  li {
    position: relative;
    word-break: keep-all;
    white-space: pre-wrap;
    line-height: 1.3;
    margin-top: 10px;
    margin-left: 25px;

    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: -15px;
      width: 6px;
      height: 6px;
      background-color: var(--active);
      border-radius: 25px;
    }
  }
`

function HighlightList({ main, children }) {
  return (
    <ul>
      <li>
        <StyledMain>{main}</StyledMain>
        <StyledSubList>{children}</StyledSubList>
      </li>
    </ul>
  )
}

export default HighlightList
