import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import AnchorLink from "./AnchorLink.js"
import Link from "gatsby-link"
import slide1 from "../images/carousel/slide-1.jpg"
import slide2 from "../images/carousel/slide-2.jpg"
import slide3 from "../images/carousel/slide-3.jpg"
import slide4 from "../images/carousel/slide-4.jpg"
import Arrow from "./Arrow.js"
import Line from "./Line.js"
import styled from "styled-components"

const Carousel = props => {
  const { carouselItems } = props

  return (
    <StyledSection data-scroll-section>
      <span id="carousel-container" className="slide-1">
        <Trigger id="carousel-sticky-trigger"></Trigger>
        <SliderContainer
          data-scroll
          data-scroll-sticky
          data-scroll-target="#carousel-sticky-trigger"
        >
          {carouselItems.map((item, index) => {
            return (
              <Slide className={`slide slide${index + 1}`}>
                <Container1 className="text-container">
                  <h5 data-scroll data-scroll-offset="30%">
                    <span>{item.slider_title[0]?.text}</span>
                  </h5>
                  <p className="fadein" data-scroll data-scroll-offset="30%">
                    <span>{item.slider_description[0]?.text}</span>
                  </p>
                  <AnchorLink to="/solutions">Learn More</AnchorLink>
                </Container1>
                <Container2 className="image-container">
                  <SlideImg
                    className="fadein"
                    data-scroll
                    data-scroll-offset="30%"
                    src={item.slider_image?.url}
                  />
                </Container2>
                <NavBar className="navbar">
                  <p className="eyebrow">
                    {carouselItems[index + 1]?.slider_title[0]?.text}
                  </p>
                  <div></div>
                  <Pagination>
                    <div className="square square-1"></div>
                    <div className="square square-2"></div>
                    <div className="square square-3"></div>
                    <div className="square square-4"></div>
                  </Pagination>
                  <p className="number">0{index + 1} ::</p>
                </NavBar>
              </Slide>
            )
          })}
        </SliderContainer>
        <FillerContent>
          <Slide1
            data-scroll
            data-scroll-offset="100%"
            data-scroll-call={"2"}
            data-scroll-repeat
          >
            &nbsp;
          </Slide1>
          <Slide2
            data-scroll
            data-scroll-offset="100%"
            data-scroll-call={"3"}
            data-scroll-repeat
          >
            &nbsp;
          </Slide2>
          <Slide3
            data-scroll
            data-scroll-offset="100%"
            data-scroll-call={"4"}
            data-scroll-repeat
          >
            &nbsp;
          </Slide3>
        </FillerContent>
      </span>
      {/*separate thing for mobile because timeline*/}
      <span id="mobile-container">
        {carouselItems.map((item, index) => (
          <div>
            <MobileLink to="/solutions">
              <h5>
                0{index + 1} :: {item.slider_title[0]?.text}
              </h5>
              <Arrow />
            </MobileLink>
            <MobileImg src={item.slider_image?.url} />
          </div>
        ))}
      </span>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  background: ${({ theme }) => theme.colors.cream};

  #mobile-container {
    display: block;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  #carousel-container {
    height: 100%;
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }

    .slide {
      height: 100%;

      .text-container,
      .image-container {
        transition: opacity 400ms ease;
        opacity: 0;
      }

      .text-container {
        transform: translate3d(30px, 0, 0);
        transition: transform 0s 300ms;
      }

      .image-container {
        position: relative;

        .layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: ${({ theme }) => theme.colors.cream};
          transition: none;
        }
      }

      .navbar {
        opacity: 0;
        transition: none;
      }
    }

    .square {
      background: transparent;
    }

    &.slide-1 {
      .slide1 {
        .text-container,
        .image-container {
          opacity: 1;
          transition: all 1.4s 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .text-container {
          transform: translate3d(0, 0, 0);
        }
        .layer {
          width: 0;
          transition: width 1.4s 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .navbar {
          opacity: 1;
        }
      }
      .square-1 {
        background: ${({ theme }) => theme.colors.black};
      }
    }

    &.slide-2 {
      .slide2 {
        .text-container,
        .image-container {
          opacity: 1;
          transition: all 1.4s 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .text-container {
          transform: translate3d(0, 0, 0);
        }
        .layer {
          width: 0;
          transition: width 1.4s 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .navbar {
          opacity: 1;
        }
      }
      .square-2 {
        background: ${({ theme }) => theme.colors.black};
      }
    }

    &.slide-3 {
      .slide3 {
        .text-container,
        .image-container {
          opacity: 1;
          transition: all 1.4s 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .text-container {
          transform: translate3d(0, 0, 0);
        }
        .layer {
          width: 0;
          transition: width 1.4s 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .navbar {
          opacity: 1;
        }
      }
      .square-3 {
        background: ${({ theme }) => theme.colors.black};
      }
    }

    &.slide-4 {
      .slide4 {
        .text-container,
        .image-container {
          opacity: 1;
          transition: all 1.4s 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .text-container {
          transform: translate3d(0, 0, 0);
        }
        .layer {
          width: 0;
          transition: width 1.4s 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        .navbar {
          opacity: 1;
        }
      }
      .square-4 {
        background: ${({ theme }) => theme.colors.black};
      }
    }
  }
`

const NavBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 73px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition: opacity 500ms ease;

  &.is-inview {
    opacity: 1;
  }

  .eyebrow {
    transform: rotate(-90deg);
    top: 40px;
    width: max-content;
    right: 32px;
    position: absolute;
    transform-origin right;
  }

  .number {
    transform: rotate(-90deg);
    transform-origin: center;
    position: relative;
    bottom: 20px;
  }
`

const Pagination = styled.div`
  width: 28px;
  > div {
    float: left;
    margin: 2px;
    width: 10px;
    height: 10px;
    border: 1px solid ${({ theme }) => theme.colors.black};

    &.active {
      background: ${({ theme }) => theme.colors.black};
    }
  }
`

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 90px;
  position: absolute;
  top: 0;
  left: 0;

  h5 {
    &.is-inview {
      &:after {
        width: 6vw;
      }
    }

    &:after {
      content: "";
      width: 0;
      transition: width 1s ease;
      height: 1px;
      background: ${({ theme }) => theme.colors.black};
      position: relative;
      display: block;
      margin-top: 20px;
    }
  }

  p {
    max-width: 420px;
    margin-top: 10px;
  }

  > div {
    :first-child {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: center;
    }
  }

  a {
    margin-top: 20px;
  }
`

const Container1 = styled.div`
  width: 50%;
  height: 100%;
`

const Container2 = styled.div`
  width: 70%;
  height: 100%;
`

const SlideImg = styled.img`
  margin: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  padding-right: 73px;
`

const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`

const Trigger = styled.div`
  width: 10px;
  height: 300vh;
  min-height: 970px;
  position: absolute;
  top: 0;
`

const FillerContent = styled.div`
  width: 100%;
  height: 200vh;
`

const Slide1 = styled.div`
  position: absolute;
  top: 50vh;
`

const Slide2 = styled.div`
  position: absolute;
  top: 100vh;
`

const Slide3 = styled.div`
  position: absolute;
  top: 150vh;
`

//mobile ish

const MobileLink = styled(Link)`
  padding: 30px 25px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  h5 {
    margin: 0;
    align-items: center;
  }
`

const MobileImg = styled.img`
  width: 100%;
  margin: 0;
  display: block;
`

export default Carousel
