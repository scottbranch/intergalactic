import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Carousel = props => {

  return (
    <StyledSection data-scroll-section>
      <CarouselContainer id="carousel-container" className="slide-1">
        <Trigger id="carousel-sticky-trigger"></Trigger>
        <SliderContainer
          data-scroll
          data-scroll-sticky
          data-scroll-target="#carousel-sticky-trigger">
            <div className="slide slide1"><h1>slide 1</h1></div>
            <div className="slide slide2"><h1>slide 2</h1></div>
            <div className="slide slide3"><h1>slide 3</h1></div>
            <div className="slide slide4"><h1>slide 4</h1></div>
        </SliderContainer>
        <FillerContent>
          <Slide1 data-scroll data-scroll-offset="100%" data-scroll-call={'2'} data-scroll-repeat>trigger 1</Slide1>
          <Slide2 data-scroll data-scroll-offset="100%" data-scroll-call={'3'} data-scroll-repeat>trigger 2</Slide2>
          <Slide3 data-scroll data-scroll-offset="100%" data-scroll-call={'4'} data-scroll-repeat>trigger 3</Slide3>
        </FillerContent>
      </CarouselContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
`

const CarouselContainer = styled.span`
  .slide {
    opacity: 0;
  }

  &.slide-1 {
    .slide1 {
      opacity: 1;
    }
  }

  &.slide-2 {
    .slide2 {
      opacity: 1;
    }
  }
`

const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.cream};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`

const Trigger = styled.div`
  width: 10px;
  background: green;
  height: 300vh;
  min-height: 970px;
  position: absolute;
  top: 0;
`

const FillerContent = styled.div`
  width: 100%;
  height: 200vh;
  background: red;
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
