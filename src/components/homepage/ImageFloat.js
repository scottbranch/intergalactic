import React from "react"
import spacefloater from "../../images/homepage/space-floater.jpg"
import styled from "styled-components"

const ImageFloat = () => {
  return (
    <StyledSection>
      <div>
        <p className="eyebrow">/intro</p>
        <p className="heading">
          <span>Applic</span>ations
        </p>
        <Img src={spacefloater} />
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.cream};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  .eyebrow {
    position: relative;
    left: 30px;
  }

  .heading {
    font-size: 186px;
    line-height: 224px;
    text-transform: uppercase;

    span {
      position: relative;
      z-index: 200;
    }
  }
`

const Img = styled.img`
  position: absolute;
  max-width: 314px;
  left: 50%;
  transform: translateX(-50%) rotate(-30deg);
  z-index: 100;
`

export default ImageFloat
