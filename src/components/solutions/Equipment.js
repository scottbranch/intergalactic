import React from "react"
import styled from "styled-components"
import EquipmentImg from "../../images/solutions/equipment.jpg"
import equipmentImg from "../../images/solutions/hover-1.jpg"
import Link from "gatsby-link"

const Equipment = props => {
  const equipmentPieces = [
    {
      code: "IGE—B3HE",
      title: "BOREAS3 HEAT EXCHANGER",
      link: "boreas3-heat-exchanger",
      image: equipmentImg,
    },
    {
      code: "IGE-A1C",
      title: "Aries1 Controller",
      link: "aries1-controller",
      image: equipmentImg,
    },
    {
      code: "IGE-HXP",
      title: "HydraX Pump",
      link: "hydrax-pump",
      image: equipmentImg,
    },
    {
      code: "IGE-L4SC",
      title: "Libra4 Scroll Compressor",
      link: "libra4-scroll-compressor",
      image: equipmentImg,
    },
    {
      code: "IGE-C1PDU",
      title: "Carina1 Power Distribution Unit",
      link: "carina1-power-distribution-unit",
      image: equipmentImg,
    },
    {
      code: "IGE-C7EEV",
      title: "Cygnus7 Electronic Expansion Valve",
      link: "cygnus7-electronic-expansion-valve",
      image: equipmentImg,
    },
    {
      code: "IGE-OXDA",
      title: "OrionXD Accumulator",
      link: "orionxd-accumulator",
      image: equipmentImg,
    },
    {
      code: "IGE-FEH",
      title: "Fornax Electric Heaters",
      link: "fornax-electric-heaters",
      image: equipmentImg,
    },
    {
      code: "IGE-DSTFCV",
      title: "Dorado ST Liquid Flow Control Valve",
      link: "dorado-st-liquid-flow-control-valve",
      image: equipmentImg,
    },
    {
      code: "IGE-VACV",
      title: "Vela Airflow Control Valve",
      link: "vela-airflow-control-valve",
      image: equipmentImg,
    },
  ]
  return (
    <EquipmentContainer data-scroll-section>
      <div className="equipment-hero" data-scroll data-scroll-offset="20%" />
      <Container>
        <FlexArea>
          <div>
            <h5 data-scroll data-scroll-offset="20%">
              <span>Intergalactic Equipment</span>
            </h5>
          </div>
          <div>
            <p className="fadein" data-scroll data-scroll-offset="20%">
              <span>
                Available for stand-alone applications or integrated into
                complete thermal management solutions
              </span>
            </p>
          </div>
        </FlexArea>
        <HoverCover>
          {equipmentPieces.map((item, index) => {
            return (
              <EquipmentPiece
                to={`/solutions/subsystems/${item.link}`}
                data-scroll
                data-scroll-offset="20%"
              >
                <h6 data-scroll data-scroll-offset="20%">
                  <span>
                    {item.code}
                    <br /> {item.title}
                  </span>
                </h6>
                <EquipmnentImg className="equipmentImg" src={item.image} />
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
    background-image: url("${EquipmentImg}");
    background-size: cover;
    background-position: center center;

    @media screen and (max-width: 768px) {
      height: 300px;
    }
  }

  .equipment-hero {
    opacity: 0;
    transition: opacity 1s ease;

    &.is-inview {
      opacity: 1;
    }
  }
`
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.cream};
  padding: 60px 25px;

  @media screen and (min-width: 768px) {
    padding: 60px;
  }

  h5 {
    font-size: 31px;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: 48px;
    }
  }
`

const FlexArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: initial;
  }

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

  @media screen and (max-width: 768px) {
    width: 100%;
  }

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
    font-size: 20px;
    line-height: 100%;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      font-size: 25px;
      line-height: 30px;
    }
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const HoverCover = styled.span`
  padding: 80px 0;
  width: 100%;
  display: inline-block;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }

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
