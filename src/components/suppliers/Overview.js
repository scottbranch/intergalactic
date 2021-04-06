import React from "react"
import overviewImg from "../../images/suppliers/overview.jpg"
import Line from "../Line"
import styled from "styled-components"

const ValueProp = props => {
  return (
    <StyledSection data-scroll-section>
      <InnerContainer>
        <div>
          <StyledHeading data-scroll data-scroll-offset="30%">
            <span id="span-0">Overview</span>
          </StyledHeading>
          <StyledSubHeading className="fadein" data-scroll data-scroll-offset="20%">
            <span>
              SUPPLIERS :: 01
            </span>
          </StyledSubHeading>
          <TextContainer>
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <span>
                We can only build great things if we work with the best people
                and materials. Our suppliers are hand-picked, best-in-class, and
                share our no-boundaries mentality.
              </span>
            </p>
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <span>
                Contact us below if you’d like to be considered as an
                Intergalactic supplier.
              </span>
            </p>
          </TextContainer>
        </div>
        <OverviewImg src={overviewImg} alt="Interior of warehouse " />
      </InnerContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 155px 0 155px;
  background: ${({ theme }) => theme.colors.cream};
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`

const StyledHeading = styled.h3`
  font-size: 48px;
  span:nth-of-type(2) {
    left: 115px;
  }
`

const StyledSubHeading = styled.p`
  color: #91897D;
  font-size: 14px;
  letter-spacing: 3px;
  font-family: ${({ theme }) => theme.fonts.cartographMedium};
`

const InnerContainer = styled.div`
  display: flex;
  padding: 0 60px;
  justify-content: space-between;
  align-items: center;
`

const TextContainer = styled.div`
  margin: 20px 0;

  p {
    margin-top: 20px;
    max-width: 400px;
  }
`

const OverviewImg = styled.img`
  max-width: 430px;
`

export default ValueProp
