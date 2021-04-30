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
            <span>Phillip Norris</span>
          </h5>
          <p className="eyebrow fadein" data-scroll data-scroll-offset="20%">
            <span>Director of Quality and Compliance</span>
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
                Phillip joined Intergalactic in 2021 and is responsible for
                quality and compliance of all hardware and systems. Based on his
                experience leading quality assurance and compliance efforts at
                RAM Company, Phillip built a mature Quality Management System
                (QMS) adapted to Intergalactic’s business model. Phillip is a
                registered Aerospace Experienced Lead Auditor with Probitas in
                AS9100, AS9110 and AS9120 aviation, space and defense quality
                standards along with ISO9001.
              </p>
              <p>
                Phillip began his aviation career right out of high school by
                joining the U.S. Air Force as a structural repair technician,
                where he repaired B-52s, KC-135s, and F-15s. Phillip paid his
                way through Purdue University’s engineering program by repairing
                and overhauling private and commercial aircraft ranging from
                Cessna 172s to Boeing 747s. Phillip holds airframe and
                powerplant licenses from the Federal Aviation Administration. In
                addition to his duties at Intergalactic, Phillip is the
                Accountable Manager for RAM Company’s FAA Type 145 certificated
                repair station.
              </p>
              <p>
                Phillip is passionate about compliance, specifically USG
                compliance. With the growing cybersecurity requirements, Phillip
                is back in the classroom taking IT and cybersecurity classes at
                Southern Utah University. He is fully immersed learning the
                finer points of aerospace cybersecurity to keep Intergalactic
                and its customers safe.
              </p>
              <p>
                Phillip lives in Southern Utah with his wife, Stephanie, and he
                enjoys getting off the grid in his Can Am and exploring remote
                areas of the desert Southwest.
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
