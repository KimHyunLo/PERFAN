import { useState } from 'react'
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
    period: '2023. 03 ~ 2023. 11',
    introduction: '네이티브 언어로 개발된 앱을 플러터로 리뉴얼하는 개발을 진행. 신규 앱은 서비스 만족도를 높이고, 유지 보수성 개선을 목표.',
    techStack: ['Javascript', 'Vue', 'VueX', 'Nuxt', 'Dart', 'Flutter', 'Riverpod'],
    chargeList: [
      {
        mainCharge: '웹뷰를 쓰는 플러터 앱 개발',
        subList: [
          '네이티브 앱 리뉴얼 개발',
          'Firebase messaging API를 사용한 푸시알림 기능 개발',
          'iOS, Android 딥링크 제작 및 통합 딥링크 페이지 개발',
          '카카오 공유 기능 개발',
          '신규 결제 타입으로 지역사랑상품권 결제 연동',
        ],
      },
      {
        mainCharge: '전체 서비스 유지 보수',
        subList: ['B2C 및 B2B 앱에서 나오는 운영 이슈를 관리', 'OS 또는 브라우저에 따라 출력이 다른 UI를 수정(크로스 브라우징)', '폰트, 이미지, 색깔 등 사용자 편의성을 위한 UI 개발'],
      },
      {
        mainCharge: 'B2C 사이트 개발',
        subList: ['웹뷰 페이지를 웹 버전으로 리뉴얼 개발', '웹 버전과 앱 버전간 반응형 웹 개발'],
      },
      {
        mainCharge: '관리자 사이트 유지 보수',
        subList: ['배송 프로세스 관리기능 개발', '내부 컴포넌트 개발과 유지 보수 관리'],
      },
      {
        mainCharge: '웹 표준 준수, 검색 엔진 최적화(SEO) 관리',
        subList: ['네이버, 구글에서 사이트 평균 CTR을 71%까지 올림'],
      },
      {
        mainCharge: '사용성 최적화',
        subList: ['배송 프로세스 관리기능 개발', '내부 컴포넌트 개발과 유지 보수 관리'],
      },
    ],
  },
  {
    id: 1,
    title: 'Noljang App',
    period: '2023. 03 ~ 2023. 11',
    introduction: '네이티브 언어로 개발된 앱을 플러터로 리뉴얼하는 개발을 진행. 신규 앱은 서비스 만족도를 높이고, 유지 보수성 개선을 목표.',
    techStack: ['Javascript', 'Vue', 'VueX', 'Nuxt', 'Dart', 'Flutter', 'Riverpod'],
    chargeList: [
      {
        mainCharge: '웹뷰를 쓰는 플러터 앱 개발',
        subList: [
          '네이티브 앱 리뉴얼 개발',
          'Firebase messaging API를 사용한 푸시알림 기능 개발',
          'iOS, Android 딥링크 제작 및 통합 딥링크 페이지 개발',
          '카카오 공유 기능 개발',
          '신규 결제 타입으로 지역사랑상품권 결제 연동',
        ],
      },
      {
        mainCharge: '전체 서비스 유지 보수',
        subList: ['B2C 및 B2B 앱에서 나오는 운영 이슈를 관리', 'OS 또는 브라우저에 따라 출력이 다른 UI를 수정(크로스 브라우징)', '폰트, 이미지, 색깔 등 사용자 편의성을 위한 UI 개발'],
      },
      {
        mainCharge: 'B2C 사이트 개발',
        subList: ['웹뷰 페이지를 웹 버전으로 리뉴얼 개발', '웹 버전과 앱 버전간 반응형 웹 개발'],
      },
      {
        mainCharge: '관리자 사이트 유지 보수',
        subList: ['배송 프로세스 관리기능 개발', '내부 컴포넌트 개발과 유지 보수 관리'],
      },
      {
        mainCharge: '웹 표준 준수, 검색 엔진 최적화(SEO) 관리',
        subList: ['네이버, 구글에서 사이트 평균 CTR을 71%까지 올림'],
      },
      {
        mainCharge: '사용성 최적화',
        subList: ['배송 프로세스 관리기능 개발', '내부 컴포넌트 개발과 유지 보수 관리'],
      },
    ],
  },
  {
    id: 2,
    title: 'Noljang Web',
    period: '2023. 03 ~ 2023. 11',
    introduction: '네이티브 언어로 개발된 앱을 플러터로 리뉴얼하는 개발을 진행. 신규 앱은 서비스 만족도를 높이고, 유지 보수성 개선을 목표.',
    techStack: ['Javascript', 'Vue', 'VueX', 'Nuxt', 'Dart', 'Flutter', 'Riverpod'],
    chargeList: [
      {
        mainCharge: '웹뷰를 쓰는 플러터 앱 개발',
        subList: [
          '네이티브 앱 리뉴얼 개발',
          'Firebase messaging API를 사용한 푸시알림 기능 개발',
          'iOS, Android 딥링크 제작 및 통합 딥링크 페이지 개발',
          '카카오 공유 기능 개발',
          '신규 결제 타입으로 지역사랑상품권 결제 연동',
        ],
      },
      {
        mainCharge: '전체 서비스 유지 보수',
        subList: ['B2C 및 B2B 앱에서 나오는 운영 이슈를 관리', 'OS 또는 브라우저에 따라 출력이 다른 UI를 수정(크로스 브라우징)', '폰트, 이미지, 색깔 등 사용자 편의성을 위한 UI 개발'],
      },
      {
        mainCharge: 'B2C 사이트 개발',
        subList: ['웹뷰 페이지를 웹 버전으로 리뉴얼 개발', '웹 버전과 앱 버전간 반응형 웹 개발'],
      },
      {
        mainCharge: '관리자 사이트 유지 보수',
        subList: ['배송 프로세스 관리기능 개발', '내부 컴포넌트 개발과 유지 보수 관리'],
      },
      {
        mainCharge: '웹 표준 준수, 검색 엔진 최적화(SEO) 관리',
        subList: ['네이버, 구글에서 사이트 평균 CTR을 71%까지 올림'],
      },
      {
        mainCharge: '사용성 최적화',
        subList: ['배송 프로세스 관리기능 개발', '내부 컴포넌트 개발과 유지 보수 관리'],
      },
    ],
  },
  {
    id: 3,
    title: 'Noljang App',
    period: '23/03~23/11',
    introduction: '네이티브 언어로 개발된 앱을 플러터로 리뉴얼하는 개발을 진행. 신규 앱은 서비스 만족도를 높이고, 유지 보수성 개선을 목표.',
    techStack: ['Javascript', 'Vue', 'VueX', 'Nuxt', 'Dart', 'Flutter', 'Riverpod'],
    chargeList: [
      {
        mainCharge: '웹뷰를 쓰는 플러터 앱 개발',
        subList: [
          '네이티브 앱 리뉴얼 개발',
          'Firebase messaging API를 사용한 푸시알림 기능 개발',
          'iOS, Android 딥링크 제작 및 통합 딥링크 페이지 개발',
          '카카오 공유 기능 개발',
          '신규 결제 타입으로 지역사랑상품권 결제 연동',
        ],
      },
      {
        mainCharge: '전체 서비스 유지 보수',
        subList: ['B2C 및 B2B 앱에서 나오는 운영 이슈를 관리', 'OS 또는 브라우저에 따라 출력이 다른 UI를 수정(크로스 브라우징)', '폰트, 이미지, 색깔 등 사용자 편의성을 위한 UI 개발'],
      },
      {
        mainCharge: 'B2C 사이트 개발',
        subList: ['웹뷰 페이지를 웹 버전으로 리뉴얼 개발', '웹 버전과 앱 버전간 반응형 웹 개발'],
      },
      {
        mainCharge: '관리자 사이트 유지 보수',
        subList: ['배송 프로세스 관리기능 개발', '내부 컴포넌트 개발과 유지 보수 관리'],
      },
      {
        mainCharge: '웹 표준 준수, 검색 엔진 최적화(SEO) 관리',
        subList: ['네이버, 구글에서 사이트 평균 CTR을 71%까지 올림'],
      },
      {
        mainCharge: '사용성 최적화',
        subList: ['배송 프로세스 관리기능 개발', '내부 컴포넌트 개발과 유지 보수 관리'],
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

  function handleClick(index) {
    setOpenIndex(openIndex === index ? null : index)
    setIsModalOpen(openIndex !== index)
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
      {projectList.map((project, index) => (
        <SwiperSlide key={project.id}>
          <ProjectItem project={project} theme={index % 2 === 0 ? 'green' : 'white'} onMoreClick={() => handleClick(index)} />
        </SwiperSlide>
      ))}
      {isModalOpen && <Modal project={projectList[openIndex]} onCloseClick={() => handleClick(openIndex)} />}
    </StyledSwiper>
  )
}

export default ProjectList
