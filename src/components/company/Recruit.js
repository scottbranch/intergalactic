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
            apply_link {
              url
              target
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
          <StyledLink href={sectionData.apply_link.url} target={sectionData.apply_link.target} color="light">
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

const StyledLink = styled.a`
  margin-top: 45px;
  display: inline-block;
  text-transform: uppercase;
  border: 1px solid
    ${({ theme, color }) =>
      color === "light" ? theme.colors.gold : theme.colors.black};
  color: ${({ theme, color }) =>
    color === "light" ? theme.colors.gold : theme.colors.black};
  text-decoration: none;
  padding: 20px 42px;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
  font-size: 15px;
  letter-spacing: 1px;
`

export default Recruit
