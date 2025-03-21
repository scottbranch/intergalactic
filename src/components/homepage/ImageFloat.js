import React, { useEffect } from "react"
import floater from "../../images/homepage/floater.jpg"
import styled from "styled-components"

const ImageFloat = () => {
  return (
    <>
      <StyledSection data-scroll-section id="image-float-container">
        <Trigger id="sticky-trigger"></Trigger>
        <StickyContainer
          data-scroll
          data-scroll-sticky
          data-scroll-target="#sticky-trigger"
        >
          <div>
            <p className="heading">
              <span>Applic</span>ations
            </p>
          </div>
          <span data-scroll>
            <ImgContainer data-scroll-speed="11" data-scroll>
              <Img id="float-image" src={floater} />
            </ImgContainer>
          </span>
        </StickyContainer>
        <FillerContent></FillerContent>
      </StyledSection>
    </>
  )
}

const Trigger = styled.div`
  width: 1px;
  height: 200vh;
  min-height: 970px;
  position: absolute;
  top: 0;
`

const FillerContent = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 970px;
  background: ${({ theme }) => theme.colors.black};
`

const StyledSection = styled.section`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.cream};
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 768px) {
    min-height: 970px;
    height: auto;
  }
`

const StickyContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;

  .eyebrow {
    position: relative;
    left: 30px;
  }

  .heading {
    font-size: 10.4vw;
    line-height: 105%;
    text-transform: uppercase;

    span {
      position: relative;
      z-index: 200;
    }
  }
`

const ImgContainer = styled.div`
  position: absolute;
  max-width: 180px;
  left: 0;
  top: 50%;
  margin-top: -130px;
  z-index: 100;
  transform: none;

  @media screen and (min-width: 768px) {
    margin-top: -200px;
    left: 35%;
    max-width: 315px;
    transform: translate3d(-50%, -50%, 0);
  }
`

const Img = styled.img`
  @media screen and (max-width: 768px) {
    transform: none !important;
  }
`

export default ImageFloat
