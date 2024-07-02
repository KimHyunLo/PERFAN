import { useEffect, useRef } from 'react'
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
  width: 60%;
  height: 85%;
  background-color: var(--white);

  @media only screen and (max-width: 640px) {
    width: 90%;
  }
`

function Modal({ children, onCloseClick }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleModalClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onCloseClick()
      }
    }

    window.addEventListener('mousedown', handleModalClick, true)
    return () => window.removeEventListener('mousedown', handleModalClick, true)
  }, [modalRef, onCloseClick])

  return createPortal(
    <StyledModalLayout>
      <ModalBox ref={modalRef}>{children}</ModalBox>
    </StyledModalLayout>,
    document.body,
  )
}

export default Modal
