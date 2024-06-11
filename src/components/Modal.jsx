import { createPortal } from 'react-dom'
import styled from 'styled-components'

const StyledModalLayout = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(34, 34, 34, 0.5);
  z-index: 2;
`

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 70%;
  background-color: var(--white);
`

function Modal({ project }) {
  return createPortal(
    <StyledModalLayout>
      <ModalBox>{project.id + project.title}</ModalBox>
    </StyledModalLayout>,
    document.body,
  )
}

export default Modal
