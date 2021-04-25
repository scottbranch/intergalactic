import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

const UseCases = props => {
  const { items } = props

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
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
    <StyledSection data-scroll-section>
      <Container>
        <SectionTitle className="fadein" data-scroll>
          <span>USE CASES:</span>
        </SectionTitle>
        <SectionDesc
          id="cases-container"
          className={`cases-container light ${items[0].title}`}
          data-scroll
          data-scroll-offset="20%"
        >
          <TabContainer>
            <ul>
              {items.map((item, index) => (
                <li>
                  <button
                    className={`${item.title}-button`}
                    onClick={() => handleClick(`${item.title}`)}
                  >
                    {item.title === "land-sea" ? "land & sea" : item.title}
                  </button>
                </li>
              ))}
            </ul>
          </TabContainer>
          <span className="desktop-list">
            {items.map((item, index) => (
              <span className={`text-block ${item.title}`}>
                {item.description}
              </span>
            ))}
          </span>
          {/*mobile stuff*/}
          <div className="mobile-list" data-scroll data-scroll-offset="20%">
            {items.map((item, index) => (
              <div className={`mobile-block`}>
                <p
                  className="title fadein"
                  data-scroll
                  data-scroll-offset="20%"
                >
                  <span>
                    {item.title === "land-sea" ? "Land & Sea" : item.title}
                  </span>
                </p>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionDesc>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  .desktop-list {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }

  .mobile-list {
    display: block;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`

const Container = styled.div`
  display: flex;
  padding: 70px 25px 100px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 160px 60px 250px;
    flex-direction: row;
  }
`

const SectionTitle = styled.div`
  flex: 50%;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  span {
    font-size: 25px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.black};
  }
`

const TabContainer = styled.div`
  margin-bottom: 45px;
  display: none;

  @media screen and (min-width: 768px) {
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
  position: relative;
  width: auto;
  opacity: 0;
  transition: opacity 1s ease;

  &.is-inview {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    width: 670px;
  }

  .text-block {
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 25px;
    line-height: 36px;
    opacity: 0;
    transition: opacity 500ms ease;
    position: absolute;
  }

  .mobile-list {
    opacity: 0;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }
    .title {
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 5px;
    }
    .description {
      color: ${({ theme }) => theme.colors.aluminum};
      margin-bottom: 30px;
    }
  }
`

export default UseCases
