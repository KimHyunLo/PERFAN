import { Link, useRouteError } from 'react-router-dom'
import styled from 'styled-components'

const StyledErrorPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--white);
`

const StyledWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledTitle = styled.h2`
  font-size: max(4vw, 50px);
  text-align: center;
`

const StyledParagraph = styled.p`
  margin-bottom: 5rem;
  text-align: center;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 4rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--active);
  border: 1px solid var(--active);
  border-radius: 50px;
  margin: 0 auto;
`

function ErrorPage() {
  const error = useRouteError()

  console.log(error.data || error.message)
  return (
    <StyledErrorPage>
      <StyledWrap>
        <StyledTitle>404 ERROR</StyledTitle>
        <StyledParagraph>요청하신 페이지를 찾을 수 없습니다.</StyledParagraph>
        <StyledLink to="/">홈으로 이동</StyledLink>
      </StyledWrap>
    </StyledErrorPage>
  )
}

export default ErrorPage
