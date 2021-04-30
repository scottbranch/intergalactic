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
            <span>Brad Plothow</span>
          </h5>
          <p className="eyebrow fadein" data-scroll data-scroll-offset="20%">
            <span>Vice President of Strategy</span>
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
                Brad joined Intergalactic in 2020 to build and lead growth
                strategies that are aggressive, sustainable, and responsible.
                Brad’s strategy mandate spans marketing, sales, business
                development, partnerships, community and industry relations,
                public affairs, people operations, finance, and risk management.
              </p>
              <p>
                Over the past two decades, Brad’s eclectic career has included
                work in aerospace, mass media, government, higher education, and
                enterprise and consumer technology. A hands-on strategist and
                highly rated people leader, Brad has spent most of the last
                decade working with growth-stage technology companies in Silicon
                Valley, Silicon Slopes (Utah), Los Angeles, New York City,
                Boston, Austin, Israel, New Zealand, and more.
              </p>
              <p>
                As a marketing and public affairs specialist at a tier-one
                research university, Brad promoted the institution’s proprietary
                and partnered research programs, including innovations from the
                Space Dynamics Lab and Jet Propulsion Laboratory. As a marketing
                consultant in the private sector, Brad advised aerospace
                innovators such as Rocket Lab and several startups in the small
                satellite space.
              </p>
              <p>
                Brad holds a bachelor’s degree in communications and a master’s
                in business administration (MBA). He lives in Lehi, Utah, with
                his wife, Stefanie, and four children. He enjoys hiking, biking,
                snowboarding, good movies, and spinning classic rock and heavy
                metal on vinyl.
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
