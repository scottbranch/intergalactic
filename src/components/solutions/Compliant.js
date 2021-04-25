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
            <a href="#">NAS412</a> Foreign Object Damage Prevention
          </p>
          <p>
            <a href="#">AS5553</a> Counterfeit Electronic Parts; Avoidance,
            Detection, Mitigation and Disposition
          </p>
          <p>
            <a href="#">DFAR’s</a> 252-204-7012 and 252-204-7020 for
            Cybersecurity AR 530-1 Operations Security
          </p>
        </FlexArea>
        <FlexArea>
          <p>
            <a href="#">AS9102</a> Aerospace First Article Inspection
            Requirements
          </p>
          <p>
            <a href="#">AS6174</a> Counterfeit Material; Assuring Acquisition of
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
