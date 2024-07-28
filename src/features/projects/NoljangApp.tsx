import ListSection from '../../components/ListSection.tsx'

function NoljangApp() {
  return (
    <ListSection>
      <ListSection.LeftSide>
        <h3>놀장 레거시 앱 리메이크</h3>
        <ListSection.DotList main="프로젝트 기간">
          <li>2023. 04 ~ 2023. 10 (6 개월)</li>
        </ListSection.DotList>
        <ListSection.DotList main="프로젝트 인원">
          <li>프론트엔드 2명, 앱 개발자 1명, 백엔드 2명, 기획자 1명 (총 6명)</li>
        </ListSection.DotList>
        <ListSection.DotList main="프로젝트 역할">
          <li>프론트엔드 및 앱 개발 동시 참여</li>
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
        <ListSection.KeywordList main="기술 스택">
          <li>JavaScript</li>
          <li>Vue</li>
          <li>VueX</li>
          <li>Dart</li>
          <li>Flutter</li>
          <li>Riverpod</li>
        </ListSection.KeywordList>
      </ListSection.LeftSide>
      <ListSection.RightSide>
        <p>
          API 관련 <em>레거시 코드를 리팩토링</em>하는 작업을 수행했으며, 기존에 문제 제기가 많았던{' '}
          <em>버그 리포트를 해결</em>하는 등의 작업에 중점을 두고 개발하였습니다.
        </p>
        <ListSection.DotList main="결제 수단 확장성 개선">
          <li>
            결제 수단을 추가하면서 기존 결제 프로세스가 확장성이 떨어진다는 점을 발견 → 각 결제
            API의 연동 프로세스를 하나로 합쳐주는 중간 함수를 개발 → 결제 수단 추가 업무의 작업량을
            크게 단축하여 팀원들의 개발 효율성을 높임
          </li>
        </ListSection.DotList>
        <ListSection.DotList main="API 호출 프로세스 간편화">
          <li>
            기존의 API 호출 프로세스가 불필요할 정도로 많은 레이어를 가져 신규 API를 추가할 때마다
            개발 효율이 떨어지는 문제를 발견 → 모델과 비즈니스 로직으로 이루어진 하나의 레이어로
            프로세스를 단축하여 API 확장성을 넓힘 → 기능 개발 업무의 작업량을 단축하여 팀원들의 개발
            효율성을 높임
          </li>
        </ListSection.DotList>
        <ListSection.DotList main="실시간 이슈 대응">
          <li>
            업데이트 이후 페이지 로딩 속도가 눈에 띄게 느려지는 이슈가 발생 → 서버를 롤백하고, 커밋
            기록을 살피면서 문제의 원인이 되는 코드를 찾기 위해 디버깅을 시작
          </li>
          <li>
            네트워크에서 로딩이 오래 걸리는 API들을 근거로 문제의 원인을 파악 → 스크롤 위치에 따라
            추가 페이지네이션이 발생할 수 있도록 API 패치를 수정 → 페이지 로딩 속도를 2초에서
            0.5초로 단축하는 식으로 문제를 해결
          </li>
        </ListSection.DotList>
        <ListSection.DotList main="크로스 브라우징 관리">
          <li>
            일부 디바이스마다 UI가 잘못 표시되는 문제를 발견 → 검색을 통해 디바이스가 사용하는 기본
            브라우저에 따라 UI가 다르게 표시될 수 있다는 정보를 습득
          </li>
          <li>
            크로스 웹 브라우저 테스트 툴을 사용하여 브라우저 별로 UI에 이상이 없는지 문제를
            파악하면서 컴포넌트 호환성을 개선
          </li>
        </ListSection.DotList>
        <ListSection.DotList main="서비스 인지도 개선">
          <li>
            상품 상세 페이지를 딥링크로 공유하는 기능을 만들어 사용자들간의 상품 접근성을 넓힘 → SNS
            포스트에 이벤트 상품의 링크를 사용하는 등의 마케팅에 활용 → 딥링크를 통해 구매한 신규
            소비자 비율을 10%까지 높임
          </li>
        </ListSection.DotList>
      </ListSection.RightSide>
    </ListSection>
  )
}

export default NoljangApp
