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
            <span>Doug McCann</span>
          </h5>
          <p className="eyebrow fadein" data-scroll data-scroll-offset="20%">
            <span>CFO</span>
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
                Doug is responsible for budgeting and financial planning with an
                emphasis on financial projections, cashflow management, and
                proforma analysis. Doug is also charged with establishing and
                maintaining solid banking and creditor relationships to maintain
                financial flexibility.
              </p>
              <p>
                Doug graduated from Brigham Young University in 1981 with a
                bachelor’s degree in business and emphases in marketing and
                finance. After college, Doug accepted a position with RAM
                Company, where he has served in various capacities for nearly 40
                years. Doug joined when RAM Company was a fledgling startup and
                has helped grow it into a major aerospace manufacturing force.
                Over the years, Doug's responsibilities have included purchasing
                and material control, sales and marketing, and eventually all
                the financial duties of the CFO office. In 2019, Doug began
                splitting CFO duties between RAM Company and Intergalactic.
              </p>
              <p>
                Over the last 40 years, Doug has come to love the aerospace
                industry and has become an avid follower of trends in space and
                sky. The industry now faces so many new challenges from
                reduction of carbon footprint to the growing need for major
                innovations. Doug is proud to play a role in the changes that
                are shaping the future of aerospace.
              </p>
              <p>
                Doug and his wife love to be out in nature with their five dogs
                and, whenever possible, his many grandchildren. He enjoys being
                in nature and spends many of his weekends at a family mountain
                retreat.
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
