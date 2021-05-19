import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/solution/subsystems/Hero"
import Solutions from "../components/solution/subsystems/Solutions"
import Helmet from "react-helmet"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const SubSystem = ({ data: { prismicSubsystem, allPrismicSubsystem } }) => {
  const { data, uid } = prismicSubsystem

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      isBrowser && window.scroll.update()
    }, 100)
    setIsLoaded(true)
  }, [])

  const handleClick = item => {
    const container =
      document !== undefined && document.getElementById("cases-container")
    if (document !== undefined) {
      container.className = "cases-container light"
    }
    container.classList.add(item)
  }

  return (
    <Layout className="dark">
      <SEO title={data.heading?.text} />
      <Helmet>
        <link rel="canonical" href={`http://ig.space/${uid}`} />
      </Helmet>
      <Hero
        eyebrow={data.code?.text}
        title={data.heading?.text}
        image={data.image?.url}
      />
      <Solutions description={data.summary?.text} />
      <StyledSection data-scroll-section>
        <Container>
          <SectionTitle data-scroll data-scroll-offset="20%">
            <span className="specs">KEY SPECS:</span>
          </SectionTitle>
          <SectionDesc>
            {data.features?.map((item, index) => (
              <span
                className="spec-items"
                key={index}
                data-scroll
                data-scroll-offset="20%"
              >
                {item.description.text}
              </span>
            ))}
          </SectionDesc>
        </Container>
      </StyledSection>
      <StyledSection data-scroll-section>
        <UseCaseContainer>
          <SectionTitle className="fadein">
            <span data-scroll data-scroll-offset="20%">
              USE CASES:
            </span>
          </SectionTitle>
          <SectionDesc
            id="cases-container"
            className={`cases-container light ${data.use_cases[0].title.text === 'Land & Sea' ? 'land-sea' : data.use_cases[0].title.text}`}
            data-scroll
            data-scroll-offset="20%"
          >
            <TabContainer>
              <ul>
                {data.use_cases?.map((item, index) => (
                  <li>
                    <button
                    className={`${item.title?.text === 'Land & Sea' ? 'land-sea' : item.title?.text}-button`}
                    onClick={() => handleClick(`${item.title?.text === 'Land & Sea' ? 'land-sea' : item.title?.text}`)}
                    >
                      {item.title?.text === "Land-Sea" ? "Land & Sea" : item.title?.text}
                    </button>
                  </li>
                ))}
              </ul>
            </TabContainer>
            <span className="desktop-list">
              {data.use_cases?.map((item, index) => (
                <span className={`text-block ${item.title?.text === 'Land & Sea' ? 'land-sea' : item.title?.text}`}>
                  {item.description.text}
                </span>
              ))}
            </span>
            {/*mobile stuff*/}
            <div className="mobile-list" data-scroll data-scroll-offset="20%">
              {data.use_cases?.map((item, index) => (
                <div className={`mobile-block`}>
                  <p
                    className="title fadein"
                    data-scroll
                    data-scroll-offset="20%"
                  >
                    <span>
                      {item.title?.text}
                    </span>
                  </p>
                  <p className="description">{item.description.text}</p>
                </div>
              ))}
            </div>
          </SectionDesc>
        </UseCaseContainer>
      </StyledSection>
    </Layout>
  )
}

const StyledSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cream};

  .desktop-list {
    display: none;

    @media screen and (min-width: 1000px) {
      display: block;
    }
  }

  .mobile-list {
    display: block;

    @media screen and (min-width: 1000px) {
      display: none;
    }
  }
`

const UseCaseContainer = styled.div`
  display: flex;
  padding: 70px 25px 100px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 160px 60px 390px;
    flex-direction: row;
  }
`

const Container = styled.div`
  display: flex;
  padding: 160px 25px 0;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 160px 60px 250px;
    flex-direction: row;
  }

  &:after {
    display block;
    content: '';
    width: 95%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
`

const SectionTitle = styled.div`
  flex: 50%;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  &.is-inview {
    .specs {
      opacity: 1;
    }
  }

  span {
    font-size: 25px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }
  }
`

const TabContainer = styled.div`
  margin-bottom: 45px;
  display: none;

  @media screen and (min-width: 1000px) {
    display: block;
  }

  ul {
    margin: 0;
  }

  li {
    display: inline-block;
  }

  button {
    background: none;
    border: none;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 25px;
    outline: none;
    padding: 0;
    margin-right: 75px;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

const SectionDesc = styled.div`
  flex: 50%;

  span.spec-items {
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 20px;
    line-height: 28px;
    display: block;
    padding-bottom: 20px;
    margin-bottom: 20px;
    opacity: 0;
    transition: opacity 1s ease;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};

    &.is-inview {
      opacity: 1;
    }

    @media screen and (min-width: 768px) {
      font-size: 25px;
      line-height: 36px;
    }
  }
`

export default SubSystem

export const pageQuery = graphql`
  query SubSystem($uid: String!) {
    prismicSubsystem(uid: { eq: $uid }) {
      uid
      data {
        code {
          text
        }
        features {
          description {
            text
          }
        }
        heading {
          text
        }
        image {
          url
        }
        summary {
          text
        }
        use_cases {
          description {
            text
          }
          title {
            text
          }
        }
      }
    }
    allPrismicSubsystem(sort: { order: DESC, fields: id }) {
      nodes {
        uid
        data {
          code {
            text
          }
          features {
            description {
              text
            }
          }
          heading {
            text
          }
          image {
            url
          }
          summary {
            text
          }
          use_cases {
            description {
              text
            }
            title {
              text
            }
          }
        }
      }
    }
  }
`
