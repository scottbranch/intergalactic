import React from "react"
import floatLarge from "../../images/company/float-large.jpg"
import floatSmall from "../../images/company/float-small.jpg"
import styled from "styled-components"

const DoubleImage = props => {
  return (
    <StyledSection data-scroll-section>
      <Paragraph className="fadein" data-scroll data-scroll-offset="20%" id="companyOverview">
        <span>
          Our founding engineers led thermal management at large aerospace
          companies and couldn’t find the solutions they needed to build
          next-gen aerospace platforms. So, they decided to build it themselves.
        </span>
      </Paragraph>
      <Container>
        <div></div>
        <ImageContainer>
          <SmallImg data-scroll data-scroll-speed="3">
            <img src={floatSmall} />
          </SmallImg>
          <MainImg data-scroll data-scroll-speed="1">
            <img src={floatLarge} />
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <span>
                We’re a team of engineers, technologists, designers,
                mathematicians, and problem solvers committed to a singular
                idea: reviving the no-boundaries mentality in aerospace. We grew
                up inspired by Charles Lindbergh, Amelia Earhardt, and Neil
                Armstrong, and we want to play a role in enabling a new
                generation of giant leaps for mankind.
              </span>
            </p>
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <span>
                We’re headquartered in St. George, Utah, a beautiful town
                nestled in the red sands of Southern Utah between Salt Lake City
                and Las Vegas. Our unconventional location allows us to keep
                overhead costs low and attract remote talent from around the
                country. It’s also just an amazing place to live and work — come
                visit and see what we mean.
              </span>
            </p>
          </MainImg>
        </ImageContainer>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    padding: 140px 0 180px;
  }
`

const Paragraph = styled.p`
  max-width: 700px;
  margin-left: 25px;
  margin-bottom: 70px;
  color: ${({ theme }) => theme.colors.aluminum};
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: 768px) {
    margin-left: 62px;
    font-size: 25px;
    line-height: 36px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

const ImageContainer = styled.div`
  margin-left: auto;
`

const MainImg = styled.div`
  max-width: 1200px;
  z-index: 100;

  img {
    width: 100%;
    margin-bottom: 60px;

    @media screen and (min-width: 768px) {
      margin-bottom: 150px;
    }
  }

  p {
    max-width: 670px;
    color: ${({ theme }) => theme.colors.aluminum};
    font-size: 16px;
    line-height: 24px;
  }
`

const SmallImg = styled.div`
  max-width: 350px;
  position: absolute;
  top: 30%;
  z-index: 150;

  img {
    width: 30%;
    left: -25px;
    position: relative;

    @media screen and (min-width: 768px) {
      width: 100%;
      left: -150px;
    }
`

export default DoubleImage
