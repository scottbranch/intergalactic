import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/solution/Hero"
import Solutions from "../components/solution/Solutions"
import Helmet from "react-helmet"
import styled from "styled-components"
import { isBrowser } from "react-device-detect"

const System = ({ data: { prismicSystem, allPrismicSystem, uid } }) => {
  const { data } = prismicSystem

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
      container.className = "cases-container dark"
    }
    container.classList.add(item)
  }

  return (
    <Layout className="light">
      <SEO title={data.heading[0]?.text} />
      <Hero
        eyebrow={data.code[0]?.text}
        title={data.heading[0]?.text}
        heroImg={data.image.url}
      />
      <Solutions description={data.summary[0]?.text} />
      <StyledSection data-scroll-section>
        <Container>
          <SectionTitle data-scroll data-scroll-offset="20%">
            <span className="specs">KEY SPECS:</span>
          </SectionTitle>
          <SectionDesc>
            {data.specs?.map((item, index) => (
              <span
                className="spec-items"
                key={index}
                data-scroll
                data-scroll-offset="20%"
              >
                {item.description[0]?.text}
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
            className={`cases-container dark ${data.use_cases[0].title[0].text}`}
            data-scroll
            data-scroll-offset="20%"
          >
            <TabContainer>
              <ul>
                {data.use_cases?.map((item, index) => (
                  <li>
                    <button
                      className={`${item.title[0]?.text}-button`}
                      onClick={() => handleClick(`${item.title[0]?.text}`)}
                    >
                      {item.title[0]?.text === "land-sea"
                        ? "land & sea"
                        : item.title[0]?.text}
                    </button>
                  </li>
                ))}
              </ul>
            </TabContainer>
            <span className="desktop-list">
              {data.use_cases?.map((item, index) => (
                <span
                  className={`text-block ${item.title[0]?.text}`}
                  data-scroll
                  data-scroll-offset="20%"
                >
                  {item.description[0]?.text}
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
                      {item.title[0]?.text === "land-sea"
                        ? "Land & Sea"
                        : item.title[0]?.text}
                    </span>
                  </p>
                  <p className="description">{item.description[0]?.text}</p>
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
  background-color: ${({ theme }) => theme.colors.black};

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
    background-color: ${({ theme }) => theme.colors.aluminum};
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
    color: ${({ theme }) => theme.colors.cream};
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
      color: ${({ theme }) => theme.colors.white};
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
    border-bottom: 1px solid ${({ theme }) => theme.colors.aluminum};

    &.is-inview {
      opacity: 1;
    }

    @media screen and (min-width: 768px) {
      font-size: 25px;
      line-height: 36px;
    }
  }
`

export default System

export const pageQuery = graphql`
  query System($uid: String!) {
    prismicSystem(uid: { eq: $uid }) {
      uid
      data {
        code {
          text
        }
        specs {
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
    allPrismicSystem(sort: { order: DESC, fields: id }) {
      nodes {
        uid
        data {
          code {
            text
          }
          specs {
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
