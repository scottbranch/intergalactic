import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import floatLarge from "../../images/company/float-large.jpg"
import floatSmall from "../../images/company/float-small.jpg"
import styled from "styled-components"

const DoubleImage = props => {
  const data = useStaticQuery(graphql`
    {
      allPrismicCompanyPage {
        nodes {
          data {
            about_text {
              text
            }
            about_subtext {
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
      <Paragraph
        className="fadein"
        data-scroll
        data-scroll-offset="20%"
        id="companyOverview"
      >
        <span>{sectionData.about_text?.text}</span>
      </Paragraph>
      <Container>
        <div></div>
        <ImageContainer>
          <SmallImg data-scroll data-scroll-speed="3">
            <img src={floatSmall} />
          </SmallImg>
          <MainImg data-scroll data-scroll-speed="1">
            <img src={floatLarge} />
            <div
              dangerouslySetInnerHTML={{
                __html: sectionData.about_subtext?.html,
              }}
            />
          </MainImg>
        </ImageContainer>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    padding: 140px 0 180px;
  }
`

const Paragraph = styled.p`
  max-width: 700px;
  margin-left: 25px;
  margin-bottom: 70px;
  color: ${({ theme }) => theme.colors.aluminum};
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: 768px) {
    margin-left: 62px;
    font-size: 25px;
    line-height: 36px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

const ImageContainer = styled.div`
  margin-left: auto;
`

const MainImg = styled.div`
  max-width: 1200px;
  z-index: 100;

  img {
    width: 100%;
    margin-bottom: 60px;

    @media screen and (min-width: 768px) {
      margin-bottom: 150px;
    }
  }

  p {
    max-width: 670px;
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 16px;
    line-height: 24px;
  }
`

const SmallImg = styled.div`
  max-width: 350px;
  position: absolute;
  top: 30%;
  z-index: 150;

  img {
    width: 30%;
    left: -25px;
    position: relative;

    @media screen and (min-width: 768px) {
      width: 100%;
      left: -150px;
    }
`

export default DoubleImage
