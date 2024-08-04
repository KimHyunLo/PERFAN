import styled from 'styled-components'

const StyledContactInfo = styled.ul`
  display: grid;
  width: 50%;
  grid-template-columns: 10% 1fr 10% 1fr;
  grid-template-rows: 15% 15%;
  align-items: center;
  row-gap: 4vw;
  column-gap: 3vw;

  li:not(li:first-child) {
    margin-top: 5px;
  }

  @media only screen and (max-width: 1024px) {
    width: auto;
    grid-template-columns: auto auto;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    row-gap: 2vw;
    column-gap: 5vw;
  }
`

const InfoTitle = styled.div`
  text-transform: capitalize;
  color: var(--gray);
`

function ContactInfo() {
  return (
    <StyledContactInfo>
      <InfoTitle>developer</InfoTitle>
      <div>Henry</div>
      <InfoTitle>specialty</InfoTitle>
      <div>Organizing</div>
      <InfoTitle>social</InfoTitle>
      <ul>
        <li>
          <a href="https://github.com/KimHyunLo" target="blank">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://perfect-plan.notion.site/c60c5c6ffd8843c6804e2de03ab68149?pvs=74"
            target="blank"
          >
            Blog
          </a>
        </li>
      </ul>
      <InfoTitle>email</InfoTitle>
      <div>
        <a href="mailto:leeas016@gmail.com" target="blank">
          leeas016@gmail.com
        </a>
      </div>
    </StyledContactInfo>
  )
}

export default ContactInfo
