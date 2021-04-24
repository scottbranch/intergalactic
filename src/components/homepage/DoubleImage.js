import React from "react"
import AnchorLink from "../AnchorLink"
import Line from "../Line"
import metal from "../../images/homepage/metal.jpg"
import space from "../../images/homepage/space.jpg"
import styled from "styled-components"

const DoubleImage = () => {
  return (
    <StyledSection data-scroll-section>
      <Container>
        <div>
          <StyledHeading data-scroll data-scroll-offset="30%">
            <span id="span-0">Less</span>
            <span id="span-1"> Less Weight.</span>
            <span id="span-2">MORE COOL.</span>
            <span id="span-3">COOL.</span>
          </StyledHeading>
          <TextContainer>
            <Line />
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <span>
                At one-third the size and weight, with three times the cooling
                capacity of legacy thermal management equipment. it’s clear that
                our X3 Series of thermal management systems are not here to play
                incremental games.
              </span>
            </p>
          </TextContainer>
          <StyledAnchor to="/solutions">Our solutions</StyledAnchor>
        </div>
        <div>
          <SmallImg data-scroll data-scroll-speed="3">
            <img src={space} />
          </SmallImg>
          <MainImg data-scroll data-scroll-speed="1">
            <img src={metal} />
          </MainImg>
        </div>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  max-height: 1400px;
  background: ${({ theme }) => theme.colors.cream};
  position: relative;
`

const Container = styled.div`
  display: flex;
  padding: 0 0 0 50px;
  justify-content: space-between;
  align-items: center;
  padding: 150px 0 150px 20px;
`

const StyledHeading = styled.h4`
  z-index: 500;
  position: relative;
  span:nth-of-type(3) {
    margin: 10px 0 0 220px;
  }
  span:nth-of-type(4) {
    margin: 0 0 0 430px;
  }
`

const TextContainer = styled.div`
  margin: 0 0 0 40px;
  p {
    max-width: 420px;
    padding-top: 25px;
    margin-bottom: 60px;
  }
`

const StyledAnchor = styled(AnchorLink)`
  margin: 0 0 0 40px;
`

const MainImg = styled.div`
  max-width: 910px;
  z-index: 100;

  img {
    width: 100%;
  }
`

const SmallImg = styled.div`
  max-width: 350px;
  position: absolute;
  top: 35%;
  z-index: 150;

  img {
    width: 100%;
    left: -40px;
    position: relative;
  }
`

export default DoubleImage
