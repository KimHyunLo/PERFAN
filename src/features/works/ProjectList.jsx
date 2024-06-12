import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import ProjectItem from './ProjectItem'
import Modal from '../../components/Modal'
import { useToggleBodyScroll } from '../../hooks/useToggleBodyScroll'

const projectList = [
  {
    id: 0,
    title: 'Noljang Web',
    period: '23/03~23/11',
    taskList: [
      {
        id: 0,
        task: 'UX&UI 개선',
      },
      {
        id: 1,
        task: 'API 호출 프로세스 간편화',
      },
      {
        id: 2,
        task: '서비스 인지도 개선',
      },
      {
        id: 3,
        task: '프로젝트 문서화',
      },
    ],
  },
  {
    id: 1,
    title: 'Noljang App',
    period: '23/03~23/11',
    taskList: [
      {
        id: 0,
        task: 'UX&UI 개선',
      },
      {
        id: 1,
        task: 'API 호출 프로세스 간편화',
      },
      {
        id: 2,
        task: '서비스 인지도 개선',
      },
      {
        id: 3,
        task: '프로젝트 문서화',
      },
    ],
  },
  {
    id: 2,
    title: 'Noljang Web',
    period: '23/03~23/11',
    taskList: [
      {
        id: 0,
        task: 'UX&UI 개선',
      },
      {
        id: 1,
        task: 'API 호출 프로세스 간편화',
      },
      {
        id: 2,
        task: '서비스 인지도 개선',
      },
      {
        id: 3,
        task: '프로젝트 문서화',
      },
    ],
  },
  {
    id: 3,
    title: 'Noljang App',
    period: '23/03~23/11',
    taskList: [
      {
        id: 0,
        task: 'UX&UI 개선',
      },
      {
        id: 1,
        task: 'API 호출 프로세스 간편화',
      },
      {
        id: 2,
        task: '서비스 인지도 개선',
      },
      {
        id: 3,
        task: '프로젝트 문서화',
      },
    ],
  },
]

const StyledSwiper = styled(Swiper)`
  padding: 5rem 3rem;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 3rem 5rem;
  }
`

function ProjectList() {
  const [isModalOpen, setIsModalOpen] = useToggleBodyScroll()
  const [openIndex, setOpenIndex] = useState(null)
  const modalRef = useRef(null)

  function handleClick(index) {
    setOpenIndex(openIndex === index ? null : index)
    setIsModalOpen(openIndex !== index)
  }

  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsModalOpen(false)
        setOpenIndex(null)
      }
    }

    window.addEventListener('mousedown', handleClick, true)
    return () => window.removeEventListener('mousedown', handleClick, true)
  }, [modalRef, setIsModalOpen])

  return (
    <StyledSwiper
      slidesPerView={1.1}
      breakpoints={{
        1025: {
          slidesPerView: 3.3,
        },
        641: {
          slidesPerView: 2.3,
        },
      }}
    >
      {projectList.map((project, index) => (
        <SwiperSlide key={project.id}>
          <ProjectItem project={project} theme={index % 2 === 0 ? 'green' : 'white'} onMoreClick={() => handleClick(index)} />
        </SwiperSlide>
      ))}
      {isModalOpen && <Modal project={projectList[openIndex]} modalRef={modalRef} />}
    </StyledSwiper>
  )
}

export default ProjectList
