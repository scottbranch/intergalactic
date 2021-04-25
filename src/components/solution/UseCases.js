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
      container.className = "cases-container"
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
          className={`cases-container ${items[0].title}`}
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
          {items.map((item, index) => (
            <span className={`text-block ${item.title}`}>
              <p className="mobile-title">{item.title}</p>
              {item.description}
            </span>
          ))}
        </SectionDesc>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.aluminum};
`

const Container = styled.div`
  display: flex;
  padding: 160px 60px 250px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 80px 60px 100px;
  }
`

const SectionTitle = styled.div`
  flex: 50%;

  span {
    font-size: 25px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.gold};
  }
`

const TabContainer = styled.div`
  margin-bottom: 45px;

  ul {
    margin: 0;

    @media screen and (max-width: 768px) {
      display: none;
    }
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
  position: relative;
  width: 670px;
  opacity: 0;
  transition: opacity 1s ease;

  &.is-inview {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }

  .mobile-title {
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
      color: ${({ theme }) => theme.colors.gold};
      text-transform: capitalize;
      margin-bottom: 10px;
    }
  }

  .text-block {
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 25px;
    line-height: 36px;
    opacity: 0;
    transition: opacity 500ms ease;
    position: absolute;

    @media screen and (max-width: 768px) {
      opacity: 1;
      position: relative;
      display: block;
      margin-bottom: 30px;
    }
  }
`

export default UseCases
