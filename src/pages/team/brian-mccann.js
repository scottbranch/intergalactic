import React from "react"
import Layout from "../../components/layout"
import headshot from "../../images/company/headshot.png"
import styled from "styled-components"

const TeamMember = props => {
  return (
    <Layout className="dark">
      <StyledSection data-scroll-section>
        <Container>
          <h5 data-scroll>
            <span>Brian Mccann</span>
          </h5>
          <p className="eyebrow fadein" data-scroll data-scroll-offset="20%">
            <span>CEO</span>
          </p>
          <Info>
            <ImageContainer>
              <img
                className="fadein"
                data-scroll
                data-scroll-offset="20%"
                src={headshot}
              />
            </ImageContainer>
            <TextContainer
              className="fadein"
              data-scroll
              data-scroll-offset="20%"
            >
              <p>
                Brian has spent most of his career navigating sustainability and
                growth in a very nuanced aerospace industry. Brian believes in
                creating a work environment that allows employees to develop
                their talents in alignment with business objectives to achieve
                meaningful personal goals. He believes this alignment manifests
                in employee self-actualization and sustainable, high-level
                business performance.
              </p>
              <p>
                Brian began a career in aerospace at RAM Manufacturing Company
                (RAM) in St. George, Utah. He helped the company develop its
                commercial space presence, managed the supply chain, and led PR
                efforts on his way to becoming a vice president and eventually
                chief operating officer. Brian helped RAM to triple its annual
                revenue in a relatively short amount of time and establish
                itself as the premier provider of high-performance custom valves
                in the aviation and space markets. He was asked to sit on the
                company’s Board of Directors and lead RAM’s acquisition of a
                majority ownership position in Intergalactic. After the
                acquisition, Brian was asked by Intergalactic’s Board and
                ownership group to serve as CEO.
              </p>
              <p>
                Aviation and space have always inspired Brian. As a youth, the
                accomplishments of NASA and the American aerospace industry
                incubated a love of engineering and new technology that fueled
                his desire to seek out a career in aerospace. The privatization
                and commercialization of space has revitalized a sense of wonder
                in Brian, leveling-up his personal belief in mankind's potential
                to achieve the impossible by pursuing technologies that will one
                day allow humanity to explore thestars.
              </p>
              <p>
                Brian graduated from Brigham Young University’s Marriott School
                of Management with a Bachelor of Science degree in Business
                Management, and he also holds an MBA from Southern Utah
                University. He and his wife Jessica have four children and spend
                most of their free time navigating parenthood. Brian enjoys
                science fiction, sports, comic books, gardening and 80s pop
                culture (the weird stuff).
              </p>
            </TextContainer>
          </Info>
        </Container>
      </StyledSection>
    </Layout>
  )
}

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.cream};
`

const ImageContainer = styled.div`
  max-height: 730px;

  @media screen and (min-width: 768px) {
    min-width: 500px;
    margin-right: 90px;
  }

  @media screen and (min-width: 1260px) {
    margin-right: 195px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Container = styled.div`
  padding: 330px 62px;

  .eyebrow {
    ${({ theme }) => theme.colors.aluminum};
    margin-bottom: 100px;
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 1080px) {
    flex-direction: row;
  }

  img {
    max-width: 500px;
    margin-right: 195px;
    width: 100%;
  }
`

const TextContainer = styled.div`
  opacity: 0;
  transition: opacity 700ms ease;
  &.is-inview {
    opacity: 1;
  }
`

export default TeamMember
