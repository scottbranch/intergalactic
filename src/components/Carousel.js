import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Carousel = props => {

  const carouselItems = [
    'slider 1',
    'slider 2',
    'slider 3',
    'slider 4'
  ]

  return (
    <StyledSection data-scroll-section>
      <SliderContainer data-scroll data-scroll-sticky data-scroll-target="#filler-content">
        <div className="slide slide1"><h2>slide 1</h2></div>
        <div className="slide slide2"><h2>slide 2</h2></div>
        <div className="slide slide3"><h2>slide 3</h2></div>
        <div className="slide slide4"><h2>slide 4</h2></div>
      </SliderContainer>
      <FillerContent id="filler-content" data-scroll data-scroll-offset="50%"></FillerContent>
    </StyledSection>
  )
}

const StyledSection = styled.section`

`

const SliderContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: blue;
`

const FillerContent = styled.div`
  height: 200vh;
  background: green;
`

export default Carousel
