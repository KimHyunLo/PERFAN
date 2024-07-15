import styled from 'styled-components'
import { LazyImage, List } from '../../components/Components'

const ContentBox = styled.div`
  height: 100%;
  padding: max(3vw, 3rem) 7vw;
  overflow: auto;
`

const HeaderBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: max(5vw, 23px);
  font-family: 'Bodoni Moda', sans-serif;
  color: var(--active);
  margin-bottom: max(5vw, 30px);
  line-height: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 160%;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(
      to right,
      transparent 0%,
      var(--active) 20%,
      var(--active) 80%,
      transparent 100%
    );
    border-image-slice: 1;
  }

  @media only screen and (max-width: 640px) {
    font-size: max(9vw, 32px);
  }
`

const CloseButton = styled.button`
  position: absolute;
  bottom: calc(max(3vw, 35px) * -0.5);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: max(3vw, 40px);
  height: max(3vw, 40px);
  background-color: var(--active);
  border-radius: 50px;
  z-index: 1;

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-47%, -50%);
    width: 40%;
    height: auto;
  }
`

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  row-gap: 1.5vw;
  width: 90%;
  min-width: 0;
  min-height: 0;
  font-size: clamp(12px, 1vw, 18px);
  margin: 0 auto;

  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 0;
    width: 100%;
  }
`

const GridItem = styled.div`
  min-width: 0;
  font-size: 1.8rem;

  &.title-item {
    color: var(--active);
  }

  &.project-link {
    display: flex;
    flex-direction: column;

    .link {
      white-space: nowrap;
    }
  }

  @media only screen and (max-width: 1280px) {
    font-size: max(1.8vw, 14px);
  }

  @media only screen and (max-width: 640px) {
    &.title-item {
      margin-bottom: 0.5rem;
    }

    &.title-item:not(&:first-child) {
      margin-top: 2rem;
    }
  }
`

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li:not(li:last-child) {
    border-right: 1px solid var(--gray);
    padding-right: 0.7rem;
    margin-right: 0.7rem;
  }
`

const TechItem = styled.li`
  font-size: 1.8rem;

  span:not(span:last-child)::after {
    content: ',';
    margin-right: 4px;
  }

  @media only screen and (max-width: 1280px) {
    font-size: max(1.8vw, 14px);
  }
`

const StyledListBox = styled.div`
  ul:not(ul:last-child) {
    margin-bottom: 2rem;
  }
`

function ProjectModal({ project, onCloseClick }) {
  function cutLinkShort(link) {
    if (link.includes('.com')) {
      return link.split('.com')[0] + '.com'
    } else if (link.includes('.co.kr')) {
      return link.split('.co.kr')[0] + '.co.kr'
    }
  }

  return (
    <ContentBox>
      <CloseButton onClick={onCloseClick}>
        <LazyImage src="/icons/close.svg" alt="close" className="icon" />
      </CloseButton>
      <HeaderBox>
        <div>{project.title}</div>
      </HeaderBox>
      <GridBox>
        <GridItem className="title-item">개발 기간</GridItem>
        <GridItem>{project.period}</GridItem>
        <GridItem className="title-item">인원</GridItem>
        <GridItem>{project.member}</GridItem>
        <GridItem className="title-item">역할</GridItem>
        <GridItem>{project.role}</GridItem>
        <GridItem className="title-item">프로젝트 소개</GridItem>
        <GridItem>{project.introduction}</GridItem>
        <GridItem className="title-item">서비스 링크</GridItem>
        <GridItem className="project-link">
          {project.links.map((link) => (
            <a href={link} target="_blank" key={link} className="link">
              🔗 {cutLinkShort(link)}
            </a>
          ))}
        </GridItem>
        <GridItem className="title-item">기술 스택</GridItem>
        <TechList>
          <TechItem>
            {project.languages.map((language) => (
              <span key={language.name}>{language.name}</span>
            ))}
          </TechItem>
          <TechItem>
            {project.libraries.map((library) => (
              <span key={library.name} className={library.isMostUsed ? 'top-priority' : ''}>
                {library.name}
              </span>
            ))}
          </TechItem>
          <TechItem>
            {project.frameworks.map((framework) => (
              <span key={framework.name} className={framework.isMostUsed ? 'top-priority' : ''}>
                {framework.name}
              </span>
            ))}
          </TechItem>
        </TechList>
        <GridItem className="title-item">담당 업무</GridItem>
        {project.title === 'Noljang Web' && <NoljangWeb />}
        {project.title === 'Noljang App' && <NoljangApp />}
      </GridBox>
    </ContentBox>
  )
}

function NoljangWeb() {
  return (
    <StyledListBox>
      <List main="검색 엔진 최적화(SEO)">
        <li>
          기존에 없었던 SEO 관리를 추가하면서 여러 문제점들을 발견
          <ol>
            <li>
              Vue에서 SEO 최적화에 악영향을 주는 Hash 모드 라우팅을 바꿀 수 없어 URL 크롤링이 불리함
            </li>
            <li>index 페이지를 제외한 다른 페이지를 색인할 수 없어 검색엔진의 크롤링이 낮아짐</li>
          </ol>
        </li>
        <li>
          다음의 방법으로 네이버, 구글 등의 사이트에서 <em>검색 상단에 노출</em>되도록 개선
          <ol>
            <li>robots.txt 파일을 추가하여 검색엔진의 크롤링률을 상승</li>
            <li>sitemap.xml 파일을 추가하여 index 페이지가 크롤링 되고 색인될 수 있도록 개선</li>
            <li>매일 키워드를 검색하고, 사이트의 CTR를 꾸준히 높여서 연관검색으로 뜨도록 유도</li>
          </ol>
        </li>
      </List>
      <List main="프로젝트 리팩토링">
        <li>
          기존에 에뮬레이터로만 디버깅할 수 있었던 환경을 웹으로도 디버깅이 될 수 있도록 환경을 조성
          → 작업한 내용을 가이드 문서로 작성하여 팀원들에게 공유하는 등{' '}
          <em>팀 템플릿 코드에 기여</em>
        </li>
      </List>
      <List main="컴포넌트 유지보수">
        <li>
          핸드폰 해상도에 맞춰진 컴포넌트들을 웹 버전에 맞도록 반응형으로 수정하여{' '}
          <em>컴포넌트 활용도를 높임</em>
        </li>
        <li>
          웹 접근성에 맞지 않은 태그를 수정하여 장애를 가진 <em>고객들의 접근성을 높임</em>
        </li>
      </List>
    </StyledListBox>
  )
}

function NoljangApp() {
  return (
    <StyledListBox>
      <List main="서비스 안정화">
        <li>
          페이지를 이동할 때 불필요하게 많은 API 패치로 인한 로딩 속도 저하가 발생 → 사용자의 스크롤
          위치에 따라 추가 페이지네이션이 발생할 수 있도록 API 패치를 수정하여 페이지 로딩 속도를
          <em> 2초 → 0.5초로 단축</em>
        </li>
        <li>
          일부 디바이스에서 잘못 표시되는 컴포넌트들을 개선하고, UI 라이브러리 대신 자체 컴포넌트를
          쓰는 식의 방법으로 <em>크로스 브라우징 이슈를 해결</em>
        </li>
      </List>
      <List main="신규 결제 수단 기능 추가">
        <li>
          결제 수단을 추가하면서 기존 결제 프로세스가 확장성이 떨어진다는 점을 발견 → 결제 수단이
          추가될 때마다 결제 시스템이 많이 질 것을 염려하여 각 결제 API의 연동 프로세스를 하나로
          합쳐주는 중간 함수를 개발 → 이후 추가 결제 수단이 생길 때마다 시스템을 새로 만들 필요가
          없어져 <em>팀의 코딩 효율을 높임</em>
        </li>
        <li>
          테스트 과정에서 API 요청 값 확장, OS에 따라 동작이 다른 버튼 기능 수정, 문서와 실제 API
          응답 값이 다른 점 등의 에러 리스트를 협업 업체에 공유하여
          <em> 에러 발생률을 낮춤</em>
        </li>
      </List>
      <List main="API 호출 프로세스 간편화">
        <li>
          기존에 API 호출 프로세스가 불필요할 정도로 많은 레이어를 가져 신규 API를 추가할 때마다
          개발 효율이 떨어짐 → API 확장성을 위해 모델과 비즈니스 로직으로 이루어진 하나의 레이어로
          프로세스를 단축함 → 팀원들의 프로젝트 접근성과 <em>개발 효율성을 높임</em>
        </li>
      </List>
      <List main="서비스 인지도 개선">
        <li>
          상품 상세 페이지를 딥링크로 공유하는 기능을 만들어 소비자들의 접근성을 개선하고{' '}
          <em>마케팅 효율을 높임</em>
        </li>
        <li>
          iOS 유니버셜 링크와, Android 앱 링크를 통합한 QR코드를 개발하여 다양한 핸드폰 기종을 가진
          사용자들의 <em>서비스 접근성을 높임</em>
        </li>
      </List>
      <List main="프로젝트 리팩토링">
        <li>
          UI가 비슷한 컴포넌트, 하나로 합칠 수 있는 함수 등을 모듈화하여{' '}
          <em>코드 재사용성을 높임</em>
        </li>
        <li>
          기존에 iOS와 Android가 웹뷰와 통신할 때 쓰던 분리된 함수들을 하나의 공동 함수로 수정하여{' '}
          <em>코드 가독성을 개선</em>
        </li>
      </List>
    </StyledListBox>
  )
}

export default ProjectModal
