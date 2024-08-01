import styled from 'styled-components'
import { useCustomContext } from '../hooks/useCustomContext '
import { SectionsContext } from '../store/section-context'

const StyledNav = styled.nav`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  mix-blend-mode: exclusion;
  z-index: 1;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`

const StyledListItem = styled.li`
  width: 80px;
`

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
  margin: 0 auto;

  .number {
    color: var(--gray);
    margin-bottom: 15px;
    align-self: start;
  }

  .path {
    color: var(--white);
  }

  &.text {
    cursor: default;
  }
`

export default function Nav() {
  const { sections, onNavClick } = useCustomContext(SectionsContext)

  function handleClick(index: number) {
    onNavClick(sections[index].ref.current)
  }

  return (
    <StyledNav>
      <StyledList>
        {sections.map((section, index) => (
          <StyledListItem key={section.nav}>
            <StyledButton onClick={() => handleClick(index)}>
              <div className="number small-font">0{index + 1}</div>
              <div className="path">{section.nav}</div>
            </StyledButton>
          </StyledListItem>
        ))}
        <StyledListItem>
          <StyledButton className="text">
            <div className="path">ⓒ 2024.</div>
          </StyledButton>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  )
}
