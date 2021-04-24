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
            <span>Kevin Kerlin</span>
          </h5>
          <p className="eyebrow fadein" data-scroll data-scroll-offset="20%">
            <span>Vice President of Operations</span>
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
                Kevin was tapped from RAM Manufacturing to lead operations at
                Intergalactic after ownership changed hands in 2019. He manages
                supply chain, production, IT, building infrastructure, shipping
                and receiving, inventory, and the company’s ERP system.
              </p>
              <p>
                Kevin began his career in 2003 as a mechanical engineer after
                completing a bachelor’s degree in mechanical engineering from
                the University of Utah. Kevin continued his education by earning
                an MBA from Southern Utah University in 2008. That same year he
                co-founded a technology startup company where he was
                instrumental in developing a new rotary gas expander. He later
                became president and CEO, where he raised capital, formed a
                team, and led the sales and marketing efforts as the company
                went to market and secured its first customers.
              </p>
              <p>
                In 2017, Kevin joined RAM Manufacturing as a sales engineer,
                managing over 50% of the company’s domestic and international
                customers. This position gave him valuable experience in the
                aerospace industry as he visited customers and suppliers across
                the country and overseas.
              </p>
              <p>
                Kevin is an avid dirt biker and he also enjoys boating,
                wakeboarding, camping and working on classic muscle cars. He
                lives in St. George, Utah with his wife and two boys.
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
