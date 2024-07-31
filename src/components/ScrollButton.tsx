import styled from 'styled-components'

const StyledLayout = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 1;
`

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max(2.5vw, 40px);
  height: max(2.5vw, 40px);
  background-color: var(--active);
  border-radius: 50px;
`

const StyledImage = styled.img`
  width: 30%;
`

function ScrollButton() {
  function handleClick() {
    window.scrollTo({ top: 0 })
  }

  return (
    <StyledLayout>
      <StyledButton onClick={handleClick}>
        <StyledImage src="icons/scroll.svg" alt="scroll" />
      </StyledButton>
    </StyledLayout>
  )
}

export default ScrollButton
