import React, { useState } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { useToggleBodyScroll } from '../../hooks/useToggleBodyScroll'
import { Loader, Modal } from '../../components/Components'
import { ProjectItem, ProjectModal } from '../Features'
import { ErrorPage } from '../../routes/Routes'

const StyledSwiper = styled(Swiper)`
  padding: 3rem 3rem 5rem !important;
`

function ProjectList() {
  const data = useLoaderData()
  const [isModalOpen, setIsModalOpen] = useToggleBodyScroll()
  const [openIndex, setOpenIndex] = useState(null)

  function handleClick(index) {
    setOpenIndex(openIndex === index ? null : index)
    setIsModalOpen(openIndex !== index)
  }

  return (
    <React.Suspense fallback={<Loader />}>
      <Await resolve={data.projects} errorElement={<ErrorPage />}>
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
          {data.projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <ProjectItem
                project={project}
                theme={index % 2 === 0 ? 'green' : 'white'}
                onMoreClick={() => handleClick(index)}
              />
            </SwiperSlide>
          ))}
          {isModalOpen && (
            <Modal onCloseClick={() => handleClick(openIndex)}>
              <ProjectModal
                project={data.projects[openIndex]}
                onCloseClick={() => handleClick(openIndex)}
              />
            </Modal>
          )}
        </StyledSwiper>
      </Await>
    </React.Suspense>
  )
}

export default ProjectList
