import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-link"
import styled from "styled-components"

const TeamMember = ({ data: { prismicTeamMember, allPrismicTeamMember } }) => {
  const { data, uid } = prismicTeamMember

  return (
    <Layout className="dark">
      <SEO title={data.page_title.text} description={data.meta_description.text} />
      <Helmet>
        <link rel="canonical" href={`http://ig.space/${uid}`} />
      </Helmet>
      <StyledSection data-scroll-section>
        <Container>
          <h5 data-scroll>
            <span>{data.name.text}</span>
          </h5>
          <p className="eyebrow fadein" data-scroll data-scroll-offset="20%">
            <span>{data.title.text}</span>
          </p>
          <Info>
            <ImageContainer>
              <img
                className="fadein"
                data-scroll
                data-scroll-offset="20%"
                src={data.headshot.url}
              />
            </ImageContainer>
            <TextContainer
              className="fadein"
              data-scroll
              data-scroll-offset="20%"
            >
              <div
                dangerouslySetInnerHTML={{ __html: data.description.html }}
              />
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
  padding: 140px 30px;

  @media screen and (min-width: 768px) {
    padding: 330px 62px;
  }

  h5 {
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
      margin-bottom: 30px;
    }
  }

  .eyebrow {
    ${({ theme }) => theme.colors.aluminum};
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
      margin-bottom: 100px;
    }
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

export const pageQuery = graphql`
  query teamMember($uid: String!) {
    prismicTeamMember(uid: { eq: $uid }) {
      uid
      data {
        meta_description {
          text
        }
        page_title {
          text
        }
        description {
          html
        }
        headshot {
          url
        }
        name {
          text
        }
        title {
          text
        }
      }
    }
    allPrismicTeamMember(sort: { order: DESC, fields: id }) {
      nodes {
        uid
        data {
          meta_description {
            text
          }
          page_title {
            text
          }
          description {
            html
          }
          headshot {
            url
          }
          name {
            text
          }
          title {
            text
          }
        }
      }
    }
  }
`
