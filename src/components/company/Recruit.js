import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AnchorLink from "../AnchorLink"
import styled from "styled-components"

const Recruit = props => {
  const data = useStaticQuery(graphql`
    {
      allPrismicCompanyPage {
        nodes {
          data {
            apply_heading {
              text
            }
            apply_subheading {
              html
            }
          }
        }
      }
    }
  `)

  const sectionData = data.allPrismicCompanyPage.nodes[0].data

  return (
    <StyledSection data-scroll-section>
      <Container id="companyCareers">
        <h5>{sectionData.apply_heading?.text}</h5>
        <TextContainer>
          <div
            dangerouslySetInnerHTML={{
              __html: sectionData.apply_subheading?.html,
            }}
          />
          <StyledLink to="/contact" color="light">
            Apply
          </StyledLink>
        </TextContainer>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 100px 0;

  @media screen and (min-width: 768px) {
    padding: 135px 0;
  }

  h5 {
    max-width: 675px;

    @media screen and (min-width: 768px) {
      margin-right: 20px;
    }
  }

  h5,
  p {
    color: ${({ theme }) => theme.colors.gold};
  }
`

const Container = styled.div`
  display: flex;
  margin-left: 0;
  flex-direction: column;
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    margin-left: 60px;
    flex-direction: row;
  }
`

const TextContainer = styled.div`
  max-width: 570px;
`

const StyledLink = styled(AnchorLink)`
  margin-top: 45px;
  display: inline-block;
`

export default Recruit
