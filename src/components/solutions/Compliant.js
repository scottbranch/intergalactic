import React from "react"
import Line from "../Line"
import styled from "styled-components"

const Compliant = () => {
  return (
    <StyledSection data-scroll-section>
      <StyledInner>
        <h3>Compliant</h3>
      </StyledInner>
      <StyledInner>
        <FlexArea>
          <p>
            <span>NAS412</span> Foreign Object Damage Prevention
          </p>
          <p>
            <span>AS5553</span> Counterfeit Electronic Parts; Avoidance,
            Detection, Mitigation and Disposition
          </p>
          <p>
            <span>DFAR’s</span> 252-204-7012 and 252-204-7020 for Cybersecurity
            AR 530-1 Operations Security
          </p>
        </FlexArea>
        <FlexArea>
          <p>
            <span>AS9102</span> Aerospace First Article Inspection Requirements
          </p>
          <p>
            <span>AS6174</span> Counterfeit Material; Assuring Acquisition of
            Authentic and Conforming Material
          </p>
        </FlexArea>
      </StyledInner>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 160px 0 180px;
  background: ${({ theme }) => theme.colors.cream};

  @media screen and (max-width: 768px) {
    padding: 80px 0 90px;
  }

  h3 {
    font-size: 25px;
    font-weight: 400;
  }
`

const FlexArea = styled.div`
  flex: 50%;
  margin-top: 80px;
  flex-grow: initial;
  padding-right: 40px;

  span {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }

  p,
  a {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.aluminum};
  }
`

const StyledInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 60px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: initial;
    padding: 0 25px;
  }
`

export default Compliant
