import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Link from "gatsby-link"

const Equipment = props => {
  const data = useStaticQuery(graphql`
    {
      allPrismicSolutions {
        nodes {
          data {
            divider_image {
              url
            }
            equipment_title {
              text
            }
            equipment_subtitle {
              text
            }
          }
        }
        edges {
          node {
            data {
              equipment {
                item {
                  document {
                    ... on PrismicSubsystem {
                      id
                      data {
                        heading {
                          text
                        }
                        image {
                          url
                        }
                        code {
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

  const sectionData = data.allPrismicSolutions.nodes[0].data
  const equipmentData = data.allPrismicSolutions.edges[0].node.data.equipment

  return (
    <EquipmentContainer data-scroll-section>
      <div
        className="equipment-hero"
        data-scroll
        data-scroll-offset="20%"
        style={{ backgroundImage: `url(${sectionData.divider_image?.url})` }}
      />
      <Container>
        <FlexArea>
          <div>
            <h5 data-scroll data-scroll-offset="20%">
              <span>{sectionData.equipment_title?.text}</span>
            </h5>
          </div>
          <div>
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <span>{sectionData.equipment_subtitle?.text}</span>
            </p>
          </div>
        </FlexArea>
        <HoverCover>
          {equipmentData.map((item, index) => {
            return (
              <EquipmentPiece
                to={`/solutions/subsystems/${item.item.document.uid}`}
                data-scroll
                data-scroll-offset="20%"
              >
                <h6 data-scroll data-scroll-offset="20%">
                  <span>
                    {item.item.document.data.code.text}
                    <br /> {item.item.document.data.heading.text}
                  </span>
                </h6>
                <EquipmnentImg
                  className="equipmentImg"
                  src={item.item.document.data.image.url}
                />
              </EquipmentPiece>
            )
          })}
        </HoverCover>
        <div style={{ clear: "both" }}></div>
      </Container>
    </EquipmentContainer>
  )
}

const EquipmentContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.aluminum};

  .equipment-hero {
    height: 875px;
    background-size: cover;
    background-position: center center;

    @media screen and (max-width: 768px) {
      height: 300px;
    }
  }

  .equipment-hero {
    opacity: 0;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }
  }
`
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.cream};
  padding: 60px 25px;

  @media screen and (min-width: 768px) {
    padding: 60px;
  }

  h5 {
    font-size: 31px;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: 48px;
    }
  }
`

const FlexArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: initial;
  }

  div {
    flex: 50%;
  }

  p {
    max-width: 500px;
    color: ${({ theme }) => theme.colors.aluminum};
  }
`

const EquipmentPiece = styled(Link)`
  width: 40%;
  float: left;
  border-top: 1px solid ${({ theme }) => theme.colors.aluminum};
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.aluminum};
  max-height: 105px;
  text-decoration: none;
  position: relative;
  opacity: 0;
  transition: all 700ms ease;

  @media screen and (max-width: 768px) {
    width: 100%;
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
    margin-right: 10%;
  }

  h6 {
    font-size: 20px;
    line-height: 100%;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: 25px;
      line-height: 30px;
    }
  }

  h6,
  .eyebrow {
    margin: 0;
  }

  &:hover {
    .equipmentImg {
      opacity: 1;
      visibility: visible;
    }
  }
`

const EquipmnentImg = styled.img`
  position: absolute;
  right: -250px;
  max-width: 325px;
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  transition: all 650ms ease;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const HoverCover = styled.span`
  padding: 80px 0;
  width: 100%;
  display: inline-block;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }

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

export default Equipment
