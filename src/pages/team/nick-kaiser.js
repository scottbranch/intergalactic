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
            <span>Nick Kaiser</span>
          </h5>
          <p className="eyebrow fadein" data-scroll data-scroll-offset="20%">
            <span>Vice President of Engineering</span>
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
                Nick joined Intergalactic shortly after formation of the
                company, when it was just a few ambitious former colleagues
                working across the country on Skype. Since then, Nick has
                combined his own experience with that of many other bright minds
                to create the technology and solutions that drive the company
                today. He currently oversees the Intergalactic engineering team
                and is responsible for successful technical execution on all
                programs while ensuring continued innovation and technology
                development. He also is heavily involved scouting new business,
                program planning, and continuing to develop and improve
                Intergalactic’s functional infrastructure.
              </p>
              <p>
                Prior to joining Intergalactic, Nick spent nearly 10 years in
                varying technical and leadership roles, primarily in aerospace
                thermal management at large industry OEMs. His experience ranges
                from aerothermal analyst to engineering management to program
                management. Through his years of experience in the industry, the
                dire need for innovation in this space became apparent and has
                been a huge source of motivation and inspiration.
              </p>
              <p>
                Aviation and space have been lifelong interests and passions for
                Nick, starting with seeing the movie Apollo 13 as a kid in the
                90s. He followed this passion in college, obtaining bachelor’s
                and master's degrees in aerospace engineering from Rensselaer
                Polytechnic Institute in his beloved homeland of upstate New
                York. He was fortunate to break into the industry in 2008
                despite the economic collapse
              </p>
              <p>
                and hasn’t looked back since. Nick is passionate about bringing
                back the innovation, excitement, and magic of aerospace that
                made this industry the pride of the nation in years past.
              </p>
              <p>
                Nick lives with his girlfriend in northern New Jersey in the NYC
                metro area. As the resident east-coaster of the company, Nick
                enjoys talking smack with the Intergalactic team and keeping it
                real. He also enjoys traveling, anything outdoors, ice hockey,
                and of course, the Yankees.
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
  min-width: 500px;
  max-height: 730px;
  margin-right: 195px;

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

  img {
    max-width: 500px;
    margin-right: 195px;
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
