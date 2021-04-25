import React from "react"
import Line from "../Line"
import styled from "styled-components"
import Solution from "./Solution"

const Systems = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledInner>
        <div className="intro-container">
          <h3 data-scroll data-scroll-offset="20%">
            <span>
              GS1 SERIES — THERMAL
              <br /> MANAGEMENT SYSTEMS
            </span>
          </h3>
        </div>
        <div className="overview">
          <p className="fadein" data-scroll data-scroll-offset="20%">
            <span>
              Precision engineered and preconfigured, these systems can be
              modified to specific applications and assembled with the fastest
              lead times in the industry.
            </span>{" "}
          </p>
        </div>
      </StyledInner>
      <Solution />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 160px 0 180px;
  background: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: 768px) {
    padding: 80px 0 90px;
  }
`

const StyledInner = styled.div`
  display: flex;
  align-items: center;
  padding: 0 60px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 25px;
  }

  .intro-container,
  .overview {
    flex: 50%;

    p {
      max-width: 450px;
      color: ${({ theme }) => theme.colors.rust};
    }

    h3 {
      font-size: 62px;
      line-height: 73px;
      color: ${({ theme }) => theme.colors.cream};

      @media screen and (max-width: 768px) {
        font-size: 31px;
        line-height: 35px;
      }
    }
  }
`

export default Systems
