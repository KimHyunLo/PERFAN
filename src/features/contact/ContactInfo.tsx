import styled from 'styled-components'

const StyledContactInfo = styled.ul`
  display: grid;
  width: 50%;
  grid-template-columns: 10% 1fr 10% 1fr;
  grid-template-rows: 15% 15%;
  align-items: center;
  row-gap: 4vw;
  column-gap: 3vw;

  li {
    white-space: nowrap;
  }

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

const InfoTitleItem = styled.li`
  text-transform: capitalize;
  color: var(--gray);
`

function ContactInfo() {
  return (
    <StyledContactInfo>
      <InfoTitleItem>developer</InfoTitleItem>
      <li>Henry</li>
      <InfoTitleItem>specialty</InfoTitleItem>
      <li>Organizing</li>
      <InfoTitleItem>social</InfoTitleItem>
      <li>
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
      </li>
      <InfoTitleItem>email</InfoTitleItem>
      <li>
        <a href="mailto:leeas016@gmail.com" target="blank">
          leeas016@gmail.com
        </a>
      </li>
    </StyledContactInfo>
  )
}

export default ContactInfo
