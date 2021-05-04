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
            <span>Taylor Fausett</span>
          </h5>
          <p className="eyebrow fadein" data-scroll data-scroll-offset="20%">
            <span>Vice President of Programs</span>
          </p>
          <Info>
            <ImageContainer>
              <img
                className="fadein"
                data-scroll
                data-scroll-offset="20%"
                src={""}
              />
            </ImageContainer>
            <TextContainer
              className="fadein"
              data-scroll
              data-scroll-offset="20%"
            >
              <p>
                Taylor is one of the founding members of Intergalactic, joining
                when it was a crew of 5 people and meetings were held in a
                residential garage. Taylor is responsible for how programs are
                won, managed, budgeted, and executed. He and his teams manage
                the planning, development, and execution of every program that
                Intergalactic takes on.
              </p>
              <p>
                In his 15 years in the aerospace, Taylor has worked with some of
                the biggest names in the industry. He was awarded team of the
                year accolades from aerospace companies such as Pratt & Whitney
                and holds 6 patents covering aerospace fuel systems and
                components. Taylor pursued a college education specifically to
                get immersed in aerospace engineering. His first job out of
                college was as a components engineer, and he has built upon that
                experience ever since.
              </p>
              <p>
                Taylor has held a deep love for flight and aerospace since he
                was a child. At a young age, Taylor wanted to be around
                airplanes and knew he was going to be an engineer. To pay for
                college Taylor joined the Air National Guard at 18 as an F-16
                jet engine mechanic. In that role, Taylor traveled the world
                working on jet engines, staying close to aerospace, gather
                experience, and paying for college simultaneously. In college,
                Taylor won several engineering competitions — most notably the
                Formula SAE competition — for his work on fluid flow and
                aerodynamics.
              </p>
              <p>
                Outside of fixing and designing aircraft, Taylor became a
                private pilot in his own time and enjoys flying around his home
                in Maui. Taylor also enjoys working on his sports cars, sailing,
                and underwater and astrophotography.
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
