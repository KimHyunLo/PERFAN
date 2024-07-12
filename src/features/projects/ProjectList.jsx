import { useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { useToggleBodyScroll } from '../../hooks/useToggleBodyScroll'
import { Modal } from '../../components/Components'
import { ProjectItem, ProjectModal } from '../Features'
import { projects } from '../../data/contants'

const StyledSwiper = styled(Swiper)`
  padding: 3rem 3rem 5rem !important;
`

function ProjectList() {
  const [openIndex, setOpenIndex] = useState(null)
  const { setIsScrollable } = useToggleBodyScroll()

  function handleClick(index) {
    setOpenIndex((curr) => (curr === index ? null : index))
    setIsScrollable((is) => !is)
  }

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
        <SwiperSlide key={project.title}>
          <ProjectItem
            project={project}
            theme={index % 2 === 0 ? 'green' : 'white'}
            onMoreClick={() => handleClick(index)}
          />
        </SwiperSlide>
      ))}
      {openIndex !== null && (
        <Modal onCloseClick={() => handleClick(openIndex)}>
          <ProjectModal project={projects[openIndex]} onCloseClick={() => handleClick(openIndex)} />
        </Modal>
      )}
    </StyledSwiper>
  )
}

export default ProjectList
