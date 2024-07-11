import styled from 'styled-components'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  background-color: var(--active-difference);
  border-radius: 50px;

  @media only screen and (max-width: 640px) {
    width: 4rem;
    height: 4rem;
  }
`

const StyledImage = styled.img`
  width: 30%;
`

function ScrollButton() {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <StyledButton onClick={handleClick}>
      <StyledImage src="icons/scroll.svg" alt="scroll" />
    </StyledButton>
  )
}

export default ScrollButton
