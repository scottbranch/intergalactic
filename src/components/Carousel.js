import React from "react"
import Helmet from "react-helmet"
import AnchorLink from "./AnchorLink.js"
import Line from "./Line.js"
import slide1 from "../images/carousel/slide-1.jpg"
import slide2 from "../images/carousel/slide-2.jpg"
import slide3 from "../images/carousel/slide-3.jpg"
import slide4 from "../images/carousel/slide-4.jpg"
import styled from "styled-components"

const Carousel = props => {
  const sliderItems = [
    {
      title: "Civil",
      description: `Our thermal management solutions can cool any aspect of any
    commercial aircraft. Our core systems can be modified for most
    needs, or we can build a custom solution for any thermal
    challenge, including supersonics and electric flight.`,
      image: slide1,
      link: "/test",
    },
    {
      title: "Defense and Security",
      description: `We have a long history in defense, and our systems are sole-sourced on multiple tier-one defense platforms. Our thermal management solutions unlock innovation throughout the entire supply chain and enable our partners to build next-generation airborne defense and security platforms.`,
      image: slide2,
      link: "/test",
    },
    {
      title: "Space",
      description: `The space race is heating up, and it’s our job to keep it from overheating. Our systems, subsystems, and parts are built to handle the most demanding conditions, including the intense vibrations and heat extremes of space travel. `,
      image: slide3,
      link: "/test",
    },
    {
      title: "Land and Sea",
      description: `Everything we build is aerospace-rated, but our systems are ideal for mitigating heat on land and sea, as well. Bring us your most demanding thermal management need and we’ll solve it with a targeted solution. `,
      image: slide4,
      link: "/test",
    },
  ]

  return (
    <StyledSection data-scroll-section>
      <span id="carousel-container" className="slide-1">
        <Trigger id="carousel-sticky-trigger"></Trigger>
        <SliderContainer
          data-scroll
          data-scroll-sticky
          data-scroll-target="#carousel-sticky-trigger"
        >
          {sliderItems.map((item, index) => {
            return (
              <Slide className={`slide slide${index + 1}`}>
                <Container1 className="text-container">
                  <h5 data-scroll data-scroll-offset="30%">
                    <span>{item.title}</span>
                  </h5>
                  <p className="fadein" data-scroll data-scroll-offset="30%">
                    <span>{item.description}</span>
                  </p>
                  <AnchorLink to={item.link}>Learn More</AnchorLink>
                </Container1>
                <Container2 className="image-container">
                  <SlideImg
                    className="fadein"
                    data-scroll
                    data-scroll-offset="30%"
                    src={item.image}
                  />
                </Container2>
                <NavBar className="navbar">
                  <p className="eyebrow">
                    {sliderItems[index + 1] && sliderItems[index + 1].title}
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
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;

  #carousel-container {
    height: 100%;

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

export default Carousel
