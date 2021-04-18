import React from "react"
import styled from "styled-components"
import EquipmentImg from "../../images/solutions/equipment.jpg";
import equipmentImg from "../../images/solutions/hover-1.jpg"
import Link from "gatsby-link"

const Equipment = props => {
  const equipmentPieces = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
  return (
    <EquipmentContainer data-scroll-section>
      <div className="equipment-hero" />
      <Container>
        <FlexArea>
          <div>
            <h5>Intergalactic Equipment</h5>
          </div>
          <div>
            <p>Available for stand alone applications or integrated into complete ECS solutions.</p>
          </div>
        </FlexArea>
        <HoverCover>
          {equipmentPieces.map((item, index) => {
            return (
              <EquipmentPiece to="/test" data-scroll data-scroll-offset="20%">
                <h6>IGE—B3HE<br/> BOREAS3 HEAT EXCHANGER</h6>
                <EquipmnentImg className="equipmentImg" src={equipmentImg} />
              </EquipmentPiece>
            )
          })}
        </HoverCover>
        <div style={{ clear: "both" }}></div>
      </Container>
    </EquipmentContainer>
  )
}

const EquipmentContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.aluminum};

  .equipment-hero {
    height: 875px;
    background-image: url('${EquipmentImg}');
    background-size: cover;
    background-position: center center;
  }
`
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.cream};
  padding: 60px;

  h5 {
    font-size: 48px;
    font-weight: 400;
  }
`

const FlexArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    flex: 50%;
  }

  p {
    max-width: 500px;
    color: ${({ theme }) => theme.colors.aluminum};
  }
`

const EquipmentPiece = styled(Link)`
  width: 40%;
  float: left;
  border-top: 1px solid ${({ theme }) => theme.colors.aluminum};
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.aluminum};
  max-height: 105px;
  text-decoration: none;
  position: relative;
  opacity: 0;
  transition: all 700ms ease;

  &.is-inview {
    opacity: 1;
  }

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background: transparent;
    transition: background 700ms ease;
    position: absolute;
    bottom: 0;
  }

  &:hover {
    border-top: 1px solid ${({ theme }) => theme.colors.black} !important;

    &:after {
      background: ${({ theme }) => theme.colors.black};
    }

    h6,
    .eyebrow,
    svg path {
      color: ${({ theme }) => theme.colors.black} !important;
      fill: ${({ theme }) => theme.colors.black} !important;
    }
  }

  h6,
  p,
  svg path {
    transition: all 1s ease;
  }

  :nth-child(odd) {
    margin-right: 10%;
  }

  h6 {
    font-size: 25px;
    line-height: 30px;
    font-weight: 400;
  }

  h6,
  .eyebrow {
    margin: 0;
  }

  &:hover {
    .equipmentImg {
      opacity: 1;
      visibility: visible;
    }
  }
`

const EquipmnentImg = styled.img`
  position: absolute;
  right: -250px;
  max-width: 325px;
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  transition: all 650ms ease;
`

const HoverCover = styled.span`
  padding: 80px 0;
  width: 100%;
  display: inline-block;
  position: relative;
  &:hover {
    a {
      border-top: 1px solid ${({ theme }) => theme.colors.gold};
      h6,
      p,
      svg path {
        color: ${({ theme }) => theme.colors.gold};
        fill: ${({ theme }) => theme.colors.gold};
      }
    }
  }
`

export default Equipment
