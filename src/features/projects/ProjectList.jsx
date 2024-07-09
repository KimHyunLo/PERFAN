import { useState } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { useToggleBodyScroll } from '../../hooks/useToggleBodyScroll'
import { Modal } from '../../components/Components'
import { ProjectItem, ProjectModal } from '../Features'

const StyledSwiper = styled(Swiper)`
  padding: 3rem 3rem 5rem !important;
`

const projects = [
  {
    title: 'Noljang Web',
    period: '2023. 11 ~ 2024. 02 (4개월)',
    role: 'Front-End',
    introduction: '"놀장" 어플 홍보 목적으로 웹뷰에서 웹버전으로 리뉴얼 프로젝트입니다.',
    links: ['https://www.noljang.co.kr/#/'],
    languages: [{ name: 'Javascript', isMostUsed: false }],
    libraries: [{ name: 'VueX', isMostUsed: false }],
    frameworks: [{ name: 'Vue', isMostUsed: true }],
    chargeList: [
      {
        mainCharge: '검색 엔진 최적화(SEO)',
        subCharge: [
          '기존에 없었던 SEO 관리를 추가하면서 여러 문제점들을 접함\nVue에서 SEO 최적화에 악영향을 주는 Hash 모드 라우팅을 바꿀 수 없어 URL 크롤링이 불리함\n index 페이지를 제외한 다른 페이지를 색인할 수 없어 검색엔진의 크롤링이 낮아짐',
          '다음의 방법으로 네이버, 구글 등의 사이트에서 상단에 노출되도록 개선\nrobots.txt 파일을 추가하여 검색엔진의 크롤링률을 상승\nsitemap.xml 파일을 추가하여 index 페이지가 크롤링 되고 색인될 수 있도록 개선\n매일 키워드를 검색하고, 사이트의 CTR를 꾸준히 높임',
        ],
      },
      {
        mainCharge: '프로젝트 리팩토링',
        subCharge: [
          '기존에 에뮬레이터로만 디버깅할 수 있었던 환경을 웹으로도 디버깅이 될 수 있도록 환경을 조성',
          '작업한 내용을 가이드 문서로 작성하여 팀원들에게 공유하는 등, 팀 템플릿 코드에 기여',
        ],
      },
      {
        mainCharge: '컴포넌트 유지보수',
        subCharge: [
          '핸드폰 해상도에 맞춰진 컴포넌트들을 웹 버전에 맞도록 반응형으로 수정하여 컴포넌트 활용도를 높임',
          '웹 접근성에 맞지 않은 태그를 수정하여 장애를 가진 고객들의 접근성을 높임',
        ],
      },
    ],
  },
  {
    title: 'Noljang App',
    period: '2023. 04 ~ 2023. 10 (7개월)',
    role: 'Front-End',
    introduction: 'E-커머스 플랫폼 네이티브 앱을 플러터 앱으로 리뉴얼한 프로젝트입니다.',
    links: [
      'https://play.google.com/store/apps/details?id=kr.wiju.noljang',
      'https://apps.apple.com/kr/app/%EB%86%80%EC%9E%A5/id1169889915',
    ],
    languages: [
      { name: 'Javascript', isMostUsed: false },
      { name: 'Dart', isMostUsed: false },
    ],
    libraries: [
      { name: 'Riverpod', isMostUsed: false },
      { name: 'VueX', isMostUsed: false },
    ],
    frameworks: [
      { name: 'Vue', isMostUsed: true },
      { name: 'Flutter', isMostUsed: true },
    ],
    chargeList: [
      {
        mainCharge: 'API 호출 프로세스 간편화',
        subCharge: [
          '기존에 불필요하게 분리되어 있던 모델 파일들과 로직 파일들을 묶어서 프로세스 레이어를 5개 → 2개로 축소',
          '팀원들의 프로젝트 접근성을 높이고, 팀 템플릿 코드에 기여',
        ],
      },
      {
        mainCharge: '페이지 이동 속도 개선',
        subCharge: [
          '불필요한 데이터 로딩을 줄이고, 상태관리를 통한 데이터 관리로 페이지 최대 로딩 속도 2초 → 0.5초로 단축',
        ],
      },
      {
        mainCharge: '프로젝트 리팩토링',
        subCharge: [
          '중복 코드를 여러 개의 함수로 모듈화하여 코드 재사용성을 높임',
          'OS에 따라 분리된 로직을 하나로 합쳐 코드 가독성을 개선',
          '불필요한 주석처리 및 콘솔 로그를 삭제해 가시성을 개선',
        ],
      },
      {
        mainCharge: '서비스 인지도 개선',
        subCharge: [
          '카카오톡 메시지 공유 기능, 카카오채널 친구 추가 기능 등을 추가해 앱 마케팅에 활용',
          'iOS, AOS 딥링크를 개발하여 신규 사용자의 유입을 도모',
        ],
      },
      {
        mainCharge: '크로스 브라우징',
        subCharge: [
          '일부 디바이스에서 잘못 표시되는 컴포넌트들을 개선하고, UI 라이브러리 대신 자체 컴포넌트를 쓰는 식의 방법으로 크로스 브라우징 이슈를 해결',
        ],
      },
    ],
  },
]

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
