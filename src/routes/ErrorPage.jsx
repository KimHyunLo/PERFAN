import { Link, useRouteError } from 'react-router-dom'
import styled from 'styled-components'

const StyledErrorPage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`

const StyledTitle = styled.h1`
  font-size: max(4vw, 50px);
`

const StyledParagraph = styled.p`
  font-size: 1.8rem;
  margin-bottom: 5rem;
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
      <StyledTitle>404 ERROR</StyledTitle>
      <StyledParagraph>요청하신 페이지를 찾을 수 없습니다.</StyledParagraph>
      <StyledLink to="/">홈으로 이동</StyledLink>
    </StyledErrorPage>
  )
}

export default ErrorPage
