import ListSection from '../../components/ListSection.tsx'

function MarketTree() {
  return (
    <ListSection>
      <ListSection.LeftSide>
        <h3>마켓트리</h3>
        <ListSection.DotList main="근무 기간">
          <li>2023. 03 ~ 2024. 04 (1년 1개월)</li>
        </ListSection.DotList>
        <ListSection.DotList main="직무 / 직위">
          <li>프론트엔드 / 프로</li>
        </ListSection.DotList>
      </ListSection.LeftSide>
      <ListSection.RightSide>
        <p>
          웹뷰 기반 플러터 앱의 개발 및 운영을 진행하면서 <em>총매출을 10%</em> 이상 올리거나,
          일주일 만에 <em>신규 사용자를 5,000명 이상 유입</em>하는 등의 유의미한 성과를
          달성하였습니다.
        </p>
        <ListSection.DotList main="데이터를 기반으로 기록한 성과">
          <li>
            한국조폐공사와 협업하여 지역사랑상품권을 이용하는 신규 결제 수단 착페이를 추가 → 잠재적
            지역상품권을 소지한 사용자의 매출을 올려 이전 달 대비 총매출을 약 10% 증가
          </li>
          <li>
            iOS 유니버셜 링크, Android 앱 링크를 개발하여 공통 딥링크 기능을 추가 → 오프라인 행사,
            온라인 광고 등에서 딥링크를 활용한 QR코드로 사용하여 신규 사용자를 이전 달 대비 5,000명
            이상 유입
          </li>
          <li>
            크로스 브라우징 관리, 페이지 로딩 속도 개선 등 서비스 운영 안정화 작업을 진행 → 레거시
            버그 관련 CS 연락을 60%에서 10%까지 축소
          </li>
          <li>
            과도한 이미지 및 애니메이션으로 인한 페이지 초기 로딩 속도 저하 이슈를 해결 → 기존 CSR
            렌더링을 SSG 렌더링으로 변경하여 초기 로딩 속도를 1.5초에서 0.2초로 단축
          </li>
        </ListSection.DotList>
        <ListSection.DotList main="서비스 개선을 통한 성과">
          <li>
            기존에 없던 검색 엔진 최적화 작업을 웹 서비스에 추가하여 서비스 페이지를 검색창 1페이지
            상단에 노출되도록 개선 → 신규 사용자 유입 경로를 확장하고 웹 검색을 통한 접근성을 크게
            향상
          </li>
          <li>
            불필요한 코드를 삭제하고 오래된 로직을 최적화하는 등의 리팩토링 과정을 거쳐 코드 유지
            보수성을 개선 → 간단한 유지보수 업무의 처리속도를 2배가량 단축하여 팀원들의 개발
            효율성을 높임
          </li>
        </ListSection.DotList>
      </ListSection.RightSide>
    </ListSection>
  )
}

export default MarketTree
