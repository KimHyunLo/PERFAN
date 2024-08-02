import ListSection from '../../components/ListBox.tsx'

function NoljangApp() {
  return (
    <ListSection>
      <ListSection.LeftSide>
        <h3>놀장 레거시 앱 리메이크</h3>
        <ListSection.DotList main="프로젝트 기간">
          <li>2023. 04 ~ 2023. 10 (6 개월)</li>
        </ListSection.DotList>
        <ListSection.DotList main="서비스 링크">
          <li>
            <a href="https://play.google.com/store/apps/details?id=kr.wiju.noljang" target="_blank">
              🔗 Google Play
            </a>
          </li>
          <li>
            <a href="https://apps.apple.com/kr/app/%EB%86%80%EC%9E%A5/id1169889915" target="_blank">
              🔗 App Store
            </a>
          </li>
        </ListSection.DotList>
      </ListSection.LeftSide>
      <ListSection.RightSide>
        <ListSection.DotList main="프로젝트 역할 / 인원">
          <li>웹개발, 앱개발 / 6명</li>
        </ListSection.DotList>
        <ListSection.KeywordList main="기술 스택">
          <li>JavaScript</li>
          <li>Vue</li>
          <li>VueX</li>
          <li>Dart</li>
          <li>Flutter</li>
          <li>Riverpod</li>
        </ListSection.KeywordList>
        <ListSection.DotList main="결제 수단 확장성 개선">
          <li>
            결제 수단을 추가하면서 기존 결제 프로세스가 확장성이 떨어진다는 문제를 발견 → 각 결제
            API의 연동 프로세스를 하나로 합쳐주는 중간 함수를 개발 → 결제 수단 추가 업무의 작업량을
            크게 단축하여 신규 개발 효율성을 높임
          </li>
        </ListSection.DotList>
        <ListSection.DotList main="API 호출 프로세스 간편화">
          <li>
            불필요할 정도로 많은 레이어를 가진 API 호출 프로세스 때문에 추가 개발 효율이 떨어지는
            문제를 발견 → 모델과 비즈니스 로직을 합친 하나의 레이어로 프로세스를 단축하여 API
            확장성을 넓힘 → API 관련 개발 업무의 작업량을 단축하여 팀원들의 개발 효율성을 높임
          </li>
        </ListSection.DotList>
        <ListSection.DotList main="페이지 로딩속도 개선">
          <li>
            GET API에서 과도하게 많은 응답 데이터로 인한 페이지 로딩속도 저하 문제가 발생 → 스크롤
            위치에 따라 페이지네이션이 발생할 수 있도록 API fetch 함수를 수정 → 페이지 로딩 속도를
            2초에서 0.5초로 단축하여 문제를 해결
          </li>
        </ListSection.DotList>
        <ListSection.DotList main="크로스 브라우징 관리">
          <li>
            일부 디바이스마다 UI가 잘못 표시되는 문제를 발견 → 크로스 웹 브라우저 테스트 툴을
            사용하여 브라우저 별로 UI에 이상이 없는지 문제를 파악하면서 컴포넌트 호환성을 개선
          </li>
        </ListSection.DotList>
        <ListSection.DotList main="서비스 접근성 개선">
          <li>
            딥링크 기능을 개발하여 SNS 게시글에서 상품 바로가기 링크로 활용 → 딥링크를 통해 상품을
            구매한 소비자 비율을 총매출의 10%까지 올림
          </li>
        </ListSection.DotList>
      </ListSection.RightSide>
    </ListSection>
  )
}

export default NoljangApp
