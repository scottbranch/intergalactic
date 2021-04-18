import React from "react"
import Line from "../Line"
import styled from "styled-components"
import Solution from "./Solution"

const Systems = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledInner>
        <div className="intro-container">
          <h3>GS1 SERIES — THERMAL<br/> MANAGEMENT SYSTEMS</h3>
         </div>
        <div className="overview">
         <p>Precision engineered and preconfigured, these systems can be modified to specific applications and assembled with the fastest lead times in the industry. </p>
        </div>
      </StyledInner>
      <Solution />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 160px 0 180px;
  background: ${({ theme }) => theme.colors.black};
`

const StyledInner = styled.div`
  display: flex;
  align-items: center;
  padding: 0 60px;
  justify-content: space-between;

  .intro-container, .overview {
    flex: 50%;

    p {
      max-width: 450px;
      color: ${({ theme }) => theme.colors.rust};
    }

    h3 {
      font-size: 62px;
      line-height: 73px;
      color: ${({ theme }) => theme.colors.cream};
    }
  }
`

export default Systems
