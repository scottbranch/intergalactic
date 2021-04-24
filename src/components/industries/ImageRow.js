import React from "react"
import industryrocket from "../../images/industries/rocket.jpg"
import gadget from "../../images/industries/gadget.jpg"
import styled from "styled-components"

const ImageRow = props => {
  return (
    <StyledSection data-scroll-section>
      <Container>
        <RocketImg
          src={industryrocket}
          data-scroll
          data-scroll-offset="20%"
          className="fadein"
        />
        <InfoBlock data-scroll data-scroll-offset="20%">
          <p className="eyebrow fadein" data-scroll data-scroll-offset="20%">
            <span>Innovations in Space & Sky</span>
          </p>
          <GadgetImg
            src={gadget}
            className="fadein"
            data-scroll
            data-scroll-offset="20%"
          />
          <Description className="fadein" data-scroll data-scroll-offset="20%">
            <span>
              Anywhere mankind or machines venture from ocean depths to extreme
              surface conditions or into and beyond the atmosphere our thermal
              management systems are onboard to see the mission through.
            </span>
          </Description>
        </InfoBlock>
      </Container>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 60px 0;
  background: ${({ theme }) => theme.colors.cream};

  @media screen and (min-width: 768px) {
    padding: 100px 0;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 65px;
  }
`

const RocketImg = styled.img`
  width: 100%;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    width: 30vw;
  }
`

const InfoBlock = styled.div`
  text-align: center;
  margin-right: 0;

  @media screen and (min-width: 768px) {
    margin-right: 50px;
  }

  .eyebrow {
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`

const GadgetImg = styled.img`
  width: 70%;

  @media screen and (min-width: 768px) {
    width: 20vw;
  }
`

const Description = styled.p`
  max-width: 500px;
  color: ${({ theme }) => theme.colors.rust};
  font-size: 16px;
  line-height: 24px;
`

export default ImageRow
