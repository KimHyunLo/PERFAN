import styled from 'styled-components'

const StyledList = styled.ul`
  li {
    position: relative;
    padding-left: 1.5rem;

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
  }
`

const StyledItem = styled.li`
  font-size: 1.8rem;

  ul,
  ol {
    padding-left: 1.5rem;
  }

  @media only screen and (max-width: 1280px) {
    font-size: max(1.8vw, 14px);
  }
`

const StyledMain = styled.div`
  background-color: rgba(21, 71, 13, 0.15);
  width: fit-content;
  font-weight: bold;
`

const StyledSubList = styled.ul`
  li {
    word-break: keep-all;
    white-space: pre-wrap;
    line-height: 1.3;
    margin-top: 10px;

    &::before {
      background-color: transparent !important;
      border: 1px solid var(--active);
    }

    em {
      color: var(--highlight);
      font-weight: 600;
    }
  }

  ol li {
    counter-increment: list-number;
    padding-left: 2rem !important;

    &::before {
      content: counter(list-number) '.';
      top: 0;
      width: 0;
      height: 0;
      border: none;
    }
  }
`

function HighlightList({ main, children }) {
  return (
    <StyledList>
      <StyledItem>
        <StyledMain>{main}</StyledMain>
        <StyledSubList>{children}</StyledSubList>
      </StyledItem>
    </StyledList>
  )
}

export default HighlightList
