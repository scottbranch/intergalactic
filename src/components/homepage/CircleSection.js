import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

const Filler1 = () => {
  return (
    <FillerContent1
      data-scroll
      data-scroll-offset="50%"
      data-scroll-call={"section2"}
      data-scroll-repeat
    ></FillerContent1>
  )
}

const CircleSection = () => {
  return (
    <StyledSection data-scroll-section id="orb-section">
      <Trigger id="circle-trigger"></Trigger>
      <TextContainer
        data-scroll
        data-scroll-sticky
        data-scroll-target="#circle-trigger"
        data-scroll-call={"section1"}
        data-scroll-repeat
      >
        <Orb id="orb"></Orb>
        <Text1 className="text1">
          <p className="eyebrow">/ INTRO</p>
          <StyledHeading>The future is now</StyledHeading>
        </Text1>
        <Text2 className="text2">
          <Number>
            3<span>X</span>
          </Number>
          <p>More Efficient</p>
        </Text2>
        <Text3 className="text3">
          <Number>
            1<span>/</span>3
          </Number>
          <p>The Size and Weight</p>
        </Text3>
      </TextContainer>
      {Filler1()}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  height: auto;
  background: ${({ theme }) => theme.colors.cream};
  text-align: center;
  position: relative;
  overflow: hidden;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }

  &.step-1 {
    .text1 {
      opacity: 0;
      transform: translate3d(0, -50px, 0);
      transition-delay: 1s;
    }
    .text2 {
      transition-delay: 1.2s;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    .text3 {
      transform: translate3d(0, 40px, 0);
      opacity: 0;
    }
    #orb {
      transform: translate3d(-50%, -50%, 0) scale(1);
    }
  }

  &.step-2 {
    .text1 {
      opacity: 0;
      transform: translate3d(0, -50px, 0);
    }
    .text2 {
      opacity: 0;
      transform: translate3d(0, -50px, 0);
      transition-delay: 1s;
    }
    .text3 {
      transition-delay: 1.2s;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    #orb {
      transform: translate3d(-50%, -50%, 0) scale(0.3);
    }
  }

  &.done {
    .text1 {
      opacity: 0;
      transform: translate3d(0, -50px, 0);
    }
    .text2 {
      opacity: 0;
      transform: translate3d(0, -50px, 0);
      transition-delay: 1s;
    }
    .text3 {
      transition-delay: 1.2s;
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    #orb {
      transform: translate3d(-50%, -50%, 0) scale(0.3);
    }
  }
`

const Text1 = styled.div`
  position: absolute;
  transition: all 500ms ease;

  p {
    color: ${({ theme }) => theme.colors.rust};
    margin-left: -1020px;
  }
`

const Text2 = styled.div`
  position: absolute;
  opacity: 0;
  transform: translate3d(0, 40px, 0);
  transition: all 500ms ease;
  color: ${({ theme }) => theme.colors.cream};
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.black};
    -webkit-text-stroke: 2px ${({ theme }) => theme.colors.cream};
  }
`

const Text3 = styled.div`
  position: absolute;
  opacity: 0;
  transform: translate3d(0, 40px, 0);
  transition: all 500ms ease;
  color: ${({ theme }) => theme.colors.cream};
  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.black};
    -webkit-text-stroke: 2px ${({ theme }) => theme.colors.cream};
  }
`

const Number = styled.p`
  font-size: 6.7vw;
  line-height: 115%;
`

const Orb = styled.div`
  position: absolute;
  width: 120vw;
  height: 120vw;
  background: ${({ theme }) => theme.colors.black};
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0) scale(0);
  transition: transform 1s ease;
  border-radius: 50%;
`

const TextContainer = styled.div`
  text-align: left;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Trigger = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 200vh;
`

const FillerContent1 = styled.div`
  background: ${({ theme }) => theme.colors.cream};
  height: 100vh;
`

const StyledHeading = styled.h4`
  font-size: 8.3vw;
  line-height: 110%;
  -webkit-text-stroke: 2px #e6e1da;
`

export default CircleSection
