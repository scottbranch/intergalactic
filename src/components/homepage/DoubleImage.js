import React from "react"
import AnchorLink from "../AnchorLink"
import Line from "../Line"
import gadgets from "../../images/homepage/gadgets.jpg"
import space from "../../images/homepage/space.jpg"
import styled from "styled-components"

const DoubleImage = () => {
  return (
    <StyledSection data-scroll-section>
      <Container>
        <div>
          <StyledHeading>
            <span>Less</span>
            <span> Less Weight.</span>
            <span>MORE</span>
            <span> MORE COOL.</span>
          </StyledHeading>
          <TextContainer>
            <Line />
            <p>
              At one-third the size and weight, with three times the cooling
              capacity of legacy thermal management equipment. it’s clear that
              our X3 Series of thermal management systems are not here to play
              incremental games.
            </p>
          </TextContainer>
          <StyledAnchor to="/test">Our solutions</StyledAnchor>
        </div>
        <div>
          <SmallImg data-scroll data-scroll-speed="3">
            <img src={space} />
          </SmallImg>
          <MainImg data-scroll data-scroll-speed="1">
            <img src={gadgets} />
          </MainImg>
        </div>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 1400px;
  background: ${({ theme }) => theme.colors.cream};
`

const Container = styled.div`
  display: flex;
  padding: 0 0 0 50px;
  justify-content: space-between;
  align-items: center;
  padding: 150px 0 150px 20px;
`

const StyledHeading = styled.h4`
  span:nth-of-type(3) {
    margin: 40px 0 0 40px;
  }
  span:nth-of-type(4) {
    margin: 0 0 0 40px;
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
