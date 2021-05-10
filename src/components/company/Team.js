import React from "react"
import Link from "gatsby-link"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Team = props => {
  const data = useStaticQuery(graphql`
    {
      allPrismicCompanyPage(
        sort: { fields: data___team___team_member___link_type }
      ) {
        edges {
          node {
            id
            data {
              team {
                team_member {
                  document {
                    ... on PrismicTeamMember {
                      id
                      data {
                        title {
                          text
                        }
                        name {
                          text
                        }
                        headshot {
                          url
                        }
                        description {
                          text
                        }
                      }
                      uid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const sectionData = data.allPrismicCompanyPage.edges[0].node.data.team

  return (
    <StyledSection data-scroll-section>
      <Container id="companyTeam">
        <h5>Team</h5>
        <HoverCover>
          {sectionData.map((item, index) => {
            console.log("team: ", item)
            return (
              <TeamMember
                to={`/team/${item?.team_member.document.uid}`}
                data-scroll
                data-scroll-offset="20%"
              >
                <h6>{item.team_member.document.data.name?.text}</h6>
                <p className="eyebrow">
                  {item.team_member.document.data.title?.text}
                </p>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2597 0.613897L10.1918 1.70585L16.4863 8.11601L0.767343 8.11478L0.760445 9.677L16.4922 9.67822L10.2 16.1122L11.2671 17.1773L19.3626 8.89941L11.2597 0.613897Z"
                    fill="#6B6358"
                  />
                </svg>
                <Headshot
                  className="headshot"
                  src={item.team_member.document.data.headshot?.url}
                />
              </TeamMember>
            )
          })}
        </HoverCover>
        <div style={{ clear: "both" }}></div>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.cream};
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 140px 0 160px;
  }

  h5 {
    margin-bottom: 90px;
    @media screen and (max-width: 768px) {
      font-size: 31px;
      line-height: 100%;
      margin-bottom: 30px;
    }
  }
`

const Container = styled.div`
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    padding: 0 60px;
  }
`

const TeamMember = styled(Link)`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.aluminum};
  height: 105px;
  text-decoration: none;
  position: relative;
  opacity: 0;
  transition: all 700ms ease;
  float: none;

  @media screen and (min-width: 768px) {
    float: left;
    width: 40%;
  }

  &.is-inview {
    opacity: 1;
  }

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background: transparent;
    transition: background 700ms ease;
    position: absolute;
    bottom: 0;
  }

  &:hover {
    border-top: 1px solid ${({ theme }) => theme.colors.black} !important;

    &:after {
      background: ${({ theme }) => theme.colors.black};
    }

    h6,
    .eyebrow,
    svg path {
      color: ${({ theme }) => theme.colors.black} !important;
      fill: ${({ theme }) => theme.colors.black} !important;
    }
  }

  h6,
  p,
  svg path {
    transition: all 1s ease;
  }

  :nth-child(odd) {
    margin-right: 100px;
  }

  h6 {
    max-width: 300px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
      max-width: 130px;
    }
  }

  .eyebrow {
    max-width: 250px;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  h6,
  .eyebrow {
    margin: 0;
  }

  &:hover {
    .headshot {
      opacity: 1;
      visibility: visible;
    }
  }
`

const Headshot = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    right: -250px;
    max-width: 325px;
    opacity: 0;
    visibility: hidden;
    z-index: 100;
    transition: all 650ms ease;
    display: block;
  }
`

const HoverCover = styled.span`
  width: 100%;
  display: inline-block;
  position: relative;
  &:hover {
    a {
      border-top: 1px solid ${({ theme }) => theme.colors.gold};
      h6,
      p,
      svg path {
        color: ${({ theme }) => theme.colors.gold};
        fill: ${({ theme }) => theme.colors.gold};
      }
    }
  }
`

export default Team
