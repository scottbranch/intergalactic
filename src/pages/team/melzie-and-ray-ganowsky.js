import React from "react"
import Layout from "../../components/layout"
import headshot from "../../images/company/team/Melzie-Ganowsky.jpg"
import styled from "styled-components"

const TeamMember = props => {
  return (
    <Layout className="dark">
      <StyledSection data-scroll-section>
        <Container>
          <h5 data-scroll>
            <span>Melzie & Ray Ganowsky</span>
          </h5>
          <p className="eyebrow fadein" data-scroll data-scroll-offset="20%">
            <span>Co-owners</span>
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
                Melzie and Ray Ganowsky own a majority stake in Intergalactic as
                co-founders and co-owners of RAM Company in St. George, Utah.
                They helped bring Intergalactic to its current home in
                picturesque Southern Utah in early 2019.
              </p>
              <p>
                Melzie and Ray founded RAM Company in 1975 after relocating to
                St. George from upstate New York. Initially, they started the
                company in their garage and eventually opened a
                1,000-square-foot facility. They started with a single lathe and
                began designing, manufacturing, and assembling precision parts
                for Kohler, Mack Truck, United Technologies, and a growing list
                of additional customers.
              </p>
              <p>
                In 1979, RAM Company expanded its capabilities, acquired
                industry certifications and pedigree, and began designing and
                manufacturing precision components for various aerospace
                programs in the military and defense, commercial aviation,
                legacy space (Shuttle Program and International Space Station),
                and commercial space markets.
              </p>
              <p>
                Melzie and Ray live in St. George and still enjoy going into the
                office every day and calling into company meetings but have
                turned over day-to-day operations of the company they built over
                the space of five decades.
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
