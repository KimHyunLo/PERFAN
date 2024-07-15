import styled from 'styled-components'

const StyledList = styled.ul`
  line-height: 1.5;

  li {
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '';
      position: absolute;
      top: 10px;
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

  .main {
    background-color: rgba(21, 71, 13, 0.15);
    font-weight: bold;
  }

  @media only screen and (max-width: 1280px) {
    font-size: max(1.8vw, 14px);
  }
`

const StyledSubList = styled.ul`
  li {
    word-break: keep-all;
    white-space: pre-wrap;

    &::before {
      background-color: transparent !important;
      border: 1px solid var(--active);
    }

    &:not(&:last-child) {
      margin-bottom: 1rem;
    }

    em {
      mix-blend-mode: difference;
      color: var(--active-difference);
      font-weight: 500;
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

function List({ main, children }) {
  return (
    <StyledList>
      <StyledItem key={main}>
        <span className="main">{main}</span>
        <StyledSubList>{children}</StyledSubList>
      </StyledItem>
    </StyledList>
  )
}

export default List
