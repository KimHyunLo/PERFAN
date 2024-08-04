import ListSection from '../../components/ListBox.tsx'

function NoljangWeb() {
  return (
    <ListSection>
      <ListSection.LeftSide>
        <h3>놀장 웹 버전 리뉴얼</h3>
        <ListSection.DotList main="프로젝트 기간">
          <li>2023. 11 ~ 2024. 03 (5 개월)</li>
        </ListSection.DotList>
        <ListSection.DotList main="서비스 링크">
          <li>
            <a href="https://www.noljang.co.kr" target="_blank">
              https://www.noljang.co.kr
            </a>
          </li>
        </ListSection.DotList>
      </ListSection.LeftSide>
      <ListSection.RightSide>
        <ListSection.DotList main="프로젝트 역할 / 인원">
          <li>웹개발 / 3명</li>
        </ListSection.DotList>
        <ListSection.KeywordList main="기술 스택">
          <li>JavaScript</li>
          <li>Vue</li>
          <li>VueX</li>
        </ListSection.KeywordList>
        <ListSection.DotList main="검색 엔진 최적화(SEO)">
          <li>
            도메인에 HTTPS를 추가하는 과정에서 Vue의 Hash 모드 라우팅을 강제로 써야하는 상황이 발생
            → index 페이지를 제외한 다른 페이지를 검색엔진이 색인할 수 없어 전체 사이트의 크롤링률이
            낮아지는 단점이 생김
          </li>
          <li>
            문제를 해결하기 위해 페이지가 색인될 수 있도록 sitemap.xml을 추가하고, 검색엔진의
            크롤링률을 높이기 위해서 robots.txt 파일을 추가하는 등의 방법으로 최적화 작업을 진행
          </li>
          <li>
            2주간의 노력 끝에 네이버, 구글 등의 사이트에서 검색 첫 페이지 상단에 서비스 페이지가
            노출되도록 개선
          </li>
        </ListSection.DotList>
        <ListSection.DotList main="디버깅 환경 개선">
          <li>
            기존 에뮬레이터로만 디버깅할 수 있었던 환경을 웹으로도 디버깅 될 수 있도록 컴포넌트
            호환성을 개선 → 작업한 내용을 가이드 문서로 작성하여 팀원들의 디버깅 효율을 높임
          </li>
        </ListSection.DotList>
      </ListSection.RightSide>
    </ListSection>
  )
}

export default NoljangWeb
