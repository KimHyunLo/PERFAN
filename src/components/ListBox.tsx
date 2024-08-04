import { createContext, type ReactNode } from 'react'
import styled from 'styled-components'

const StyledListBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 30% 1fr;
  column-gap: 12rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: none;
    column-gap: 0;
    row-gap: 2rem;
  }
`

const StyledLeftSide = styled.aside`
  position: sticky;
  top: 10vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: fit-content;

  @media only screen and (max-width: 1024px) {
    position: static;
  }
`

const StyledRightSide = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const StyledTitle = styled.div`
  background-color: var(--active-blur);
  width: fit-content;
  font-weight: bold;
  font-size: max(16px, 1vw);

  @media only screen and (max-width: 1024px) {
    font-size: clamp(16px, 2.2vw, 18px);
  }
`

const StyledDotList = styled.ul`
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

const StyledKeywordList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;

  li {
    display: flex;
    align-items: center;
    width: fit-content;
    background-color: var(--active);
    color: var(--white);
    border-radius: 25px;
    font-weight: 300;
    line-height: 1;
    padding: 8px 15px;
  }
`

const ListBoxContext = createContext(null)

interface ListBoxProps {
  children: ReactNode
}

function ListBox({ children }: ListBoxProps) {
  return (
    <ListBoxContext.Provider value={null}>
      <StyledListBox>{children}</StyledListBox>
    </ListBoxContext.Provider>
  )
}

interface LeftSideProps {
  children: ReactNode
}

function LeftSide({ children }: LeftSideProps) {
  return <StyledLeftSide>{children}</StyledLeftSide>
}

interface RightSideProps {
  children: ReactNode
}

function RightSide({ children }: RightSideProps) {
  return <StyledRightSide>{children}</StyledRightSide>
}

interface DotListProps {
  main: string
  children: ReactNode
}

function DotList({ main, children }: DotListProps) {
  return (
    <div>
      <StyledTitle>{main}</StyledTitle>
      <StyledDotList>{children}</StyledDotList>
    </div>
  )
}

interface KeywordListProps {
  main: string
  children: ReactNode
}

function KeywordList({ main, children }: KeywordListProps) {
  return (
    <div>
      <StyledTitle>{main}</StyledTitle>
      <StyledKeywordList>{children}</StyledKeywordList>
    </div>
  )
}

ListBox.LeftSide = LeftSide
ListBox.RightSide = RightSide
ListBox.DotList = DotList
ListBox.KeywordList = KeywordList

export default ListBox
