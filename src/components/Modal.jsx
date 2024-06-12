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
  height: 80%;
  background-color: var(--white);
  overflow: hidden;
`

const HeaderBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15vw;
  background-image: url(modalBackground.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 5vw;
  font-family: 'Bodoni Moda', sans-serif;
  color: var(--white);

  .close-button {
    position: absolute;
    bottom: -10%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    background-color: var(--active-difference);
    border-radius: 25px;
    z-index: 1;

    img {
      width: 50%;
      mix-blend-mode: difference;
    }
  }
`

const ContentBox = styled.div`
  height: calc(100% - 15vw);
  padding: 3vw 7vw;
  overflow: auto;

  .introduction {
    font-size: 1.8rem;
    margin-bottom: 1.5vw;
  }
`

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  row-gap: 1.5vw;
  font-size: 1.8rem;

  .title-item {
    color: var(--active);
  }
`

const TechList = styled.ul`
  display: flex;

  li:not(li:last-child) {
    border-right: 1px solid var(--gray);
    padding-right: 0.7rem;
    margin-right: 0.7rem;
  }
`

const ChargeList = styled.ul`
  line-height: 1.5;

  li {
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '';
      position: absolute;
      top: 0.9rem;
      left: 0;
      width: 5px;
      height: 5px;
      background-color: var(--active);
      border-radius: 25px;
    }
  }
`

const ChargeItem = styled.li`
  margin-bottom: 1.5vw;

  ul {
    padding-left: 1.5rem;
  }
`

function Modal({ project, onCloseClick }) {
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
      <ModalBox ref={modalRef}>
        <HeaderBox>
          <div>{project.title}</div>
          <button className="close-button" onClick={onCloseClick}>
            <img src="close.svg" alt="close" />
          </button>
        </HeaderBox>
        <ContentBox>
          <p className="introduction">{project.introduction}</p>
          <GridBox>
            <div className="title-item">개발 기간</div>
            <div>{project.period}</div>
            <div className="title-item">기술 스텍</div>
            <TechList>
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </TechList>
            <div className="title-item">담당 업무</div>
            <ChargeList>
              {project.chargeList.map((charge) => (
                <ChargeItem key={charge.mainCharge}>
                  {charge.mainCharge}
                  <ul>
                    {charge.subList.map((subCharge) => (
                      <li key={subCharge}>{subCharge}</li>
                    ))}
                  </ul>
                </ChargeItem>
              ))}
            </ChargeList>
          </GridBox>
        </ContentBox>
      </ModalBox>
    </StyledModalLayout>,
    document.body,
  )
}

export default Modal
