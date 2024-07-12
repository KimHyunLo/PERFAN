export const languages = [
  {
    name: 'JavaScript',
    level: '3',
    src: '/icons/javascript.svg',
  },
  {
    name: 'TypeScript',
    level: '3',
    src: '/icons/typescript.svg',
  },
  {
    name: 'Dart',
    level: '2',
    src: '/icons/dart.svg',
  },
  {
    name: 'HTML',
    level: '3',
    src: '/icons/html.svg',
  },
  {
    name: 'CSS',
    level: '3',
    src: '/icons/css.svg',
  },
]

export const webProgramming = [
  {
    name: 'Vue',
    level: '3',
    src: '/icons/vue.svg',
  },
  {
    name: 'VueX',
    level: '3',
    src: '/icons/vue.svg',
  },
  {
    name: 'Nuxt',
    level: '3',
    src: '/icons/nuxt.svg',
  },
  {
    name: 'React',
    level: '2',
    src: '/icons/react.svg',
  },
  {
    name: 'Redux',
    level: '2',
    src: '/icons/redux.svg',
  },
  {
    name: 'React-Query',
    level: '2',
    src: '/icons/react-query.svg',
  },
  {
    name: 'Tailwind',
    level: '2',
    src: '/icons/tailwind.svg',
  },
  {
    name: 'Sass',
    level: '2',
    src: '/icons/sass.svg',
  },
  {
    name: 'Styled-Components',
    level: '3',
    src: '/icons/styled-components.svg',
  },
]

export const appProgramming = [
  {
    name: 'Flutter',
    level: '3',
    src: '/icons/flutter.svg',
  },
  {
    name: 'Riverpod',
    level: '3',
    src: '/icons/flutter.svg',
  },
  {
    name: 'GetX',
    level: '3',
    src: '/icons/flutter.svg',
  },
  {
    name: 'Provider',
    level: '2',
    src: '/icons/flutter.svg',
  },
]

export const cooperation = [
  {
    name: 'Git',
    level: '3',
    src: '/icons/git.svg',
  },
  {
    name: 'Github',
    level: '3',
    src: '/icons/github.svg',
  },
  {
    name: 'Gitlab',
    level: '3',
    src: '/icons/gitlab.svg',
  },
  {
    name: 'Jira',
    level: '3',
    src: '/icons/jira.svg',
  },
  {
    name: 'Confluence',
    level: '3',
    src: '/icons/confluence.svg',
  },
  {
    name: 'Slack',
    level: '3',
    src: '/icons/slack.svg',
  },
  {
    name: 'Notion',
    level: '3',
    src: '/icons/notion.svg',
  },
  {
    name: 'Figma',
    level: '3',
    src: '/icons/figma.svg',
  },
  {
    name: 'Photoshop',
    level: '2',
    src: '/icons/photoshop.svg',
  },
]

export const projects = [
  {
    title: 'Noljang Web',
    period: '2023. 11 ~ 2024. 02',
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
    period: '2023. 04 ~ 2023. 10',
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

export const careerList = [
  {
    title: '전통시장 대표 플랫폼 서비스 앱 운영 스타트업',
    companyName: '마켓트리',
    companyLink: 'https://market-tree.com/',
    period: ['2023. 03', '2024. 04'],
    introduce:
      '‘놀장’ 앱개발 및 유지보수, 앱 관리자 사이트 유지보수, 회사 소개 홈페이지 개발 및 유지보수',
    charge: '앱&웹 개발/운영/배포',
    techList: ['Javascript, Dart', 'Vue, Flutter', 'VueX, Nuxt, Riverpod, Sass'],
    chargeList: [
      '웹뷰를 쓰는 플러터 앱 개발',
      '전체 서비스 유지 보수',
      'B2C 사이트 개발',
      '관리자 사이트 유지 보수',
      '웹 표준 준수, 검색 엔진 최적화(SEO) 관리',
      '사용성 최적화',
    ],
  },
  {
    title: '소형이사 주선 플랫폼 서비스 앱 운영 스타트업',
    companyName: '이끌고',
    companyLink: 'https://www.ecclgo.com/',
    period: ['2022. 11', '2023. 03'],
    introduce: '초창기 멤버로 입사하여 ‘이끌래요’ 앱의 기능과 회사 홈페이지 개발 및 유지보수',
    charge: '앱&웹 개발',
    techList: ['Javascript, Dart', 'Flutter', 'React, Redux, GetX'],
    chargeList: [
      'MVVM 패턴을 기반으로 Flutter 프로젝트 아키텍처 설계',
      '관리자 사이트 유지 보수 관리',
      '이사 견적내용 조회 기능 개발',
      '개발 추진율 확인용으로 프로세스 가이드 문서 작성',
    ],
  },
]
