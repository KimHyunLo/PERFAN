import styled from 'styled-components'
import { HighlightList, KeywordList } from '../../components/Components'

const StyledLayout = styled.div`
  width: 80%;
  margin: 10rem auto;

  @media only screen and (max-width: 1024px) {
    margin: 5rem auto;
  }
`

const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`

const StyledProjectItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 25% 1fr;
  column-gap: 10rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: none;
    column-gap: 0;
    row-gap: 5rem;
  }
`

const StyledLeftSide = styled.aside`
  position: sticky;
  top: 10vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: fit-content;
  font-size: 1.8rem;

  @media only screen and (max-width: 1024px) {
    position: static;
  }
`

const StyledRightSide = styled.section`
  ul {
    margin-top: 20px;
  }
`

const StyledDate = styled.h4`
  white-space: pre-wrap;

  div {
    display: inline-block;
  }
`

const StyledParagraph = styled.p`
  font-size: 1.8rem;
  margin-top: 20px;
`

function ProjectList() {
  return (
    <StyledLayout>
      <StyledProjectList>
        <NoljangWeb />
        <NoljangApp />
      </StyledProjectList>
    </StyledLayout>
  )
}

function NoljangWeb() {
  return (
    <StyledProjectItem>
      <StyledLeftSide>
        <StyledDate>
          2023. 11 ~ <div>2024. 03</div>
        </StyledDate>
        <HighlightList main="프로젝트 인원 :">
          <li>프론트엔드 1명, 백엔드 1명, 기획자 1명 (총 3명)</li>
        </HighlightList>
        <HighlightList main="프로젝트 역할 :">
          <li>프론트엔드</li>
        </HighlightList>
        <HighlightList main="서비스 링크 :">
          <li>🔗 https://www.noljang.co.kr</li>
        </HighlightList>
        <KeywordList main="기술 스택 :">
          <li>JavaScript</li>
          <li>Vue</li>
          <li>VueX</li>
        </KeywordList>
      </StyledLeftSide>

      <StyledRightSide>
        <h4>‘놀장’ 웹버전 리뉴얼</h4>
        <StyledParagraph>
          놀장 어플 홍보 목적으로 웹뷰에서 웹버전으로 리뉴얼한 프로젝트입니다.
        </StyledParagraph>
        <HighlightList main="검색 엔진 최적화(SEO)">
          <li>
            기존에 없었던 검색 엔진 최적화를 추가하면서 여러 문제점들을 발견
            <ol>
              <li>
                Vue에서 검색 엔진 최적화에 악영향을 주는 Hash 모드 라우팅을 바꿀 수 없어 URL
                크롤링이 불리함
              </li>
              <li>index 페이지를 제외한 다른 페이지를 색인할 수 없어 검색엔진의 크롤링이 낮아짐</li>
            </ol>
          </li>
          <li>
            다음의 방법으로 네이버, 구글 등의 사이트에서 <em>검색 상단에 노출</em>되도록 개선
            <ol>
              <li>robots.txt 파일을 추가하여 검색엔진의 크롤링률을 개선</li>
              <li>sitemap.xml 파일을 추가하여 index 페이지가 크롤링 되고 색인될 수 있도록 개선</li>
              <li>매일 키워드를 검색하고, 사이트의 CTR를 꾸준히 높여서 연관검색으로 뜨도록 유도</li>
            </ol>
          </li>
        </HighlightList>
        <HighlightList main="프로젝트 리팩토링">
          <li>
            기존에 에뮬레이터로만 디버깅할 수 있었던 환경을 웹으로도 디버깅이 될 수 있도록
            컴포넌트를 수정 → 작업한 내용을 가이드 문서로 작성하여 팀원들에게 공유하는 등{' '}
            <em>팀 템플릿 코드에 기여</em>
          </li>
        </HighlightList>
        <HighlightList main="컴포넌트 유지보수">
          <li>
            핸드폰 해상도에 맞춰진 컴포넌트들을 웹 버전에 맞도록 반응형으로 수정하여{' '}
            <em>컴포넌트 활용도를 높임</em>
          </li>
          <li>
            웹 접근성에 맞지 않은 태그를 수정하여 장애를 가진 <em>고객들의 접근성을 높임</em>
          </li>
        </HighlightList>
      </StyledRightSide>
    </StyledProjectItem>
  )
}

function NoljangApp() {
  return (
    <StyledProjectItem>
      <StyledLeftSide>
        <StyledDate>
          2023. 04 ~ <div>2023. 10</div>
        </StyledDate>
        <HighlightList main="프로젝트 인원 :">
          <li>프론트엔드 2명, 앱 개발자 1명, 백엔드 2명, 기획자 1명 (총 6명)</li>
        </HighlightList>
        <HighlightList main="프로젝트 역할 :">
          <li>프론트엔드 및 앱 개발 동시 참여</li>
        </HighlightList>
        <HighlightList main="서비스 링크 :">
          <li>🔗 Google Play</li>
          <li>🔗 App Store</li>
        </HighlightList>
        <KeywordList main="기술 스택 :">
          <li>JavaScript</li>
          <li>Vue</li>
          <li>VueX</li>
          <li>Dart</li>
          <li>Flutter</li>
          <li>Riverpod</li>
        </KeywordList>
      </StyledLeftSide>

      <StyledRightSide>
        <h4>‘놀장’ 레거시 앱 리메이크</h4>
        <StyledParagraph>
          E-커머스 플랫폼 네이티브 앱을 플러터 앱으로 리메이크한 프로젝트입니다.
        </StyledParagraph>
        <HighlightList main="서비스 안정화">
          <li>
            페이지를 이동할 때, 불필요하게 많은 API 패치로 인한 로딩 속도 저하 이슈가 발생 →
            사용자의 스크롤 위치에 따라 추가 페이지네이션이 발생할 수 있도록 API 패치를 수정하여
            페이지 로딩 속도를 <em>2초 → 0.5초로 단축</em>
          </li>
          <li>
            일부 디바이스에서 잘못 표시되는 컴포넌트들을 개선하고, UI 라이브러리 대신 자체
            컴포넌트를 쓰는 식의 대처로 <em>크로스 브라우징 이슈를 해결</em>
          </li>
        </HighlightList>
        <HighlightList main="신규 결제 수단 기능 추가">
          <li>
            결제 수단을 추가하면서 기존 결제 프로세스가 확장성이 떨어진다는 점을 발견 → 각 결제
            API의 연동 프로세스를 하나로 합쳐주는 중간 함수를 개발 → 이후 추가 결제 수단이 생길
            때마다 시스템을 새로 만들 필요가 없어져 <em>팀의 코딩 효율을 높임</em>
          </li>
          <li>
            테스트 과정에서 API 요청 값 확장, OS에 따라 동작이 다른 버튼 기능 수정, 문서와 실제 API
            응답 값이 다른 점 등의 피드백 리스트를 협업 업체에 공유하여 <em>에러 발생률을 낮춤</em>
          </li>
        </HighlightList>
        <HighlightList main="API 호출 프로세스 간편화">
          <li>
            기존에 API 호출 프로세스가 불필요할 정도로 많은 레이어를 가져 신규 API를 추가할 때마다
            개발 효율이 떨어짐 → API 확장성을 위해 모델과 비즈니스 로직으로 이루어진 하나의 레이어로
            프로세스를 단축함 → 팀원들의 프로젝트 접근성과 <em>개발 효율성을 높임</em>
          </li>
        </HighlightList>
        <HighlightList main="서비스 인지도 개선">
          <li>
            상품 상세 페이지를 딥링크로 공유하는 기능을 만들어 소비자들의 접근성을 개선하고{' '}
            <em>마케팅 효율을 높임</em>
          </li>
          <li>
            iOS 유니버셜 링크와, Android 앱 링크를 통합한 QR코드를 개발하여 다양한 핸드폰 기종을
            가진 사용자들의 <em>서비스 접근성을 높임</em>
          </li>
        </HighlightList>
        <HighlightList main="프로젝트 리팩토링">
          <li>
            UI가 비슷한 컴포넌트, 하나로 합칠 수 있는 함수 등을 모듈화하여{' '}
            <em>코드 재사용성을 높임</em>
          </li>
          <li>
            기존에 iOS와 Android가 웹뷰와 통신할 때 쓰던 분리된 함수들을 하나의 공동 함수로 수정하여{' '}
            <em>코드 가독성을 개선</em>
          </li>
        </HighlightList>
      </StyledRightSide>
    </StyledProjectItem>
  )
}

export default ProjectList
