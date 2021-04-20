import React from "react"
import Line from "../Line"
import styled from "styled-components"

const Filter = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledInner>
        <div className="intro-container">
          <p>Filter by:</p>
         </div>
        <div className="overview">
         <ul>
           <li>All</li>
           <li>Intergalactic in the news</li>
           <li>Press Release Archive</li>
           <li>The Boom BoX</li>
         </ul>
        </div>
      </StyledInner>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 10px 0;
  background: ${({ theme }) => theme.colors.cream};
`

const StyledInner = styled.div`
  display: flex;
  align-items: center;
  padding: 0 60px;
  justify-content: space-between;

  .intro-container, .overview {
    p {
      color: ${({ theme }) => theme.colors.black};
      font-size: 15px;
      text-transform: uppercase;
    }
    
    ul {
      display: flex;
      justify-content: space-evenly;
    }

    li {
      text-transform: uppercase;
      list-style: none;
      margin: 0 10px;
      font-size: 15px;
    }
  }
`

export default Filter
