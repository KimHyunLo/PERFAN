import styled from 'styled-components'
import ListBox from '../../components/ListBox'
import { useState } from 'react'

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const StyledListItem = styled.li`
  width: 5vw;
  height: 5vw;
  border: 1px solid var(--gray);
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;

  &.selected {
    border-color: var(--active);
  }

  &:hover {
    width: 5.5vw;
    height: 5.5vw;
  }

  @media only screen and (max-width: 1024px) {
    width: max(40px, 7vw);
    height: max(40px, 7vw);

    &:hover {
      width: max(45px, 7.5vw);
      height: max(45px, 7.5vw);
    }
  }
`

const StyledImage = styled.img`
  height: 100%;
`

type Skill = {
  skill: string
  src: string
  details: string[]
}

const skills: Skill[] = [
  {
    skill: 'HTML',
    src: 'icons/html.svg',
    details: [
      'Semantic Markup을 중요하게 여기며, HTML를 작성할 때 의미를 부여합니다.',
      'inline요소와 block요소의 특징을 이해합니다.',
      'form태그를 활용한 정보 전달이 가능합니다.',
      'favicon, SEO 등의 적용 경험이 있습니다',
    ],
  },
  {
    skill: 'CSS',
    src: 'icons/css.svg',
    details: [
      'flex, grid를 이용한 레이아웃 구현이 가능합니다.',
      'position 속성을 이용한 컴포넌트의 위치 조정이 가능합니다.',
      'keyframe을 활용한 animation 제작이 가능합니다.',
      'SASS(SCSS)와 같은 CSS Preprocessor를 사용할 수 있습니다.',
    ],
  },
  {
    skill: 'JavaScript',
    src: 'icons/javascript.svg',
    details: [
      'ES2015 이후의 JavaScript 문법에 익숙합니다.',
      'Vanilla JavaScript를 통해 DOM을 다루는데 익숙합니다.',
      'Reduce, Map과 같은 고차함수를 적극적으로 사용합니다',
      '변수와 함수의 선언과정과 호이스팅에 대하여 이해하고 있습니다.',
      '비동기 작업을 하는데 익숙합니다. (promise, async await)',
    ],
  },
  {
    skill: 'TypeScript',
    src: 'icons/typescript.svg',
    details: [
      '변수에 type을 부여하고 의도한 동작에 따라 사용되도록 합니다.',
      'TypeScript를 이용한 React 코딩에 익숙합니다.',
      'interface와 generic 등 타입 시스템을 이해하고 사용합니다.',
    ],
  },
  {
    skill: 'React',
    src: 'icons/react.svg',
    details: [
      'component를 나누고 연결하는 것이 가능합니다.',
      'useState와 useEffect에 대해 이해하고 사용합니다.',
      'props를 넘기고 사용하는 것이 가능합니다.',
      'react-router-dom 모듈을 이용하여 Router를 나누고, useParams, useNavigation, useLocation 등의 훅을 이해하고 사용합니다.',
      'styled-components 라이브러리를 이용해 컴포넌트의 스타일링이 가능합니다.',
      '기능에 따라 필요한 모듈을 찾고 이용하려 노력합니다.',
    ],
  },
  {
    skill: 'Vue',
    src: 'icons/vue.svg',
    details: [
      '크거나 작은 규모의 웹 프로그램을 설계할 수 있습니다',
      '컴포넌트 라이프 사이클을 이해하여 적절하게 활용합니다.',
      'props를 넘기고 사용하는 것이 가능합니다.',
      'Vue Router 모듈을 이용하여 Router를 나누고, 필요에 따라 params 데이터를 사용합니다.',
      'VueX를 이용하여 상태관리를 효율적으로 설계합니다.',
    ],
  },
  {
    skill: 'Git',
    src: 'icons/git.svg',
    details: [
      '수정된 파일을 commit하고, 배포된 프로젝트에 반영하는 것이 가능합니다.',
      '작업을 하는 과정에서 branch를 나누며 작업하는 것이 가능하며, 중요성을 이해하고 있습니다.',
      '다른 팀원과 협업을 하며 PR(pull request) 및 merge를 하는 것이 가능합니다.',
    ],
  },
]

export default function SkillsContent() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0])
  const { skill, details } = selectedSkill

  function handleSelect(skill: Skill) {
    setSelectedSkill(skill)
  }

  return (
    <ListBox>
      <ListBox.LeftSide>
        <StyledList>
          {skills.map((skill) => (
            <StyledListItem
              key={skill.skill}
              className={`${skill.skill === selectedSkill.skill ? 'selected' : ''}`}
              onClick={() => handleSelect(skill)}
            >
              <StyledImage src={skill.src} alt={skill.skill} />
            </StyledListItem>
          ))}
        </StyledList>
      </ListBox.LeftSide>
      <ListBox.RightSide>
        <ListBox.DotList>
          <li className="no-dot">
            <h2>{skill}</h2>
          </li>
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ListBox.DotList>
      </ListBox.RightSide>
    </ListBox>
  )
}
