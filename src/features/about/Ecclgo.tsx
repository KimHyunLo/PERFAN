import ListSection from '../../components/ListSection.tsx'

function Ecclgo() {
  return (
    <ListSection>
      <ListSection.LeftSide>
        <h3>이끌고</h3>
        <ListSection.DotList main="근무 기간">
          <li>2022. 11 ~ 2023. 03 (5개월)</li>
        </ListSection.DotList>
        <ListSection.DotList main="직무 / 직위">
          <li>프론트엔드 / 인턴</li>
        </ListSection.DotList>
      </ListSection.LeftSide>
      <ListSection.RightSide>
        <p>
          플러터 앱의 초기 설계 및 개발과 어드민 사이트의 유지보수 작업을 진행하면서{' '}
          <em>유지 보수성을 개선</em>하고 <em>개발 프로세스를 단축</em>하는 등의 성과를
          달성하였습니다.
        </p>
        <ListSection.DotList main="서비스 품질 향상을 통한 성과">
          <li>
            MVVM 패턴을 기반으로 프로젝트 상태 관리를 설계 → 기능별로 모듈화하여 유지 보수성을
            높이고, 테스트 단위를 분리해 프로젝트 관리 효율성을 높임
          </li>
          <li>
            테이블 UI 컴포넌트를 그리드 스타일로 수정하여 다양한 용도로 활용할 수 있도록 개선 →
            테이블 외의 리스트나 갤러리 UI 등을 개발할 때도 사용하여 컴포넌트 활용도를 크게 높임
          </li>
        </ListSection.DotList>
      </ListSection.RightSide>
    </ListSection>
  )
}

export default Ecclgo
