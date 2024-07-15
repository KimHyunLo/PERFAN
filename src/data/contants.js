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
    member: '프론트엔드 1명, 백엔드 1명, 기획자 1명 (총 3명)',
    role: '프론트엔드',
    introduction: '"놀장" 어플 홍보 목적으로 웹뷰에서 웹버전으로 리뉴얼한 프로젝트입니다.',
    links: ['https://www.noljang.co.kr/#/'],
    languages: [{ name: 'Javascript', isMostUsed: false }],
    libraries: [{ name: 'VueX', isMostUsed: false }],
    frameworks: [{ name: 'Vue', isMostUsed: true }],
    chargeList: ['검색 엔진 최적화(SEO)', '프로젝트 리팩토링', '컴포넌트 유지보수'],
  },
  {
    title: 'Noljang App',
    period: '2023. 04 ~ 2023. 10',
    member: '프론트엔드 2명, 앱 개발자 1명, 백엔드 2명, 기획자 1명 (총 6명)',
    role: '프론트엔드 및 앱 개발 동시 참여',
    introduction: 'E-커머스 플랫폼 네이티브 앱을 플러터 앱으로 리메이크한 프로젝트입니다.',
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
      '서비스 안정화',
      '신규 결제 수단 기능 추가',
      'API 호출 프로세스 간편화',
      '서비스 인지도 개선',
      '프로젝트 리팩토링',
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
      '‘놀장’ 앱 개발 및 유지보수, 앱 Admin 사이트 유지보수, 회사 소개 홈페이지 개발 및 유지보수',
    charge: '앱&웹 개발/운영/배포',
    techList: ['Javascript, Dart', 'Vue, Flutter', 'VueX, Nuxt, Riverpod, Sass'],
  },
  {
    title: '소형이사 주선 플랫폼 서비스 앱 운영 스타트업',
    companyName: '이끌고',
    companyLink: 'https://www.ecclgo.com/',
    period: ['2022. 11', '2023. 03'],
    introduce: '초창기 멤버로 입사하여 ‘이끌래요’ 앱의 기능과 회사 홈페이지 개발 및 유지보수',
    charge: '앱&웹 개발',
    techList: ['Javascript, Dart', 'Flutter', 'React, Redux, GetX'],
  },
]
