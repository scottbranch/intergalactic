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
  background-color: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`

const Container = styled.div`
  display: flex;
  padding: 160px 60px 250px;
`

const SectionTitle = styled.div`
  flex: 50%;

  span {
    font-size: 25px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.black};
  }
`

const TabContainer = styled.div`
  margin-bottom: 45px;

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
  width: 670px;

  .text-block {
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 25px;
    line-height: 36px;
    opacity: 0;
    transition: opacity 500ms ease;
    position: absolute;
  }
`

export default UseCases
