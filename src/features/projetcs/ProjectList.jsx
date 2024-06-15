import { useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import ProjectItem from './ProjectItem'
import Modal from '../../components/Modal'
import { useToggleBodyScroll } from '../../hooks/useToggleBodyScroll'
import { useProjects } from './useProjects'

const StyledSwiper = styled(Swiper)`
  padding: 3rem 3rem 5rem;
`

function ProjectList() {
  const { isLoading, projects } = useProjects()
  const [isModalOpen, setIsModalOpen] = useToggleBodyScroll()
  const [openIndex, setOpenIndex] = useState(null)

  function handleClick(index) {
    setOpenIndex(openIndex === index ? null : index)
    setIsModalOpen(openIndex !== index)
  }

  if (isLoading) return null

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
      {projects.map((project, index) => (
        <SwiperSlide key={project.id}>
          <ProjectItem
            project={project}
            theme={index % 2 === 0 ? 'green' : 'white'}
            onMoreClick={() => handleClick(index)}
          />
        </SwiperSlide>
      ))}
      {isModalOpen && (
        <Modal project={projects[openIndex]} onCloseClick={() => handleClick(openIndex)} />
      )}
    </StyledSwiper>
  )
}

export default ProjectList
