import styled from 'styled-components'

const StyledContactInfo = styled.ul`
  display: grid;
  grid-template-columns: 16vw 16vw;
  grid-template-rows: 15% 15%;
  align-items: center;
  row-gap: 3.5vw;
  column-gap: 6vw;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
`

const InfoList = styled.li`
  display: grid;
  grid-template-columns: max(8vw, 10rem) 1fr;

  .social-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li:first-child::after {
      content: ',';
    }
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 15rem 1fr;

    .social-list {
      display: flex;
      flex-direction: row;
    }
  }
`

const InfoTitle = styled.div`
  text-transform: capitalize;
  color: var(--gray);
`

function ContactInfo() {
  return (
    <StyledContactInfo>
      <InfoList>
        <InfoTitle>designer</InfoTitle>
        <div>Henry</div>
      </InfoList>
      <InfoList>
        <InfoTitle>developer</InfoTitle>
        <div>Henry</div>
      </InfoList>
      <InfoList>
        <InfoTitle>social</InfoTitle>
        <ul className="social-list">
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
      </InfoList>
      <InfoList>
        <InfoTitle>email</InfoTitle>
        <div>
          <a href="mailto:leeas016@gmail.com" target="blank">
            leeas016@gmail.com
          </a>
        </div>
      </InfoList>
    </StyledContactInfo>
  )
}

export default ContactInfo
